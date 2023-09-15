"use strict";
        var input=document.getElementById("number");
        var output=document.getElementById("display");
        var button=document.getElementById("button");
        var minute=document.getElementById("minutes");
        var second=document.getElementById("seconds");
        button.addEventListener("click",()=>{
            if(input.value==""){
                output.innerHTML="please enter value";
                output.classList.add("abc");
                setInterval(function(){
                    location.reload();
                },2000)
            }
            else{
            var timer=input.value;
            var time=timer*60;
        function start(){
            var minutes=Math.floor(time/60);
            var seconds=time%60;
            time--;
            if(minutes<="9"){
                minutes="0"+minutes;
            }
            if(seconds<="9"){
                seconds="0"+seconds;
            }
            minute.innerHTML=minutes;
            second.innerHTML=seconds;
            if(minutes=="00"&&seconds=="00"){
                output.innerHTML="time is expired";
                output.classList.add("abc");
                clearInterval(start);
            }
        }
        setInterval(start,1000);
    }
    })