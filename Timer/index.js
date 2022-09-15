//Timers Exercise countdown
function countdown(num){
    let id = setInterval(function(){
        num--;
        if(num === 0){
            clearInterval(id);
            console.log("DONE!");
        }else{ 
            console.log(num);
        }
    }, 1000);
}

//Timers Exercise randomGame
function randomGame(){
    let counter = 0;
    let x;
    let id = setInterval(function(){
        counter++;
        x = Math.random();
        if(x > .75){
            clearInterval(id);
            console.log(x.toFixed(2));
            return console.log((counter === 1 ? `it took ${counter} try to get a number greater than .75` : `it took ${counter} tries to get a number greater than .75`));
        }else{
            console.log(x.toFixed(2));
        }
    },1000);
}