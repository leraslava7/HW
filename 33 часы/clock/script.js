
function buildClock() {
    const elemClock=document.getElementById('clock');
    const elemDig=document.getElementById('digital');
    const form=document.forms.FPos;
    const sizeClock=parseFloat(form.elements.razmer.value);//размер часов
    if ( sizeClock<200 ) {
        alert("Введите значение больше 200");
        return;
    }
    else {
        if ( sizeClock>800 ) {
            alert("Введите значение меньше 800");
            return;
        };
    }
    
    //elemClock.style.cssText="display: block";
    form.style.cssText="display: none";



    function sizeCl() {
        elemClock.style.cssText="background-color: orange; position: absolute; transform: translate(-50%,-50%); top: 50%; left: 50%; border-radius: 50%;";
        elemClock.style.width=sizeClock + "px"; 
        elemClock.style.height=sizeClock + "px";
        
    }
    sizeCl()
   
    
    const numWH=sizeClock/15 ; //размер цифр
    console.log("numWH=" + numWH);
    const radius=sizeClock/2-numWH*2;
    //const border=15; //размер окантовки
    

    const centerX=elemClock.offsetWidth/2;

    const centerY=elemClock.offsetHeight/2;


    for (let n=1; n<=12; n++) {
        const angle=360/12*n/180*Math.PI;
        const numX=centerX+radius*Math.sin(angle);
        const numY=centerY-radius*Math.cos(angle);
        const numElem=document.createElement('div');
        numElem.innerHTML=n;
        numElem.style.cssText="background-color: green; position: absolute; border-radius: 50%; text-align: center; vertical-align: middle;";
        numElem.style.width=numWH*1.5+"px";
        numElem.style.height=numWH*1.5+"px";
        numElem.style.fontSize=numWH+"px";
        numElem.style.left=(numX-numWH/2)+"px";
        numElem.style.top=(numY-numWH/2)+"px";
        numElem.style.zIndex=999;
        elemClock.appendChild(numElem);
    }



let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");

function pos() {
    let date_now = new Date();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();
    let ms = date_now.getMilliseconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;

    hour.style.cssText="position: absolute; background-color: #ffffff; margin: auto; left: 0; right: 0; border-radius: 5px; transform-origin: bottom;";
    hour.style.transform = `rotate(${calc_hr}deg)`;
    hour.style.width = radius/10+ "px";
    hour.style.top = centerY*2/3 + "px";
    hour.style.height = centerY/3 + "px";
    
    minute.style.cssText="position: absolute; background-color: #ffffff; margin: auto; left: 0; right: 0; border-radius: 5px; transform-origin: bottom;";
    minute.style.transform = `rotate(${calc_min}deg)`;
    minute.style.width = radius/20+ "px";
    minute.style.top = centerY/2 + "px";
    minute.style.height = centerY/2 + "px";

    seconds.style.cssText="position: absolute; background-color: #2987e4; margin: auto; left: 0; right: 0; border-radius: 5px; transform-origin: bottom;";
    seconds.style.transform = `rotate(${calc_sec}deg)`;
    seconds.style.width = radius/30+ "px";
    seconds.style.top = centerY/3 + "px";
    seconds.style.height = centerY*2/3 + "px";


    
        hr = updateTime(hr);
        min = updateTime(min);
        sec = updateTime(sec);
      
        elemDig.innerText = hr + " : " + min + " : " + sec;
        elemDig.style.cssText="background-color: white; position: absolute; padding: 5px;";
        elemDig.style.fontSize=numWH+"px";
        elemDig.style.left=centerX-elemDig.offsetWidth/2+"px";
        elemDig.style.top=centerY/2+"px";


      function updateTime(k) {
        if (k < 10) {
          return "0" + k;
        }
        else {
          return k;
        }
      }

    setTimeout(pos, 1010-ms);
    console.log(new Date());
};

pos();

}

    