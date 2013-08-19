/**
 * Captcha PNG img generator
 * @Author: George Chan
 * @Email: gchan@21cn.com
 * @Version: 1.0
 * @Date: 2013-08-18
 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
 */

var http = require('http');
var captchapng = require('captchapng');

http.createServer(function (request, response) {
    if(request.url == '/captcha.png') {
        var p = new captchapng(80,30,parseInt(Math.random()*9000+1000));
        var background = p.color(0, 0, 0, 0);
        var paint = p.color((0x00, 0x00, 0xcc));

        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        response.writeHead(200, {
            'Content-Type': 'image/png'
        });
        response.end(imgbase64);
    } else response.end('');
}).listen(8181);

console.log('Web server started.\n http:\\\\127.0.0.1:8181\\captcha.png');