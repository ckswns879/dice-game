//function 키워드로 함수만들기
// function show(){
//     console.log("안녕하세요")
// }

//es6+ 부터 함수는 화살표 함수로만들기
const show = () => {
//폼 숨기기
const formSection = document.querySelector(`#formSection`)
    formSection.style.display = "none";
    //1. 태그만들기
    let tag = "";
    //for(let i = 1; i <= 6; i++){
    //tag = tag + '<div class="divMsg">' + i + '</div>';
    //템플릿문자열
    // tag = tag + `<div class="divMsg"><img src="./image/${i}.png"></div>`
    // }
    //}
    let i = Math.floor(Math.random()*6) + 1;
    tag = tag + `<div class="divMsg"><img src="./image/${i}.png" id="msgimg"></div>`
    // let tag2 = "";
    // const a = document.createElement(`input type="radio`)
    // for (let j = 1; j<7;j++)
    // tag2 = tag2 + `<input type="radio" id="d${j}" name="game" value="${j}"checkde>${j}`
    
    console.log(tag);
    //2 DOM에서 태그를 넣을요소 선택
    const msgDiv =document.querySelector(`#msg`)
    
    //3 선택된 요소의 HTML 변경
    msgDiv.innerHTML = tag
    //3-1 동적으로 생성된 html 스타일변경
    let msgimg = document.querySelector(`#msgimg`)
    msgDiv.style.backgroundColor = "red";
    msgDiv.style.maxwidth = "100px";
    msgDiv.style.maxheight = "100px";
 //   console.log(msgDiv.getComputedStyle());

    console
}

//돔생성
//document.addEventListener("DOMContentLoaded")