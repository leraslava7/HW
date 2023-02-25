
function buildClock() {
    const elemClock=document.getElementById('clock');
    const form=document.forms.FPos;
    const sizeClock=parseFloat(form.elements.razmer.value);//размер часов
    
    elemClock.style.cssText="display: block";
    form.style.cssText="display: none";



    function sizeCl() {
        elemClock.style.width=sizeClock + "px"; 
        elemClock.style.height=sizeClock + "px";
    }
    sizeCl()
    
    
    const numWH=20;
    const radius=sizeClock/2-numWH*2;
    

    const centerX=elemClock.offsetWidth/2-numWH;

    const centerY=elemClock.offsetHeight/2-numWH;


    //const centerClock = elemClock.offsetTop/2;

    for (let n=1; n<=12; n++) {
        const angle=360/12*n/180*Math.PI;
        const numX=centerX+radius*Math.sin(angle);
        //console.log(numX);
        const numY=centerY-radius*Math.cos(angle);
        //console.log(numY);
        const numElem=document.createElement('div');
        numElem.innerHTML=n;
        numElem.style.cssText="background-color: white; position: absolute; border-radius: 50%; text-align: center;";
        numElem.style.width=numWH+"px";
        numElem.style.height=numWH+"px";
        numElem.style.left=numX+"px";
        numElem.style.top=numY+"px";
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

    hour.style.transform = `rotate(${calc_hr}deg)`;
    hour.style.top = centerY*2/3 + "px";
    hour.style.height = centerY/3 + "px";
    
    minute.style.transform = `rotate(${calc_min}deg)`;
    minute.style.top = centerY/2 + "px";
    minute.style.height = centerY/2 + "px";

    seconds.style.transform = `rotate(${calc_sec}deg)`;
    seconds.style.top = centerY/3 + "px";
    seconds.style.height = centerY*2/3 + "px";

    setTimeout(pos, 1010-ms);
    console.log(new Date());
};

pos();

}

    