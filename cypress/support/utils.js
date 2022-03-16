class Utils {
  getObjectAsQueryString(dto) {
    var str = "";
    for (var key in dto) {
      if (str != "") {
        str += "&";
      }
      str += key + "=" + dto[key];
    }
    return str;
  }

  encode(value) {
    return new Buffer.from(value).toString("base64");
  }

  decode(value) {
    return new Buffer.from(value, "base64").toString();
  }
}

export default Utils;
