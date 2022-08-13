const fastify = require("fastify")({ logger: true });
const path = require("path");
const initDatabase = require("./lib/modules/initDatabase");

const start = async () => {
  try {
    console.log(path.join(__dirname, "/routes"));
    await fastify.register(require("fastify-easy-route"), {
      path: "src/routes",
      middleware: "src/lib/middleware/vkAuth.js",
    });
    await fastify.register(require("@fastify/cors"), {
      origin: "*",
      methods: "POST",
    })
    await fastify.register(require('@fastify/mysql'), {
      connectionString: 'mysql://gamexAdmin:Maikal_1546855dm@109.120.182.86/GAMEX-DATABASE'
    })
    await initDatabase(fastify)
    await fastify.listen({ port: 3000 });
    console.log("server start");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

module.exports = { start };
