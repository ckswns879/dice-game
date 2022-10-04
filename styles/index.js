// 랜덤수
let randNum;
// 사용자가 선택한 수
let userNum;

//화면 보기 함수
//매개변수
const dispDom = (msgP, inNumP, bt1P, bt2P) => {
  // DOM 제어
  document.getElementById("msg").style.display = msgP;
  document.getElementById("inNum").style.display = inNumP;
  document.getElementById("bt1").style.display = bt1P;
  document.getElementById("bt2").style.display = bt2P;
}

// 주사위
//function showDice() {}
const showDice = () => {
  // 랜덤수 생성
  randNum = Math.floor(Math.random() * 6) + 1;
  console.log(`주사위 랜덤수 => ${randNum}`);

  // DOM 제어
  // 값
  dispDom("none", "block", "none", "block");

}

// 확인
const showOk = () => {
  userNum = form1.num.value;

  //DOM 제어 
  dispDom("block", "none", "block", "none");

  // 주사위 그림
  let tag = `<img src="./image/${randNum}.png">`;

  // ox 그림
  let ox;
  if (randNum == userNum) ox = "o";
  else ox = "x";

  tag = `${tag}<img src="./image/${ox}.png">`;

  // 이미지 표시
  document.getElementById("msg").innerHTML = tag;
  console.log(`사용자가 선택한 수 => ${userNum}`);
}




// DOM이 생성이 되고 난 후에 요소를 CRUD 해야한다.
document.addEventListener("DOMContentLoaded", () => {
  // 주사위 버튼만 보여야 함.
  dispDom("none", "none", "block", "none");
});