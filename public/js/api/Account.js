class Account extends Entity {
  static URL = "/account/";

  static get(id = "", callback) {
    createRequest({
      method: "GET",
      data,
      url: this.URL + id,
      callback,
    });
  }
}
