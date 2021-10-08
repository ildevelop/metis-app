import axios from "axios";

const PATH = process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

const getTableList = () => {
  return axios.get(`${PATH}/api/tableList`);
};

const getRules = async (item) => {
  return axios.get(`${PATH}/api/rules?item=${item}`);
};

const Api = {
  getTableList,
  getRules,
};

export default Api;
