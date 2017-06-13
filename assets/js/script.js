$(document).ready(function(){
    
    $(".button-collapse").sideNav({
      menuWidth: 300, 
      edge: 'right',
      closeOnClick: true, 
      draggable: true
    });
     
    $(".card").addClass("hoverable");

$(window).resize(function () {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 790) {
            $(".fixed-action-btn").addClass("horizontal click-to-toggle");
    }
    if(viewportWidth<760){
      $(".sec-3").css("padding","2px");
      $(".sec-3 .card").css("margin","10px 2px")
    }
});

$(".sec-1 .container .header").css("letter-spacing","-3px");
  
setTimeout(setInterval(displayText,150),2000);



   
});


var str=[" Divay Garg "," a Front End Web Developer"," a web enthusiast !"];
var pos=0,a=0;
var html="";
  function displayText(){
    if(pos>2)pos=0;    
        
        if(a<str[pos].length)
        {
          html+=str[pos].charAt(a);
          $(".text-change").html(html);
          a++;
        }
    else {
      a=0;
      pos++;
      html="";
    }
   }