"use strict"

const formElem=document.forms.form;

const razrElem=formElem.elements.razr;
const nazvElem=formElem.elements.nazv;
const urlElem=formElem.elements.url;
const dataElem=formElem.elements.data;
const quanElem=formElem.elements.quan;
const emailElem=formElem.elements.email;
const catalogElem=formElem.elements.catalog;
const rewElem=formElem.elements.rewies;
const radioElem=formElem.elements.rad;
const catalElem=formElem.querySelector('.catal');
const elemsRadio=formElem.elements.answer;
for (var i = elemsRadio.length - 1; i >= 0; i--) {
    var elemRadio = elemsRadio[i];
    elemRadio.addEventListener('click', radioValid, false);     
  } 
//radio
const textElem=formElem.elements.text;
//submit

formElem.addEventListener("submit", formValid)
razrElem.addEventListener("blur", (eo)=>razrValid(false));
nazvElem.addEventListener("blur", (eo)=>nazvValid(false));
urlElem.addEventListener("blur", (eo)=>urlValid(false));
dataElem.addEventListener("blur", (eo)=>dataValid(false));
quanElem.addEventListener("blur", (eo)=>quanValid(false));
emailElem.addEventListener("blur", (eo)=>emailValid(false));
catalogElem.addEventListener("change", (eo)=>catalogValid(false));
rewElem.addEventListener("change", (eo)=>rewValid(false));

//radioElem.addEventListener("click", (eo)=>radioValid(false));
//radio
textElem.addEventListener("blur", (eo)=>textValid(false));
//submit

function razrValid(focusOnError) {

    const razrErrorElem=document.getElementById('razrError');
    let errorsCount=0;

    const value=razrElem.value;
    if ( !value ) {
        razrErrorElem.innerHTML="заполните поле Разработчики";
        if (focusOnError)
            razrElem.focus();
        errorsCount++;
    }
    else {
        razrErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function nazvValid(focusOnError) {

    const nazvErrorElem=document.getElementById('nazvError');
    let errorsCount=0;

    const value=nazvElem.value;
    if ( !value ) {
        nazvErrorElem.innerHTML="заполните поле Название сайта";
        if (focusOnError)
            nazvElem.focus();
        errorsCount++;
    }
    else {
        nazvErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function urlValid(focusOnError) {

    const urlErrorElem=document.getElementById('urlError');
    let errorsCount=0;

    const value=urlElem.value;
    if ( !value ) {
        urlErrorElem.innerHTML="заполните поле URL сайта";
        if (focusOnError)
            urlElem.focus();
        errorsCount++;
    }
    else {
        urlErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function dataValid(focusOnError) {

    const dataErrorElem=document.getElementById('dataError');
    let errorsCount=0;

    const value=dataElem.value;
    if ( !value ) {
        dataErrorElem.innerHTML="заполните поле Дата запуска сайта";
        if (focusOnError)
        dataElem.focus();
        errorsCount++;
    }
    else {
        dataErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function quanValid(focusOnError) {

    const quanErrorElem=document.getElementById('quanError');
    let errorsCount=0;

    const value=quanElem.value;
    if ( !value ) {
        quanErrorElem.innerHTML="заполните поле Посетителей в сутки";
        if (focusOnError)
            quanElem.focus();
        errorsCount++;
    }
    else {
        quanErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function emailValid(focusOnError) {

    const emailErrorElem=document.getElementById('emailError');
    let errorsCount=0;

    const value=emailElem.value;
    if ( !value ) {
        emailErrorElem.innerHTML="заполните поле E-mail для связи";
        if (focusOnError)
            emailElem.focus();
        errorsCount++;
    }
    else {
        emailErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function catalogValid(focusOnError) {

    const catalogErrorElem=document.getElementById('catalogError');
    let errorsCount=0;
    //var optionElem=catalogElem.option;

    const value=catalElem.value;
    if ( !value ) {
        catalogErrorElem.innerHTML="заполните поле Рубрика каталога";
        if (focusOnError)
            catalogElem.focus();
        errorsCount++;
    }
    else {
        catalogErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function radioValid(focusOnError) {

    const radioErrorElem=document.getElementById('radioError');
    //let errorsCount=0;

    //const value=radioElem.value;
    //if ( !value ) {
        //radioErrorElem.innerHTML="заполните поле Размещение";
        //if (focusOnError)
            //radioErrorElem.focus();
        //errorsCount++;
    //}
    //else {
        //radioErrorElem.innerHTML="";
    //}

    //return errorsCount;



    let errorsCount=0;
        var selectRadioValue = null;
        for (var i = 0; i < elemsRadio.length; i++) {
          var elemRadio = elemsRadio[i];
          console.log(elemRadio.checked);
          console.log(elemRadio.value);
       
          if (elemRadio.checked===true) {
            selectRadioValue = (elemRadio.value);
            console.log(selectRadioValue);
          }
       
          
          
        }
        if (selectRadioValue <= 0) {
            radioErrorElem.innerHTML = 'Сделайте выбор типа размещения';
            //radioErrorElem.style.cssText = 'color: red';
          if (focusOnError)
              radioElem.focus();
          errorsCount++;      
        }    
        else {
            radioErrorElem.innerHTML = '';
        }
        return errorsCount;
      
} 

function rewValid(focusOnError) {

    const rewErrorElem=document.getElementById('rewError');
    let errorsCount=0;

    const value=rewElem.checked;
    if ( !value ) {
        rewErrorElem.innerHTML="разрешите отзывы";
        if (focusOnError)
        rewElem.focus();
        errorsCount++;
    }
    else {
        rewErrorElem.innerHTML="";
    }

    return errorsCount;
} 


function textValid(focusOnError) {

    const textErrorElem=document.getElementById('textError');
    let errorsCount=0;

    const value=textElem.value;
    if ( !value ) {
        textErrorElem.innerHTML="заполните поле Описание сайта";
        if (focusOnError)
        textElem.focus();
        errorsCount++;
    }
    else {
        textErrorElem.innerHTML="";
    }

    return errorsCount;
} 

function formValid(eo) {
    eo=eo||window.event;

    let errCount=0;
    errCount+=razrValid(!errCount);
    errCount+=nazvValid(!errCount);
    errCount+=urlValid(!errCount);
    errCount+=dataValid(!errCount);
    errCount+=quanValid(!errCount);
    errCount+=emailValid(!errCount);
    errCount+=catalogValid(!errCount);
    errCount+=textValid(!errCount);
    errCount+=rewValid(!errCount);
    errCount+=radioValid(!errCount);



    if (errCount)
      eo.preventDefault();
}