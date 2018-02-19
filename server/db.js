var mysql=require('mysql');

var conn=mysql.createConnection({
    host:"",
    user:"",
    password:"",
    database:""
});

function insert(){
    conn.connect(function(err){
        if(err)
            throw err;
        console.log('Connected Successfully!');
        var dbRequest="INSERT INTO user () VALUES ?";
        var user=[]
        conn.query(dbRequest,user,function(err,result){
            if(err)
                throw err;
            console.log('User Inserted Successfully!');    
        });    
    });
}

function deleted(){
    conn.connect(function(err){
        if(err)
            throw err;
        console.log('Connected Successfully!');
        var dbRequest="DELETE FROM user WHERE username = ?"
        var user=[]
        conn.query(dbRequest,user,function(err,result){
            if(err)
                throw err;
            console.log('User Inserted Successfully!');    
        });    
    });
}

module.exports=insert,deleted;