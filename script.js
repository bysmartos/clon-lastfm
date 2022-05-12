//RECORDATORIO: ID PONIENDO COMENTARIOS EN VUESTRA PARTE SOBRE LO QUE ESTAIS HACIENDO


//Sandra escribe debajo de esta linea 
//Las proximas tres lienas comentadas son de test para combrobar
// que funciona bien el docuemtno js

    // document.addEventListener("click", colorear)

    // function colorear(){
    //     document.querySelector(".navMusicStyle").style.backgroundColor="pink"
    // }
  // Esto es simplemente para ver el array en consola por si lo queremos consultar
    fetch("music.json")
    .then(res => res.json())
    .then(data=>console.log(data));


//esto es otro test para ver si el window....load.. funciona.
    // window.addEventListener("load", colorear)

    // function colorear(){
    //     document.querySelector(".navMusicStyle").style.backgroundColor="pink"
    // }
    
 //USER STORY 1: se carga el listado JSON  con todas las canciones al cargar la pagina  
window.addEventListener("load", cargarJSON);
//Esto funciona, pero lo he copiado debajo para probar cosas y de momento funciona bien, me guardo este comentado por si lo necesito mas adelnate

// function cargarJSON(){
//     fetch("music.json")
//      .then(res => res.json())
//      .then(function(data){
//          let html="";
//          data.forEach(song => {
//              html += `<li>${song.artist.name} ${song.name} ${song.listeners} listeners</li>`
//          });
//          document.querySelector(".songs").innerHTML=html;
//      });
// }

function cargarJSON(){
    fetch("music.json")
     .then(res => res.json())
     .then(function(data){
         let html="";
         data.forEach(song => {
             html += `<li><img src="https://img2.freepng.es/20180827/ze/kisspng-computer-icons-clip-art-portable-network-graphics-icons-for-free-glyphpack-5b8492aa350d03.4427377915354149542173.jpg" atr="" ><span class="songArtist" >  ${song.artist.name}</span> <span class="songBold" >${song.name}</span><span class="listEnd"> ${song.listeners} listeners</span></li>`
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