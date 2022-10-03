$(".hotel").click(handler1);
function handler1(){
  $(".btn").prop("disabled",true);
  var sound="audio/hotel_california.aac";
  var audio= new Audio(sound);
  audio.play();
  setTimeout(function(){
    $(".btn").prop("disabled",false);
  },57000)
}

$(".godfather").click(handler2);
function handler2(){
  $(".btn").prop("disabled",true);
  var sound="audio/godfather.aac";
  var audio= new Audio(sound);
  audio.play();
  setTimeout(function(){
    $(".btn").prop("disabled",false);
  },51000)
}
$(".pink").click(handler3);
function handler3(){
  $(".btn").prop("disabled",true);
  var sound="audio/pink_panther.aac";
  var audio= new Audio(sound);
  audio.play();
  setTimeout(function(){
    $(".btn").prop("disabled",false);
  },45000)
}
$(".pirates").click(handler4);
function handler4(){
  $(".btn").prop("disabled",true);
  var sound="audio/pirates.aac";
  var audio= new Audio(sound);
  audio.play();
  setTimeout(function(){
    $(".btn").prop("disabled",false);
  },43000)
}
$(".symphony").click(handler5);
function handler5(){
  $(".btn").prop("disabled",true);
  var sound="audio/symphony.aac";
  var audio= new Audio(sound);
  audio.play();
  setTimeout(function(){
    $(".btn").prop("disabled",false);
  },18000)
}
