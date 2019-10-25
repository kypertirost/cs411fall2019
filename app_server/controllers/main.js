var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()


console.log(request.response)
// var data1 = JSON.parse(request.response)
//
// var weather = data1.weather;
// (weather.main).push
// // l = data1.length
// //   if(data1 && data1.length > 0) {
// //     list = ['<ul>'];
// //     for (i = 0; i < l; i ++) {
// //       list.push('<li ' + data1[i].weather.main + '</li>');
// //       list.push();
// //     }
// //   }
// //   list.push('</ul>')


module.exports.index = function (req, res) {
  res.render('index.html', { title: 'Express' });
}
