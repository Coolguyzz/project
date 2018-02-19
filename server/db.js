var mysql=require('mysql');

var conn=mysql.createConnection({
    host:"",
    user:"",
    password:"",
    database:""
});

conn.connect(function(err){
    if(err)
        throw err;
    console.log('Connected Successfully!');
});

var returned;

function insert(){
    let dbRequest="INSERT INTO user () VALUES ?";
    let user=[];
    conn.query(dbRequest,user,function(err,result){
        if(err)
            throw err;
        console.log('User Inserted Successfully!');    
    });    
}

function deleted(){
    let dbRequest="DELETE FROM user WHERE username = ?";
    let user=[];
    conn.query(dbRequest,user,function(err,result){
        if(err)
            throw err;
        console.log('User Deleted Successfully!');    
    });    
}

function search(){
    let dbRequest="SELECT FROM user WHERE username=?";
    let user=[];
    conn.query(dbRequest,user,function(err,result){
        if(err)
            throw err;
        returned=JSON.stringify(result);    
    });
    return returned;
}

module.exports=insert,deleted,search;