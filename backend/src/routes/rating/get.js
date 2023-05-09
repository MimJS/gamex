const { getTop } = require('../../lib/modules/promiseFunctions');

module.exports = {
    method: 'POST',
    auth: true,
    async execute(fastify, request, reply) {
        try {
            await getTop(fastify.mysql)
                .then((r) => {
                    reply.send({
                        status: 'success',
                        data: r,
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        } catch (error) {
            reply.send({ status: 'error', error_message: 'error occured' });
        }
    },
};
