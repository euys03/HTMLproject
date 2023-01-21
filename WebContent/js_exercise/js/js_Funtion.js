
/* <script>태그를 가장 위에 배치할 경우 html노드보다 script노드가 먼저 실행되어
     html의 해당 요소(ex. #p1)를 찾지 못해 실행되지 않는 상황이 발생할 수 있다. */
// * fuction의 경우 script scr 를 상단에 배치해도 상관x *
//document.querySelector("#p1").innerHTML = 2222222222;


// 1. 선언적 함수 (함수명 사용)
function jsFunc1() {
    var pTag = document.querySelector("#p1");
    pTag.innerHTML = "jsFunc1() 선언적함수 실행완료";
}


// 2. 익명함수 (함수명을 사용하지 않는 함수, 변수에 함수를 넣어 사용, 변수가 함수명이 됨)
var jsFunc2 = function () {     
    document.querySelector("#p2").innerHTML 
    = "jsFunc2() 익명함수 실행완료";
}


// 3. 즉시 실행 함수, IIFE / "(function() {소스코드})" 자체가 함수.
// => 즉시 실행 함수는 <script>태그 내에 작성하므로 해당 코드는 js_exercise/5.JS_Function.html 에 작성
// (function() {
//     document.querySelector("#p3").innerHTML
//     = "혼자서 실행되는 함수";
// }) ();


// 4. 함수의 전달인자와 매개변수
function resultJsFunc4() {
    jsFunc4(23,5,10);   // jsFunc4로 전달할 전달값, 인자값
}
// - 넣는 값에 따라 자료형이 결정되므로 자바와 달리
//  매개변수(value, value2, value3) 앞에 자료형을 적어줄 필요가 없다.
function jsFunc4(value, value2, value3) {
    document.querySelector("#p4").innerHTML
    = "결과 값 : " + (value + value2 + value3) + "<br>";
}


// 5. 함수의 리턴 처리 (return 사용)
function resultJsFunc5() {
    var result = jsFunc5(); 
    //console.log(result);
    // 실행창(id가 #p5 인 곳)에 return받은 랜덤값 출력
    document.querySelector("#p5").innerHTML = result;
}
function jsFunc5() {
    // 리턴 결과로 1~100 사이의 수가 랜덤으로 출력된다.
    return Math.floor(Math.random()*100 + 1);
}
// 예) 리턴함수를 활용한 간단한 계산기
function calculatePlus(num1, num2, operator) {
    var result = 0;
    switch(operator) {
        case '+' : result = num1 + num2; break;
        case '-' : result = num1 - num2; break;
        //...
    }
    return result;
}


// 6. 매개변수로 함수 전달 (매개변수(otherFunc)를 함수로 전달받아서 순서대로 실행하는 함수, 콜백함수라고도 함)
function callFuncTenTimes(otherFunc) {
    for(var i = 0; i < 10; i++) {
        // 매개변수(otherFunc)가 함수 이름(otherFunc)으로 넘어오는 것이며, 넘어온 함수를 사용하여 실행
        // 'i'값을 넘겨서 동작하며 함수명(otherFunc)을 사용하여 실행 (callback함수).
        otherFunc(i);   // calleeFunc(0);
                        // calleeFunc(1);
                        // calleeFunc(2);
                        // ...
                        // calleeFunc(9);
        //console.log(i);  //calleeFunc함수의 'console.log(num);'의 실행결과와 동일한 의미의 코드.
    }
}
// 예) 'calleeFunc' 함수가 'callFuncTenTimes'함수로 전달
//  (callFuncTenTimes로 전달되어 다시 calleeFunc 함수로 불려 쓰이는 calleeFunc를 "콜백함수"라고도 함)
function calleeFunc(num) {
    //console.log(num);
    var pTag = document.querySelector('#p6');
    pTag.innerHTML += (num+1) + "번째 함수 호출 완료 <br>";
}
callFuncTenTimes(calleeFunc);


// 7. 익명함수를 리턴하는 함수 (즉시 실행 함수로도 사용할 수 있다.)
function jsReturnFunc() {
    var nameTag = document.querySelector("#name");
    var pTag = document.querySelector("#p7");
    //pTag.innerHTML = nameTag.value;   // => 익명함수 안으로 코드이동.
    // >> return의 익명함수를 사용하여 호출
    return function() {
        pTag.innerHTML = nameTag.value;
    }();
}

