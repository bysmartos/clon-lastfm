//RECORDATORIO: ID PONIENDO COMENTARIOS EN VUESTRA PARTE SOBRE LO QUE ESTAIS HACIENDO


//Sandra escribe debajo de esta linea 

// document.addEventListener("click", colorear)

// function colorear(){
//     document.querySelector(".navMusicStyle").style.backgroundColor="pink"
// }
  
    fetch("music.json")
    .then(res => res.json())
    .then(data=>console.log(data));

// window.addEventListener("load", colorear)

// function colorear(){
//     document.querySelector(".navMusicStyle").style.backgroundColor="pink"
// }
    
window.addEventListener("load", cargarJSON);

function cargarJSON(){
    fetch("music.json")
     .then(res => res.json())
     .then(function(data){
         let html="";
         data.forEach(song => {
             html += `<li>${song.name}</li>`
         });
         document.querySelector(".songs").innerHTML=html;
     });
}


//Sara escribe debajo de esta linea


//Helena escribe debajo de esta linea
const top10=document.querySelector("#top10")
const overview=document.querySelector("#overview")
overview.addEventListener('click', cargarJSON);


// window.addEventListener("load", cargarJSON);

function cargarJSON(){
    fetch("music.json")
     .then(res => res.json())
     .then(function(data){
         let html="";
         data.forEach(song => {
             html += `<li>${song.name}</li>`
         });
         document.querySelector(".songs").innerHTML=html;
     });
}