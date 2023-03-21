$(function(){
  //변수선언
  let img_w = $('#m_slide img').width();
$('#m_slide img:last-child').insertBefore('.slide img:first-child');
$('#m_slide').css('margin-left',-img_w);

function moveLeft(){
  $('#m_slide').animate({'margin-left':-img_w*2},1500, function(){
    $('#m_slide img:first-child').insertAfter('#m_slide img:last-child');
    $('#m_slide').css('margin-left',-img_w);
    // console.log('moveLeft');
  });
}
Timer = setInterval(moveLeft,3000);

// gnb 슬라이드
$('#gnb ul li').hover(function(){
  $(this).find('ul').stop().slideToggle(500);
})

// aside
let a = $('aside ul li a');
let option = $('aside ul li ul');
let a1 =$('#shop .con a:first-child, #shop .con a:nth-child(2)');
let a2 =$('#shop .con a:nth-child(3), #shop .con a:nth-child(4)');
let a3 =$('#shop .con a:nth-child(5), #shop .con a:last-child');

// console.log(a1);
a.click(function(){
  $(this).next().slideToggle().parent().siblings().find(option).slideUp();
  console.log(this);
  $(this).find('i.fa-solid').toggleClass('act01').parent().parent().siblings().find('i.fa-solid').removeClass('act01');
})

// 스크롤이벤트
$(window).scroll(function(){
  let spos1 = $(this).scrollTop();
  // console.log(spos1);
  let img1_top = document.getElementById('eve').offsetTop;

  if(spos1>=1100){
    $('#We img').animate({'margin-left':'0'},1000);
  }

  if(spos1>=img1_top-800){
    // console.log('도착');
    $('.ef01').animate({opacity:'1', bottom:'0'},1500);
    $('.ef02').animate({opacity:'1', top:'0'},1000)
  }
  if(spos1>=2400){
    $(a1).animate({opacity:'1'},500);
  };
  if(spos1>=3200){
    $(a2).animate({opacity:'1'},500);
  };
  if(spos1>=4000){
    $(a3).animate({opacity:'1'},500);
  };
  });
  // 탑버튼
  $('#top').click(function(){
    $('html, body').animate({scrollTop:0},500);
    return false;
  });
  $(window).scroll(function(){
  let spos = $(this).scrollTop();
  // console.log(spos);
  if(spos>1500){
  $("#top").fadeIn();
  }else{
    $("#top").fadeOut();
  }
});
});