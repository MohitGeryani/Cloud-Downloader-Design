// Styling Through Javascript 

var button=document.getElementById('button');

button.addEventListener('click', function(){
   button.style.color='white';
   button.style.backgroundColor='green';
   button.style.border=' px solid green';
   button.style.borderRadius='';
   button.style.fontWeight='bold';
   button.style.boxShadow='0px 0px 0px 4px rgba(0,118,71,0.5)';
   var i=0;
   var tt=setInterval(function(){     
   i=i+1;
   var counter=1-i;
   button.innerHTML='Download'
     if(counter===0){
       clearInterval(tt);
       window.location = "/";
       window.open('https://google.com');
       return true;
     }
     
   },1200);
   
});

// Wait For 1.2 Seconds Before Redirecting
