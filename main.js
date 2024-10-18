var color;
const blueDiv =document.getElementById('blueDiv');
const btn =document.getElementById('btn');
const redDiv =document.getElementById('redDiv');

btn.addEventListener('click',function(){
    if(color){
        blueDiv.style.backgroundColor='blue';
        redDiv.style.backgroundColor='white';
    }
    else{
        redDiv.style.backgroundColor='red';
        blueDiv.style.backgroundColor='white';
    }
    color =! color
});
