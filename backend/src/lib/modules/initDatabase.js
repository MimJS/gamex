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
        },
    );
    fastify.mysql.query(
        `CREATE TABLE IF NOT EXISTS games
    (
        id INT(18) NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        time INT(18) DEFAULT 30,
        md5 VARCHAR(255) NOT NULL,
        checkString VARCHAR(255) NOT NULL,
        active INT(1) DEFAULT 1
    )`,
        function onResult(err, result) {
            console.log(err || result);
        },
    );
    fastify.mysql.query(
        `CREATE TABLE IF NOT EXISTS gamesBet
    (
        id INT(18) NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
        gameName VARCHAR(255) NOT NULL,
        userId INT(18) NOT NULL,
        betType VARCHAR(255) NOT NULL,
        betSum BIGINT NOT NULL
    )`,
        function onResult(err, result) {
            console.log(err || result);
        },
    );
};
