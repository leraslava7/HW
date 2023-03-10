

      "use strict"
  var formDef1=
[
{label:'Название сайта:',kind:'longtext',name:'sitename'},
{label:'URL сайта:',kind:'longtext',name:'siteurl'},
{label:'Посетителей в сутки:',kind:'number',name:'visitors'},
{label:'E-mail для связи:',kind:'shorttext',name:'email'},
{label:'Рубрика каталога:',kind:'combo',name:'division',
variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
{label:'Размещение:',kind:'radio',name:'payment',
variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
{label:'Разрешить отзывы:',kind:'check',name:'votes'},
{label:'Описание сайта:',kind:'memo',name:'description'},
{caption:'Опубликовать',kind:'submit'},
];
  var formDef2=
[
{label:'Фамилия:',kind:'longtext',name:'lastname'},
{label:'Имя:',kind:'longtext',name:'firstname'},
{label:'Отчество:',kind:'longtext',name:'secondname'},
{label:'Возраст:',kind:'number',name:'age'},
{caption:'Зарегистрироваться',kind:'submit'},
];
const elem=document.getElementById('frm');


      function addForm(formDef, formElem) {

        const formNew=document.createElement('form');
        formNew.action='https://fe.it-academy.by/TestForm.php';
        formNew.method='get';
        elem.appendChild(formNew);

        for (let elemDef of formDef) {
            switch (elemDef.kind) {
                  case 'longtext': {
                        const labelElem=document.createElement('label');
                        labelElem.innerHTML=elemDef.label;
                        const inputElem=document.createElement('input');
                        inputElem.type='text';
                        inputElem.name=elemDef.name;
                        formNew.appendChild(labelElem);
                        formNew.appendChild(inputElem);
                        break;
                  }
                  case 'number': {
                        const labelElem=document.createElement('label');
                        labelElem.innerHTML=elemDef.label;
                        const inputElem=document.createElement('input');
                        inputElem.type='text';
                        inputElem.name=elemDef.name;
                        formNew.appendChild(labelElem);
                        formNew.appendChild(inputElem);
                        break;
                  }
                  case 'shorttext': {
                        const labelElem=document.createElement('label');
                        labelElem.innerHTML=elemDef.label;
                        const inputElem=document.createElement('input');
                        inputElem.type='text';
                        inputElem.name=elemDef.name;
                        formNew.appendChild(labelElem);
                        formNew.appendChild(inputElem);
                        break;
                  }
                  case 'combo': {
                        const labelElem=document.createElement('label');
                        labelElem.innerHTML=elemDef.label;
                        const selectElem=document.createElement('select');
                        selectElem.name=elemDef.name;
                        elemDef.variants.forEach (option => {
                              const optionElem=document.createElement('option');
                              optionElem.innerText=option.text;
                              optionElem.value=option.value;
                              selectElem.appendChild(optionElem);
                        } );
                        formNew.appendChild(labelElem);
                        formNew.appendChild(selectElem);
                        break;
                  }
                  case 'radio': {
                        const labelElem=document.createElement('label');
                        labelElem.innerHTML=elemDef.label;
                        formNew.appendChild(labelElem);

                        elemDef.variants.forEach (option => {
                              const inputElem=document.createElement('input');
                              inputElem.type='radio';
                              inputElem.name=elemDef.name;
                              inputElem.value=option.value;
                              const optionElem=document.createElement('span');
                              optionElem.innerText=option.text;
                              const brElem=document.createElement('br')
                              formNew.appendChild(inputElem);
                              formNew.appendChild(optionElem);
                              optionElem.appendChild(brElem);//к двойному тегу подвешивать можно, к одиночному нет
                           
                        } );

                        break;
                  }
                  case 'check': {
                        const labelElem=document.createElement('label');
                        labelElem.innerHTML=elemDef.label;
                        const inputElem=document.createElement('input');
                        inputElem.type='checkbox';
                        inputElem.name=elemDef.name;
                        formNew.appendChild(labelElem);
                        formNew.appendChild(inputElem);
                        break;
                  }
                  case 'memo': {
                        const labelElem=document.createElement('label');
                        labelElem.innerHTML=elemDef.label;
                        const textElem=document.createElement('textarea');
                        textElem.name=elemDef.name;
                        formNew.appendChild(labelElem);
                        formNew.appendChild(textElem);
                        break;
                  }
                  case 'submit': {
                        const inputElem=document.createElement('input');
                        inputElem.type='submit';
                        inputElem.value=elemDef.caption;
                        formNew.appendChild(inputElem);
                        break;
                  }
            }
        }       
      }


     addForm(formDef1, elem);
     addForm(formDef2, elem);
