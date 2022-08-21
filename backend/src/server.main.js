const fastify = require("fastify")({ logger: true });
const { MySQLConnectionString } = require("./lib/configs/config.main");
const initDatabase = require("./lib/modules/initDatabase");
const { Wsapix } = require("wsapix");
const ws = require("./ws");

const start = async () => {
  try {
    await fastify.register(require("fastify-easy-route"), {
      path: "src/routes",
      middleware: "src/lib/middleware/vkAuth.js",
    });
    await fastify.register(require("@fastify/cors"), {
      origin: "*",
    });
    await fastify.register(require("@fastify/mysql"), {
      connectionString: MySQLConnectionString,
    });
    await initDatabase(fastify);
    await fastify.listen({ port: 3000 });
    const wsx = await Wsapix.WS({ server: fastify.server });
    console.log(fastify);
    await ws(wsx);
    console.log("server start");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

module.exports = { start };
