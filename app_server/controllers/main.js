var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()
request.open('GET', 'api.openweathermap.org/data/2.5/weather?q=London&appid=d6b790feb395d998105df9db1b50ece2', true)
request.send()

var data1 = JSON.parse(request.response)
var i, l, list;
l = data1.length
  if(data1 && data1.length > 0) {
    list = ['<ul>'];
    for (i = 0; i < l; i ++) {
      list.push('<li ' + data1[i].weather.main + '</li>');
      list.push();
    }
  }
  list.push('</ul>')

const app = document.getElementById('root')
const data = document.createElement('text')

module.exports.index = function (req, res) {
  res.render('index.html', { title: 'Express' });
}
