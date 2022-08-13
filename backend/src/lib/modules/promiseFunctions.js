const {
  adBonusCalldown,
  buttonBonusCalldown,
} = require("../configs/config.bonus");

const createUser = (mysql, userId) =>
  new Promise((rs, rj) => {
    mysql.query(
      "INSERT INTO users (id) VALUES (?)",
      [userId],
      (onResult = (err, res) => {
        if (err) {
          rj(err);
        } else {
          getUser(mysql, userId)
            .then((r) => {
              rs(r);
            })
            .catch((e) => {
              rj(e);
            });
        }
      })
    );
  });

const getUser = (mysql, userId) =>
  new Promise((rs, rj) => {
    mysql.query(
      "SELECT * FROM users WHERE id = ?",
      [userId],
      (onResult = (err, res) => {
        if (err) {
          rj(err);
        } else {
          console.log(res.length);
          if (res.length == 0) {
            //create user
            console.log("createUser");
            createUser(mysql, userId)
              .then((r) => {
                console.log(r);
                rs(r);
              })
              .catch((e) => {
                console.log(e);
                rj(e);
              });
          } else {
            rs(res[0]);
          }
        }
      })
    );
  });

const canTakeAdBonus = (mysql, user) =>
  new Promise((rs, rj) => {
    const { last_ad_view, id } = user;
    const now = Date.now();
    console.log(last_ad_view, user);
    if (last_ad_view < now) {
      mysql.query(
        "UPDATE users SET last_ad_view=? WHERE id=?",
        [Number(now + adBonusCalldown), id],
        (onResult = (err, res) => {
          if (err) {
            rj(err);
          } else {
            rs(true);
          }
        })
      );
    } else {
      rs(false);
    }
  });

const canTakeButtonbonus = (mysql, user) =>
  new Promise((rs, rj) => {
    const { last_bonus, id } = user;
    const now = Date.now();
    if (last_bonus < now) {
      mysql.query(
        "UPDATE users SET last_bonus=? WHERE id=?",
        [Number(now + buttonBonusCalldown), id],
        (onResult = (err, res) => {
          if (err) {
            rj(err);
          } else {
            rs(true);
          }
        })
      );
    } else {
      rs(false);
    }
  });

const addMoney = (mysql, userId, sum) =>
  new Promise((rs, rj) => {
    mysql.query(
      "UPDATE users SET balance=balance+? WHERE id=?",
      [Math.trunc(sum), userId],
      (onResult = (err, res) => {
        if (err) {
          rj(err);
        } else {
          rs(true);
        }
      })
    );
  });

const decMoney = (mysql, userId, sum) =>
  new Promise((rs, rj) => {
    mysql.query(
      "UPDATE users SET balance=balance-? WHERE id=?",
      [Math.trunc(sum), userId],
      (onResult = (err, res) => {
        if (err) {
          rj(err);
        } else {
          rs(true);
        }
      })
    );
  });

module.exports = {
  getUser,
  canTakeAdBonus,
  canTakeButtonbonus,
  addMoney,
  decMoney,
};
