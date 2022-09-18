let counter = 0;
 function Increment(){
    counter = counter+1;
    // counter++;
    // counter+=1;
    document.getElementById("counter").innerHTML = counter;
 }

 function Decrement(){
    counter =  counter-1;
    document.getElementById("counter").innerHTML = counter;
 }

 function Reset(){
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
 }