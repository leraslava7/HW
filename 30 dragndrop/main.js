"use strict"



window.onload = (event) => {
    load();
};//предзагрузка картинок

function load() {

    let images=document.getElementsByTagName("img");
    for (let i=0; i<images.length; i++) {
        const image=images[i];
        image.style.left=image.offsetLeft+"px";
        image.style.top=image.offsetTop+"px";
    }
    for (let i=0; i<images.length; i++) {
        const image=images[i]; 
        image.style.position="absolute";
        image.addEventListener("mousedown", imgMouseDown); 
    }

    let offsetX, offsetY;
    let draggedImg=null;
    let nextZZindex=10;

    function imgMouseDown(eo) {
        eo=eo||window.event;
        eo.preventDefault();
        let img=eo.target;
        img.style.zIndex=nextZZindex++;//если без z-index, то через img.parentNode.appendChild(img)
        offsetX=eo.pageX-img.offsetLeft;
        offsetY=eo.pageY-img.offsetTop;
        draggedImg=img;
        draggedImg.style.cursor="grab";
        window.addEventListener("mousemove", imgMouseMove);
        img.addEventListener("mouseup", imgMouseUp);
    }

    function imgMouseMove(eo) {
        if (!draggedImg)
          return;
        eo=eo||window.event;
        eo.preventDefault();
        draggedImg.style.left=(eo.pageX-offsetX)+"px";
        draggedImg.style.top=(eo.pageY-offsetY)+"px";
    }

    function imgMouseUp(eo) {
        eo=eo||window.event;
        eo.preventDefault();
        let img=eo.target;
        window.removeEventListener("mousemove", imgMouseMove);
        img.removeEventListener("mouseup", imgMouseUp);
        draggedImg.style.cursor="default";
        draggedImg=null;
    
    }


}