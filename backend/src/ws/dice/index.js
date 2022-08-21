const { execute } = require("../../lib/middleware/vkAuth");
const { GameInitInterface } = require("../WSInterfaces");

let connectIds = [];

module.exports = (wsx) => {
  wsx.on("connect", (client) => {
    if (!client.query) {
      return client.terminate(4000);
    } else {
      const query = new URLSearchParams(client.query);
      const auth = {
        vkAppId: Number(query.get("vkAppId")),
        vkQueryString: query.get("vkQueryString"),
        vkAppVersion: Number(query.get("vkAppVersion")),
        vkUserId: Number(query.get("vkUserId")),
      };
      execute(null, { auth: true }, { body: { auth } }, client).then(
        (result) => {
          console.log(result);
          if (!result) {
            client.terminate(4000);
          } else {
            console.log(connectIds);
            const existUser = connectIds.find((v) => v.id == auth.vkUserId);
            if (existUser) {
              existUser.client.terminate(4000);
            }
            connectIds.push({
              id: auth.vkUserId,
              client: client,
              clientId: client.headers["sec-websocket-key"],
            });
            client.send({ type: "user:connected" });
          }
        }
      );
    }
  });

  wsx.on("disconnect", (client) => {
    console.log(client);
    const userIndex = connectIds.findIndex(
      (v) => v.clientId == client.headers["sec-websocket-key"]
    );
    connectIds.splice(userIndex, 0);
    client.send({ type: "user:diconnect" });
  });

  wsx.clientMessage(
    { type: "game:init" },
    GameInitInterface,
    (client, data) => {}
  );
};
