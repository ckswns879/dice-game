/* 기존함수선언방식
function funPrint(){
    console.log(n);
console.log("외부 자바 스크립트");
console.log("버튼"+1);
}
*/


//ES6+ : 화살표 함수 사용
const funPrint = (n) => {
 //   console.log(n);
 //   console.log("외부 자바 스크립트");
 console.log(`버튼${n}`);
}

//변수
/*
//console.log(x);
let x =100;
x = 100 *2;
console.log(x);
*/
/* jQuery
$document.ready(){

}
*/


// document.addEventListener("DOMcontentLoaded",콜백함수);
// document.addEventListener("DOMcontentLoaded", function() {});

// Dom이 생성이 되고 난 후에 요소를 수정해야함
document.addEventListener("DOMContentLoaded", ()=>{
    //console.log(document.getElementById("root").innerHTML);
    //let bt = document.createElement("button")
    //document.getElementById("bt").append(bt);             //버튼추가

/*
    //요소찾기
    //결과 HTML Collection
    const bts1 = document.getElementsByClassName("bt1")
    console.log(bts1)
    //결과 HTML Collection
    const bts2 = document.getElementsByTagName("button")
    console.log(bts2)
    //결과 Node
    const bts3 = document.querySelector(".bt1");
    console.log(bts3)
*/
    //결과 NodeList
    const bts4 = document.querySelectorAll(".bt1");
// console.log(bts4.length);

    // console.log(bts4[0].innerHTML);
    // console.log(bst4[0].innerText);
    // console.log(bts4[1].textContent);

//  자바스크립트 선언은 let(변수선언) const(상수선언) 뿐이다 
// 반복문 for    
//   for(let i = 0; i < bts4.length; i++) {
//         console.log(typeof[i]);
//         bts4[i].innerHTML = `mybutton${i+1}`;
//         console.log(bts4[i].innerHTML);
//    }
// 반복문 for in => 키만가지고옴
// for(let i in bts4){
//     console.log(i)
// }
//반복문 forEach(함수) :메소드 형식이라 중간에 종료할수없음
//     bts4.forEach((item)=>{
//         console.log(item.innerHTML);
//     });
//     bts4.forEach((item, idx)=>{
//         console.log(`${idx} : ${item.innerHTML}`);

// });
//반복문 for of
    for(let item of bts4){
    console.log(item.innerHTML);
    }
    for(let [idx, item] of bts4.entries()) {
    console.log(`${idx} : ${item.innerHTML}`);
    break;
    }
});

// console.log("Dom test")
// console.log(document.getElementById("bt"))
