
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
// 왜 var은 안되지? -> 변수의 범위 차이 때문
for(let i=0; i<3; i++){
    $('.tab-button').eq(i).on('click', function(){
        $('.tab-button').removeClass('orange')
        $('.tab-button').eq(i).addClass('orange')
        $('.tab-content').removeClass('show')
        $('.tab-content').eq(i).addClass('show')
    });
}



