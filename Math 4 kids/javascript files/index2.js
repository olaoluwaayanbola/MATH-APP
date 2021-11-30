const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const audio = document.getElementById("audio")
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random()*13);
    var num2 = Math.floor(Math.random()*13);
    var dummy1 = Math.floor(Math.random()*13);
    var dummy2 = Math.floor(Math.random()*13);

    var allAns = [];
    var SwitchAnswer = [];

    if (num2 > num1) {
        answer = num2 - num1
    }else{
        answer = num1 - num2
    }
    var y =  document.getElementById("value_1")
    var t =  document.getElementById("value_2")
    
    y.innerHTML = num2
    t.innerHTML = num1 

    allAns = [answer,dummy1,dummy2];

    for(i = allAns.length;i--;){
        SwitchAnswer.push(allAns.splice(Math.floor(Math.random()*(i +1)),1)[0])
    }
    option1.innerHTML = SwitchAnswer[0]
    option2.innerHTML = SwitchAnswer[1]
    option3.innerHTML = SwitchAnswer[2]
}
option1.addEventListener("click",function(){
    if (option1.innerHTML == answer) {
        generate_equation();
    }
    else {
        audio.play();
    }
})
option2.addEventListener("click",function(){
    if (option2.innerHTML == answer) {
        generate_equation()
    }
    else {
        audio.play();
    }
})
option3.addEventListener("click",function(){
    if (option3.innerHTML == answer) {
        generate_equation()
    }
    else {
        audio.play();
    }
})
window.onload = generate_equation()
