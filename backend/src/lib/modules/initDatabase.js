module.exports = (fastify) => {
  fastify.mysql.query(
    `CREATE TABLE IF NOT EXISTS users
    (
        id INT(18) NOT NULL PRIMARY KEY UNIQUE,
        balance BIGINT(255) DEFAULT 0,
        last_ad_view BIGINT DEFAULT 0,
        last_bonus BIGINT DEFAULT 0 ,
        ban INT(1) DEFAULT 0 ,
        day_win BIGINT DEFAULT 0 ,
        last_repost_id BIGINT DEFAULT 0 
    )`,
    function onResult(err, result) {
      console.log(err || result);
    }
  );
};
