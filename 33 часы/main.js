"use strict"

function buildWatch() {

    const elemWatch=document.getElementById('Watch');
    const form=document.forms.FPos;
    form.style.cssText="display: none";
    const razmWatch=parseFloat(form.elements.razmer.value);

    function bg() {
        elemWatch.style.cssText="background-color: darkorange; position: relative; border-radius: 50%;";
        elemWatch.style.width=razmWatch + "px"; 
        elemWatch.style.height=razmWatch + "px";
        
    }
    bg()


    //цифры
    const margin=8;
    
    const radius=120;

    const centerX=150;
    console.log(centerX);

    const centerY=150;
    console.log(centerY);

    for (let n=1; n<=12; n++) {
        const angle=360/12*n/180*Math.PI;
        const numX=centerX+radius*Math.sin(angle);
        const numY=centerY-radius*Math.cos(angle);
        const numElem=document.createElement('div');
        numElem.innerHTML=n;
        numElem.style.cssText="background-color: white; position: absolute; border-radius: 50%; text-align: center;";
        //numElem.style.width=numWH+"px";
        //numElem.style.height=numWH+"px";
        numElem.style.left=numX+"px";
        numElem.style.top=numY+"px";
        elemWatch.appendChild(numElem);
    }
//стрелки
    //for (let n=1; n<=3; n++) {

        //const lineElem=document.createElement('div');
        //lineElem.style.cssText="background-color: black; position: absolute; border-radius: 50%; transform-origin: bottom center 3px;";
        //lineElem.style.width=n+"px";
        //lineElem.style.height=radius/n+"px";//уменьшаем стрелку
        //lineElem.style.left=centerX+"px";
        //ineElem.style.top=numWH+"px";
        //elemWatch.appendChild(lineElem);
    //}

    function pos () {
        const time=new Date();
        const hours=time.getHours()%12;
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const ms=time.getMilliseconds();

        const hoursAngle=360/12*(hours+minutes/60);
        const minutesAngle=360/60*minutes;
        const secondsAngle=360/60*seconds;
//часовая стрелка
        document.getElementById("hoursArr").style.height=50+"px";
        document.getElementById("hoursArr").style.left=centerX+"px";
        document.getElementById("hoursArr").style.top=centerY+"px";//пока так
        document.getElementById("hoursArr").style.
          transform=`rotate(${hoursAngle}deg)`;
//минутная стрелка
        document.getElementById("minutesArr").style.height=70+"px";
        document.getElementById("minutesArr").style.left=centerX+"px";
        document.getElementById("minutesArr").style.top=centerY+"px";//пока так
        document.getElementById("minutesArr").style.
          transform=`rotate(${minutesAngle}deg)`;
          //секундная стрелка
        document.getElementById("secondsArr").style.height=100+"px";
        document.getElementById("secondsArr").style.left=centerX+"px";
        document.getElementById("secondsArr").style.top=centerY+"px";//пока так
        document.getElementById("secondsArr").style.
          transform=`rotate(${secondsAngle}deg)`;


        //setTimeout(pos, 1010-ms);


    }
    pos();

} 

