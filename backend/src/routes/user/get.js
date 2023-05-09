const { getUser } = require('../../lib/modules/promiseFunctions');

module.exports = {
    method: 'POST',
    auth: true,
    async execute(fastify, request, reply) {
        const { auth } = request?.body;
        try {
            await getUser(fastify.mysql, auth.vkUserId)
                .then((r) => {
                    console.log(r);
                    reply.send({ status: 'success', data: r });
                })
                .catch((e) => {
                    console.log(e);
                });
        } catch (error) {
            reply.send({ status: 'error', error_message: 'error occured' });
        }
    },
};
