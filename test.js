const nezuko = require("nezuko-api")

nezuko.yta("http://www.youtube.com/watch?v=ucjKhemaCuM").then(async(res) => {
  // YouTube Download Audio
  return console.log(res)
})