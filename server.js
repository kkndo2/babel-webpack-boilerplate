const express = require('express');
const app = express();

// 정적파일
app.use(express.static('public'));

// 라우팅
const main = require('./router/home');
app.use('/', main);

// ejs 설정
app.set('views', './views');
app.set('view engine', 'ejs');

// 서비스 시작
const server = app.listen(80, function(){
    console.log("웹서비스 시작 !");
});
