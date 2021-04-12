const fetch = require("node-fetch")
const shellys = "https://shellys-chan.herokuapp.com/api/"

function yta(url) {
  return new Promise(async(resolve, reject) => {
    fetch(shellys + "yta?url=" + url)
    .then(res => res.json)
    .then(resolve)
  })
}

function ytv(url) {
  return new Promise(async(resolve, reject) => {
    fetch(shellys + "ytv?url=" + url)
    .then(res => res.json)
    .then(resolve)
  })
}

module.exports = {
  yta,
  ytv
}