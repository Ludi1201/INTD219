var index = 0; 
var blink_number = 0;
var time = 1000;
var stop_flag = ''; // for timing task stop

function number_change(i){ // change number img
  var t = (i % 12) + 1;
  document.getElementById("pink_"+t).style.display="none";
  document.getElementById("red_"+t).style.display="block";
  if(t != 1){
  document.getElementById("pink_"+(t - 1)).style.display="block";
  document.getElementById("red_"+(t - 1)).style.display="none";
  }
  if(index > 0 && t == 1){
  document.getElementById("pink_12").style.display="block";
  document.getElementById("red_12").style.display="none";
  }
}

function change(){
  if(index % 2 == 0){ //index is even
  document.getElementById("open").style.display="none";
  document.getElementById("close").style.display="block";
  }else{ // index is odd
  document.getElementById("open").style.display="block";
  document.getElementById("close").style.display="none";
    number_change(blink_number);
    blink_number++;
  }
  index++;
  document.getElementById("blink_number").innerHTML = blink_number;
  
}
		
function set(time){ // set timing task
  var temp = setInterval("change()",time);
  return temp;
}

function faster(){ // blink faster by click
  time /= 2;
  clearInterval(stop_flag);
  stop_flag = set(time);
}

function slower(){ // blink slower by click
  time *= 2;
  clearInterval(stop_flag);
  stop_flag = set(time);
}

function init(){ 
  for(var i = 0; i < 12; i++){
    document.getElementsByClassName("pink")[i].style.display="block";
    document.getElementsByClassName("red")[i].style.display="none";
  }
}

init();
change();
stop_flag = set(time);