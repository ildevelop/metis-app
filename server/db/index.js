const rules = require("./rules.json");
const db = require("./db.json");

const getRules = (item) => {
  return rules[item];
};
const getTableList = () => {
  return db;
};
module.exports = {
  getRules,
  getTableList,
};
