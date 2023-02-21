class Entity {
  static URL = "";

  static list(data, callback) {
    createRequest({
      method: "GET",
      data,
      url: this.URL,
      callback,
    });
  }

  static patch(data, callback) {
    createRequest({
      method: "PATCH",
      data,
      url: this.URL,
      callback,
    });
  }

  static create(data, callback) {
    createRequest({
      method: "PUT",
      data,
      url: this.URL,
      callback,
    });
  }

  static remove(data, callback) {
    createRequest({
      method: "DELETE",
      data,
      url: this.URL,
      callback,
    });
  }
}
