"use strict"
function buildClock() {
	var currTime = new Date();
	var second = currTime.getSeconds();
	var minute = currTime.getMinutes();
	var hour = currTime.getHours();

	hour = hour < 12 ? hour : hour - 12;
	var form = document.forms.FPos;
	const sizeClock=parseFloat(form.elements.Razmer.value);//размер часов
	var clockRadius = parseFloat(form.elements.Razmer.value) / 2;

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

	var bodyElem = document.getElementById('body');
	bodyElem.style.fontSize = clockRadius/10 + "px";

	var cvs = document.getElementById('clock');
	cvs.setAttribute("width", clockRadius * 2);
	cvs.setAttribute("height", clockRadius * 2);
	var context = cvs.getContext('2d');

	context.fillStyle = 'orange';
	context.beginPath();
	context.arc(clockRadius, clockRadius, clockRadius, 0, Math.PI * 2, false);
	context.fill();

	var angleStart = 0;//начало
	var angleRot = (360 / 12);//изменение угла
	var radius = (clockRadius * 0.8); //расстояние от центра часоd до центров цифр
	var currTimeStr = "";

	for (var i = 1; i <= 12; i++) {
		angleStart += angleRot;
		var angle = parseFloat(angleStart) / 180 * Math.PI;// угол расположения цифр
		var clockNumX = clockRadius + radius * Math.sin(angle);
		var clockNumY = clockRadius - radius * Math.cos(angle);

		context.fillStyle = 'green';
		context.beginPath();
		context.arc(clockNumX, clockNumY, clockRadius * 0.16, 0, Math.PI * 2, false);
		context.fill();

		context.fillStyle = 'black';
		context.font = 'italic bold '+clockRadius/10+'px Arial';
		//context.font = clockRadius/10 + "px";
		context.textAlign = 'center';
		context.textBaseline = 'middle';
		context.fillText(i, clockNumX - clockRadius * 0.01, clockNumY + clockRadius * 0.02);
	}

	currTimeStr = formatDateTime(currTime);

    var ms = currTime.getMilliseconds();

	var contexTime = cvs.getContext('2d');
	contexTime.fillStyle = 'black';
	contexTime.font = 'italic bold '+clockRadius/10+'px Arial';
	contexTime.fillText(currTimeStr, clockNumX - clockRadius * 0.01, clockNumY + clockRadius * 0.4);
	

	var contextSecond = cvs.getContext('2d');
	contextSecond.strokeStyle = 'black';
	contextSecond.lineCap = 'round';
	contextSecond.lineWidth = clockRadius/200;
	contextSecond.beginPath();
	contextSecond.moveTo(clockRadius, clockRadius);
	contextSecond.lineTo((clockRadius + clockRadius * 0.75 * Math.sin(second / 60 * 2 * Math.PI)), (clockRadius - clockRadius * 0.75 * Math.cos(second / 60 * 2 * Math.PI)));
	contextSecond.stroke();

	var contexMinute = cvs.getContext('2d');
	contexMinute.strokeStyle = 'black';
	contexMinute.lineCap = 'round';
	contexMinute.lineWidth = clockRadius/50;
	contexMinute.beginPath();
	contexMinute.moveTo(clockRadius, clockRadius);
	contexMinute.lineTo((clockRadius + clockRadius * 0.6 * Math.sin(minute / 60 * 2 * Math.PI)), (clockRadius - clockRadius * 0.6 * Math.cos(minute / 60 * 2 * Math.PI)));
	contexMinute.stroke();

	var contexHour = cvs.getContext('2d');
	contexHour.strokeStyle = 'black';
	contexHour.lineCap = 'round';
	contexHour.lineWidth = clockRadius/40;
	contexHour.beginPath();
	contexHour.moveTo(clockRadius, clockRadius);
	contexHour.lineTo((clockRadius + clockRadius * 0.4 * Math.sin(hour / 12 * 2 * Math.PI + minute / 60 / 2)), (clockRadius - clockRadius * 0.4 * Math.cos(hour / 12 * 2 * Math.PI + minute / 60 / 2)));
	contexHour.stroke();
    setTimeout(buildClock, 1010-ms);
    console.log(currTime);
	
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