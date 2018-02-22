/*function allowDrop(ev){
ev.preventDefault();

}

function drag(ev) {
           ev.dataTransfer.setData("text", ev.target.id);
       }

       function drop(ev) {
           ev.preventDefault();
           var data = ev.dataTransfer.getData("text");
           ev.target.appendChild(document.getElementById(data));
       }

       function show(ev) {
           var hair = document.getElementById("hair");

           img1.style.opacity = 1;
       }


      */

      'use strict'
       function allowDrop(ev) {
           ev.preventDefault();
       }

       function drag(ev) {
           ev.dataTransfer.setData("text", ev.target.id);
           
       }

       function drop(ev) {
           ev.preventDefault();
           var data = ev.dataTransfer.getData("text");
           ev.target.appendChild(document.getElementById(data));
       }

       function show(ev) {
             var hair = document.getElementById("hair");
             img1.style.opacity = 1;
         }
