var mysql=require('mysql');

var conn=mysql.createConnection({
    host:"localhost",
    user:"",
    password:"",
    database:"user"
});

conn.connect(function(err){
    if(err)
        throw err;
    console.log('Connected Successfully!');
});

var returned;

function insert(username,player,point,rank,password){
    let dbRequest="INSERT INTO user () VALUES ?";
    let user=[];
    conn.query(dbRequest,user,function(err,result){
        if(err)
            throw err;
        console.log('User Inserted Successfully!');    
    });    
}

function deleted(username){
    let dbRequest="DELETE FROM user WHERE username = ?";
    conn.query(dbRequest,[username],function(err,result){
        if(err)
            throw err;
        console.log('User Deleted Successfully!');    
    });    
}

function search(username){
    let dbRequest="SELECT FROM user WHERE username = ?";
    conn.query(dbRequest,[username],function(err,result){
        if(err)
            throw err;
        returned=JSON.stringify(result);    
    });
    return returned;
}

module.exports=insert,deleted,search;