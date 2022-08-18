const { VkAppVersion, VkAppId } = require("../configs/config.main");
const { checkVkHashValid } = require("../modules/utils");

const execute = async (fastify, command, request, reply) => {
  try {
    if (command.auth) {
      const { body } = request;
      if (!body) {
        return reply.send({ status: "error", error_message: "invalid params" });
      }
      const { auth } = body;
      if (!auth) {
        return reply.send({ status: "error", error_message: "invalid params" });
      }
      const { vkAppId, vkQueryString, vkAppVersion, vkUserId } = auth;
      if (
        typeof vkAppId !== "number" ||
        typeof vkQueryString !== "string" ||
        vkQueryString.length == 0 ||
        typeof vkAppVersion !== "number" ||
        typeof vkUserId !== "number"
      ) {
        return reply.send({ status: "error", error_message: "invalid params" });
      }
      if (vkAppId !== vkAppId) {
        return reply.send({ status: "error", error_message: "invalid params" });
      }
      if (vkAppVersion !== VkAppVersion) {
        return reply.send({ status: "warning", warningType: "newAppVersion" });
      }
      if(vkAppId !== VkAppId) {
        return reply.send({ status: "error", error_message: "invalid params" });
      }
      if (!checkVkHashValid(vkUserId, vkQueryString)) {
        return reply.send({ status: "error", error_message: "vkSign invalid" });
      }
      return true;
    } else {
      return true;
    }
  } catch (err) {
    console.log(err);
    return reply.send({ error: 500 });
  }
};

module.exports = { execute };
