var mysql = require('mysql');

var express = require('express');

var app = express();      

var con  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'maylo'

});

con.connect();

app.get('/', function(req, res){
    var insert_query = 
    "INSERT INTO mywork(name, email, password) VALUES ('kishan','kishan@gmail.com','kishan123')";
    con.query(insert_query, function (error,results,field){
        if (error) throw error;
        res.redirect('/select');
    } );
})
    
app.get('/select', function(req, res){
    var select_query = "SELECT * FROM mywork";
    con.query(select_query, function (error,results,field){
        if (error) throw error;
        res.send(results);
    } );
})

app.get('/delete/:id', function(req, res){

    var id = req.params.id;

    var delete_query = "delete FROM mywork where id=" +id;

    con.query(delete_query, function (error,results,field){
        if (error) throw error;
        res.redirect('/select');
    } );  
})

app.listen(3000);

    
con.query(update_query, function (error,results,field){
    if (error) throw error;
    console.log(results);
} ) 