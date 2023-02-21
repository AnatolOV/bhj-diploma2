const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  let { url, data, method, callback } = options;

  let formData = new FormData();

  if (options.method == "GET") {
    url = url + "?";
    for (let key in data) {
      url += key + "=" + data[key] + "&";
    }
    url = url.slice(0, -1);
  } else {
    for (let key in data) {
      formData.append(key, data[key]);
    }
  }

  xhr.open(options.method, url);
  xhr.send(formData);

  try {
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState == xhr.DONE && xhr.status === 200) {
        options.callback(xhr.response.error, xhr.response);
      }
    });
  } catch (error) {
    options.callback(error);
  }
};

/*createRequest({
  method: "POST",
  url: "/user/login",
  callback: () => console.log(2),
  data: { d: 0, s: 3, gg: 999 },
});*/
