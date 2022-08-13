const { buttonBonus } = require("../../lib/configs/config.bonus");
const {
  getUser,
  canTakeButtonbonus,
  addMoney,
} = require("../../lib/modules/promiseFunctions");

module.exports = {
  method: "POST",
  auth: true,
  async execute(fastify, request, reply) {
    const { auth } = request?.body;
    try {
      await getUser(fastify.mysql, auth.vkUserId)
        .then(async (r) => {
          await canTakeButtonbonus(fastify.mysql, r)
            .then(async (canTake) => {
              if (canTake == true) {
                await addMoney(fastify.mysql, auth.vkUserId, buttonBonus)
                  .then(() => {
                    reply.send({
                      status: "success",
                      result: canTake,
                      bonusSum: buttonBonus,
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
