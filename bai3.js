const button =  document.querySelector('.btn');
console.log(button);
button.addEventListener('click',changeColor);
function changeColor(){
    const background = document.querySelector('.background');
    const arrayColor = ['red','yellow','black','gray','blue','orange','pink'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
    console.log(random);
}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}