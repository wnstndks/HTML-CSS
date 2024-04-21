// 버튼0을 누르면, 버튼을 누른듯한 효과를 주기위해 orange라는 클래스명 부착
// 기존에 있던 orange는 제거해주어야 함 - 이거는 누가 눌렀는지 모르기에 모든 버튼에 붙은 orange 클래스명 제거하기
// div0에 show 클래스명 부착 - 이것도 마찬가지로 누가 눌렀는지 모르기에 모든 show라는 클래스명 다 제거

// // 첫번째 클릭
// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange')
//     $('.tab-button').eq(0).addClass('orange')
//     $('.tab-content').removeClass('show')
//     $('.tab-content').eq(0).addClass('show')
// });

// // 두번째 클릭
// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange')
//     $('.tab-button').eq(1).addClass('orange')
//     $('.tab-content').removeClass('show')
//     $('.tab-content').eq(1).addClass('show')

// });

// // 세번째 클릭
// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange')
//     $('.tab-button').eq(2).addClass('orange')
//     $('.tab-content').removeClass('show')
//     $('.tab-content').eq(2).addClass('show')
// });

// 좋은 습관 자주 쓰는 셀렉터 변수에 넣어쓰기

// 반복이 된다? -> for 반복문 사용하기 - 복붙하는 문
// for 반복문 예시
// 반복문 안의 변수를 만들때 let으로 만들어야 잘 돌아감
//  왜 var은 안되지? -> 변수의 범위 차이 때문

// for (let i = 0; i < 3; i++) {
//   $(".tab-button").eq(i).on("click", function () {
//     // 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘 
//         탭열기(i)  
//     });
// }


// 이벤트리스너 1개만 써서 탭기능 만들기 -> 램 용량을 줄일수 있음

$('.list').click(function(e){
    // 지금누른게 버튼0이면 탭열기(0)
    // 지금누른게 버튼1이면 탭열기(1)
    // 지금누른게 버튼2이면 탭열기(2)


    // 이벤트버블링을 알고잇으면 이벤트리스너 많이 필요없음
    // if(e.target==document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0)
    // }
    // if(e.target==document.querySelectorAll('.tab-button')[1]){
    //     탭열기(1)
    // }
    // if(e.target==document.querySelectorAll('.tab-button')[2]){
    //     탭열기(2)
    // }
    
    // 위의 if문이 매우 유사 -> 경우에 따라서 탭열기만 잘 실행되면 됨

    // ==> 탭열기(지금누른버튼에 숨겨져있는 data-id)
    탭열기(e.target.dataset.id)
    // 안에는 숫자로 변환해서 쓰면 더 정확할듯

})





function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}

// 탭열기(0) 실행시 0번 탭 열릴듯

