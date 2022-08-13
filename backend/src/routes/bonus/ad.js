const { adBonus } = require("../../lib/configs/config.bonus");
const {
  getUser,
  canTakeAdBonus,
  addMoney,
} = require("../../lib/modules/promiseFunctions");
const { getRandomBonus } = require("../../lib/modules/utils");

module.exports = {
  method: "POST",
  auth: true,
  async execute(fastify, request, reply) {
    const { auth } = request?.body;
    try {
      await getUser(fastify.mysql, auth.vkUserId)
        .then(async (r) => {
          await canTakeAdBonus(fastify.mysql, r)
            .then(async (canTake) => {
              if (canTake == true) {
                const bonusSum = await getRandomBonus(adBonus.split("-"));
                await addMoney(fastify.mysql, auth.vkUserId, bonusSum)
                  .then(() => {
                    console.log("response");
                    reply.send({
                      status: "success",
                      result: canTake,
                      bonusSum,
                    });
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              } else {
                reply.send({ status: "success", result: canTake });
              }
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      reply.send({ status: "error", error_message: "error occured" });
    }
  },
};
