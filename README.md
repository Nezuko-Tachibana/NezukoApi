<img src="img/image.png" />

<h1 align="center">Nezuko API</h1>
<p align="center">Simple API Modules Npmjs</p>

Installation
```js
npm i nezuko-api
```
Usage
```js
const nezuko = require("nezuko-api")

nezuko.yta("http://www.youtube.com/watch?v=ucjKhemaCuM").then(async(res) => {
  // YouTube Download Audio
  return console.log(res)
})

nezuko.fbdl("https://www.facebook.com/alanwalkermusic/videos/277641643524720").then(async(res) => {
  // Facebook Media Download
  return console.log(res)
})

nezuko.igdl("https://www.instagram.com/p/CNXuBZZnOEj/?igshid=12svpjrvkmd75").then(async(res) => {
  // Instagram Media Download
  return console.log(res)
})
```

Modules Ini Menggunakan API Dari <a href="https://shellys-chan.herokuapp.com/api/">Shelly's</a>.

Error? <a href="https://wa.me/62895429419944">Hubungi Saya!</a>

<br>

Terimakasih Buat Yang Memakai Modules Ini❤️❤️
