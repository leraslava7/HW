
function buildClock() {

    const elemClock=document.getElementById('clock');

    const form=document.forms.FPos;
    const sizeClock=form.elements.razmer.value;//размер часов
    var clockRadius = parseFloat(sizeClock) / 2;
   
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
    
    form.style.cssText="display: none";
    
    elemClock.setAttribute("width",sizeClock);
    elemClock.setAttribute("height",sizeClock);



    function sizeCl() {
        const circle=document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
        circle.setAttribute("fill","orange");
        circle.setAttribute("rx",sizeClock/2);
        circle.setAttribute("ry",sizeClock/2);
        circle.setAttribute("cx",sizeClock/2);
        circle.setAttribute("cy",sizeClock/2);
        elemClock.appendChild(circle);
        
    }
    sizeCl()
   
    const numWH=sizeClock/15 ; //размер цифр
    console.log("numWH=" + numWH);
    const radius=sizeClock/2-numWH*2;

    

    const centerX=sizeClock/2;

    const centerY=sizeClock/2;

    var currTimeStr = "";
	var angeHour = (360 / 12);//цена деления часа
    var angeTime = (360 / 60);//цена деления секунды и минуты



    for (let n=1; n<=12; n++) {
        const angle=360/12*n/180*Math.PI;
        const numX=centerX+radius*Math.sin(angle);
        const numY=centerY-radius*Math.cos(angle);

        let x=(numX);
        let y=(numY);

        const circle=document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
        circle.setAttribute("fill","white");
        circle.setAttribute("rx",numWH);
        circle.setAttribute("ry",numWH);
        circle.setAttribute("cx",x);
        circle.setAttribute("cy",y);
        elemClock.appendChild(circle);

        let c=(numX-numWH/2);

        const txt= document.createElementNS("http://www.w3.org/2000/svg",'text');
        txt.setAttribute("x", c);
        txt.setAttribute("y", y);
        txt.style.fill="black";
        txt.textContent=n;
        txt.style.width=numWH*1.5+"px";
        txt.style.height=numWH*1.5+"px";
        txt.style.fontSize=numWH+"px";
        elemClock.appendChild(txt);

    }

    var hourArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	hourArrow.setAttribute("x1", clockRadius);
	hourArrow.setAttribute("y1", clockRadius);
	hourArrow.setAttribute("x2", clockRadius);
	hourArrow.setAttribute("y2", clockRadius / 2);
	hourArrow.setAttribute("stroke-width", clockRadius / 25);
	hourArrow.setAttribute("stroke-linecap", 'round');
	hourArrow.setAttribute("stroke", 'black');
	elemClock.appendChild(hourArrow);

	var minuteArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	minuteArrow.setAttribute("x1", clockRadius);
	minuteArrow.setAttribute("y1", clockRadius);
	minuteArrow.setAttribute("x2", clockRadius);
	minuteArrow.setAttribute("y2", clockRadius / 3);
	minuteArrow.setAttribute("stroke-width", clockRadius / 30);
	minuteArrow.setAttribute("stroke-linecap", 'round');
	minuteArrow.setAttribute("stroke", 'black');
	elemClock.appendChild(minuteArrow);

	var secondArrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	secondArrow.setAttribute("x1", clockRadius);
	secondArrow.setAttribute("y1", clockRadius);
	secondArrow.setAttribute("x2", clockRadius);
	secondArrow.setAttribute("y2", clockRadius / 3);
	secondArrow.setAttribute("stroke-width", clockRadius / 70);
	secondArrow.setAttribute("stroke-linecap", 'round');
	secondArrow.setAttribute("stroke", 'black');
	elemClock.appendChild(secondArrow);

    var timeNum = document.createElementNS("http://www.w3.org/2000/svg", 'text');
	timeNum.setAttribute("x", radius);
	timeNum.setAttribute("y", radius * 0.8);
	timeNum.setAttribute("font-size", radius * 0.16);
	elemClock.appendChild(timeNum);

	function updateTime() {
		var currTime = new Date();
        var ms = currTime.getMilliseconds();
		var second = currTime.getSeconds();
		var minute = currTime.getMinutes();
		var hour = currTime.getHours();
		hour = hour < 12 ? hour : hour - 12;


		secondArrow.setAttribute('transform', "rotate(" + second * angeTime + ',' + clockRadius + ',' + clockRadius + ")");
		minuteArrow.setAttribute('transform', "rotate(" + minute * angeTime + ',' + clockRadius + ',' + clockRadius + ")");
		hourArrow.setAttribute('transform', "rotate(" + hour * angeHour + ',' + clockRadius + ',' + clockRadius + ")");

		currTimeStr = formatDateTime(currTime);
		timeNum.innerHTML = currTimeStr;

        setTimeout(updateTime, 1010-ms);
        console.log(new Date());
	}

       
	updateTime();

}
    function formatDateTime(dt) {

        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();
        return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
    }
    
    // дополняет строку val слева нулями до длины Len
    function str0l(val, len) {
        var strVal = val.toString();
        while (strVal.length < len)
            strVal = '0' + strVal;
        return strVal;
    }







    