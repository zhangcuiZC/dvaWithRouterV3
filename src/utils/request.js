import fetch from "dva/fetch";

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  let params = {
      credentials: "include"
    },
    method = options.method || "get",
    data = options.data || {};
  switch (method) {
    case "get":
    case "GET":
      url += data ? `?${formDataCode(data)}` : "";
      break;
    case "put":
    case "PUT":
      if (data.type === "json") {
        params.headers = { "Content-Type": "application/json; charset=UTF-8;" };
        delete data.type;
        params.body = JSON.stringify(data);
      } else {
        params.headers = {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;"
        };
        params.body = formDataCode(data);
      }
      params.method = "PUT";
      break;
    case "post":
    case "POST":
      if (data.type === "json") {
        params.headers = { "Content-Type": "application/json; charset=UTF-8;" };
        delete data.type;
        params.body = JSON.stringify(data);
      } else {
        params.headers = {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;"
        };
        params.body = formDataCode(data);
      }
      params.method = "POST";
      break;
    case "delete":
    case "DELETE":
      url += data ? `?${formDataCode(data)}` : "";
      params.method = "DELETE";
      break;
  }
  return fetch(`/api${url}`, params)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

/**
 * 创建修改参数格式的方法，改成提交的Form Data格式
 */
function formDataCode(data) {
  let str = "";
  for (const i in data) {
    if (data.hasOwnProperty(i)) {
      str = `${str + i}=${data[i]}&`;
    }
  }
  return str ? str.substring(0, str.length - 1) : "";
}
