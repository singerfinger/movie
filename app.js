var express = require('express');
var port = process.env.PORT||3000;
var app  =express();
app.set('view engine','jade');//设置默认模板引擎
app.set('views','./views');

app.listen(port);

console.log('imooc started on port '+ port);

// index page
app.get('/',function(req,res){
    res. render('index',{
        title:'imooc 首页'
    })
})

// detail page
app.get('/movie/:id',function(req,res){
    res. render('detail',{
        title:'imooc detail'
    })
})


// list page
app.get('/admin/list',function(req,res){
    res. render('list',{
        title:'imooc list'
    })
})


// admin page
app.get('/admin/movie',function(req,res){
    res. render('admin',{
        title:'imooc admin'
    })
})