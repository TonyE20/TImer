// Countdown
 function countdown(num){
    let counting = setInterval(function(){
        num-- // countdown of the number
            if ( num === 0){
                console.log('Done'); 
                 clearInterval(counting); // stop count once reach zero.
             }
             else { console.log (num)} // countdown number log in every 1sec
    }, 1000) 
    }
    
// randomGame
    function randomGame(){
    let count = 1
    let random = setInterval(function(){
       let number = Math.random() // selecting a random #
       if (number < .75 ){
            count++ // adding 1 to count if connditions met
        }
        else{
            console.log(`number of tries = ${count}, number = ${number}`);
            clearInterval(random); // pring the number of tries and the number
                                    // greater than .75
        }
        }, 1000) // function repeated every second.
    }
    