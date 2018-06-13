var express = require('express');

// 创建一个express实例
var app = express();
app.use(express.static('webapp'));

// 监听3000端口，开启服务器
app.listen(3000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:3000');
});