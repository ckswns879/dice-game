//주사위
//function showDice() {}
const showDice = () => {
    console.log("주사위");
}
//DOM제어
document.getElementById("msg").style.display = "none";
document.getElementById("inNum").style.display = "block";
document.getElementById("bt1").style.display = "none";
document.getElementById("bt2").style.display = "block";
//랜덤수
let random

//사용자가 선택한수
let userNum

//화면보기 함수
const dispDom = (msgP, inNumP, bt1P, bt2P) => {
document.getElementById("msg").style.display = msgP;
document.getElementById("inNum").style.display = inNumP;
document.getElementById("bt1").style.display = bt1P;
document.getElementById("bt2").style.display = bt2P;
}


//랜덤수생성
let i = Math.floor(Math.random()*6) + 1;
console.log(`주사위 랜덤수 => ${i}`)



//확인
const showOk = () => {
    userNum = form1.num.value;
}
//DOM제어
document.getElementById("msg").style.display = "block";
document.getElementById("inNum").style.display = "none";
document.getElementById("bt1").style.display = "block";
document.getElementById("bt2").style.display = "none";
// 주사위 그림
let tag = `<img src="./image/${random}.png">`;
document.getElementById("msg").innerHTML
// ox 그림
if(random == userNum){
    tag = `${tag}<img src="./image/o.png">`;
}
else{
    tag = `${tag}<img src="./image/x.png">`;
}
document.getElementById("bt2").innerHTML

//DOM 생성이 되고 난 후에 요소를CRUD해야함
document.addEventListener("DOMContentLoaded", () => {
    //주사위버튼만보이게
    document.getElementById("msg").style.display = "none";
    document.getElementById("inNum").style.display = "nene";
    document.getElementById("bt1").style.display = "none";
    document.getElementById("bt2").style.display = "none";

});