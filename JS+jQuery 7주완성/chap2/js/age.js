// 함수calc() 선언과 구현
function calc() {
  var currentYear = 2023; // 올해 년도를 변수에 저장
  // 사용자로부 입력 받은 값을 변수에 저장
  var birthYear = prompt("태어난 년도를 입력하세요", "YYYY");
  // 변수 age를 0으로 초기화
  var age = 0;
  // 실제 나이를 구하기 위한 코드
  age = currentYear - birthYear + 1;
  // document는 현재 웹브라우저의 페이지를 의미하고, queryselector()는 id가 result인 웹 요소 (div)를 의미한다. 
  // innerHTML은 대입한 값으로 html을 대체하세요
  document.querySelector("#result").innerHTML = "당신의 나이는" + age + "세입니다.";
}