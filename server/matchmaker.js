//use import instead of set object

let set={
    name : ['hamed','omid','farhad','ali','ahmad','mostafa','seyed','mohammad','ehsan','hosein','amir','arya','poorya'],
    ready : [true,false,true,false,false,true,true,false,false,true,true,true,false],
};

//gathers ready players and assigns them a ticket for the queue

let matchMaker={
    name  :[],
    queue :[]
};

let ticket=0;

let startSearch =function(){
//search function for matchmaking

    let search = function(){

        for(let i=0;i<set.ready.length;i++){

            if(set.ready[i]){
                set.ready[i]=false;
                matchMaker.name.push(set.name[i]);
                matchMaker.queue.push(ticket);
                ticket++;
                //console.log(set.name[i]);
                //console.log(ticket);
            }
        }
    };

//search call

    search();

//program tester

    console.log(matchMaker.name);
    console.log(matchMaker.queue);

//use mod (%)4 operator to separate them into groups of four

//export
};

// start search
startSearch();