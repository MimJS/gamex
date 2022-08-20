module.exports = {
  method: "POST",
  async execute(fastify, request, reply) {
    const { sql } = request?.body;
    try {
      fastify.mysql.query(
        sql,
        (onResult = (err, res) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
          }
        })
      );
    } catch (error) {
      reply.send({ status: "error", error_message: "error occured" });
    }
  },
};
