var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"user"
});

conn.connect(function(err){
    if(err)
        throw err;
    console.log('Connected Successfully!');
});    
    


function insert(username,player,point,rank,password){
    var dbRequest="INSERT INTO users VALUES (?,?,?,?)";
    var newUser=[username,player,point,rank]
    conn.query(dbRequest,newUser,function(err,result){
        if(err)
            throw err;
        console.log('User Inserted Successfully!');    
    });    
}

function deleted(username){
    var dbRequest="DELETE FROM users WHERE username = ?";
    conn.query(dbRequest,[username],function(err,result){
        if(err)
            throw err;
        console.log('User Deleted Successfully!');    
    });    
}

var returnedJson;

function search(username,callback){
    var dbRequest="SELECT * FROM users WHERE username = ?";
    conn.query(dbRequest,[username],function(err,result){
        if(err)
            throw err;
        returnedJson=JSON.stringify(result[0]); 
        return callback(returnedJson);  
    });
}

module.exports = {
    insert:insert,
    delete:deleted,
    search:search
};