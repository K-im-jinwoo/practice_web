// 버튼을 클릭하면 전체 메뉴를 보이게 하기
$(".tit .btn").click(function(e){
  e.preventDefault();
  // $("#cont_nav").css("display","block");
  // $("#cont_nav").show();
  // $("#cont_nav").fadeIn();
  // $("#cont_nav").slideDown();
  // $("#cont_nav").toggle();
  // $("#cont_nav").fadeToggle();
  $("#cont_nav").slideToggle();
  $(this).toggleClass("on");
});
