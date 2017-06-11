$(document).ready(function(){
    
    $(".button-collapse").sideNav({
      menuWidth: 300, 
      edge: 'right'
    });
     
    $(".card").addClass("hoverable");

  
  
setTimeout(setInterval(displayText,150),2000);



   
});


var str=[" Divay Garg . "," a Front End Web Developer ."," a web enthusiast !"];
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