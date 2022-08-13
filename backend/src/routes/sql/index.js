module.exports = {
  method: "POST",
  async execute(fastify, request, reply) {
    const { sql } = request?.body;
    try {
      fastify.mysql.query(
        sql,
        (onResult = (err, res) => {
          if (err) {
            reply.send({ status: false, error: err });
          } else {
            reply.send({ status: true, res });
          }
        })
      );
    } catch (error) {
      reply.send({ status: "error", error_message: "error occured" });
    }
  },
};
