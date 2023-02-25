
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
        elemClock.style.cssText="background: #16191e; position: absolute; transform: translate(-50%,-50%); top: 50%; left: 50%; border-radius: 50%; border: 15px solid #242931; box-shadow: 15px 15px 35px rgba(0,0,0,0.2), inset 0 0 30px rgba(0,0,0,0.4);";
        elemClock.style.width=sizeClock + "px"; 
        elemClock.style.height=sizeClock + "px";
        
    }
    sizeCl()
   
    
    const numWH=20; //размер цифр
    const radius=sizeClock/2-numWH*2;
    const border=15; //размер окантовки
    

    const centerX=elemClock.offsetWidth/2-numWH-border/2;

    const centerY=elemClock.offsetHeight/2-numWH+border/2;


    for (let n=1; n<=12; n++) {
        const angle=360/12*n/180*Math.PI;
        const numX=centerX+radius*Math.sin(angle);
        const numY=centerY-radius*Math.cos(angle);
        const numElem=document.createElement('div');
        numElem.innerHTML=n;
        numElem.style.cssText="background-color: white; position: absolute; border-radius: 50%; text-align: center;";
        numElem.style.width=numWH+"px";
        numElem.style.height=numWH+"px";
        numElem.style.left=(numX)+"px";
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

    hour.style.cssText="width: 10px; position: absolute; background-color: #ffffff; margin: auto; left: 0; right: 0; border-radius: 5px; transform-origin: bottom;";
    hour.style.transform = `rotate(${calc_hr}deg)`;
    hour.style.top = centerY*2/3 + "px";
    hour.style.height = centerY/3 + "px";
    
    minute.style.cssText="width: 5px; position: absolute; background-color: #ffffff; margin: auto; left: 0; right: 0; border-radius: 5px; transform-origin: bottom;";
    minute.style.transform = `rotate(${calc_min}deg)`;
    minute.style.top = centerY/2 + "px";
    minute.style.height = centerY/2 + "px";

    seconds.style.cssText="width: 3px; position: absolute; background-color: #2987e4; margin: auto; left: 0; right: 0; border-radius: 5px; transform-origin: bottom;";
    seconds.style.transform = `rotate(${calc_sec}deg)`;
    seconds.style.top = centerY/3 + "px";
    seconds.style.height = centerY*2/3 + "px";


    
        hr = updateTime(hr);
        min = updateTime(min);
        sec = updateTime(sec);
      
        elemDig.innerText = hr + " : " + min + " : " + sec;
        elemDig.style.cssText="background-color: white; position: absolute; padding: 5px;";
        elemDig.style.left=centerX-elemDig.offsetWidth/2+border+"px";
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

    