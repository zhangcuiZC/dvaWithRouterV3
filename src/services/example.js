import request from "../utils/request";

const apiConfig = [
  { name: "getExampleList", url: "/example", method: "get" },
  { name: "createExample", url: "/example", method: "put" }
];

const servicesMap = {};
apiConfig.forEach(resource => {
  servicesMap[resource.name] = async function(data) {
    return request(resource.url, {
      method: resource.method,
      prefix: resource.prefix,
      data
    });
  };
});

export default servicesMap;
