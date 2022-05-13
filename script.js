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
             html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
         });
         document.querySelector(".songs").innerHTML=html;
         
     });
}

 //USER STORY 4: Cuando clico en la opción "Rock" de la barra superior Entonces puedo ver un listado con las canciones más escuchadas del género rock
 let rock = document.querySelector(".rock")
 rock.addEventListener("click", listaRock);

 function listaRock(){
    fetch("music.json")
    .then(res => res.json())
    .then(function(data){
        let html="";
        let rockArray= data.filter(song => song.genres.includes("rock") )
        rockArray.forEach(song => {
            html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
        });
        document.querySelector(".songs").innerHTML=html;
        })
        
    };

    
 //USER STORY 6: Cuando clico en la opción "Rock" de la barra superior Entonces puedo ver un listado con las canciones más escuchadas del género rock
 let indie = document.querySelector(".indie")
 indie.addEventListener("click", listaIndie);

 function listaIndie(){
    fetch("music.json")
    .then(res => res.json())
    .then(function(data){
        let html="";
        let indieArray= data.filter(song => song.genres.includes("indie") )
        indieArray.forEach(song => {
            html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
        });
        document.querySelector(".songs").innerHTML=html;
        })
        
    };
    


    //colores sara

  


//Sara escribe debajo de esta linea


//Helena escribe debajo de esta linea
//U2
const overview=document.querySelector("#overview")
overview.addEventListener('click', cargarJSON);


//U5 HIP HOP al hacer click en hip hop de la nav bar aparece la song list de ése género
let hiphop = document.querySelector(".hip-hop")
 hiphop.addEventListener("click", listaHiphop);

 function listaHiphop(){
    fetch("music.json")
    .then(res => res.json())
    .then(function(data){
        let html="";
        let hiphopArray= data.filter(song => song.genres.includes("Hip-Hop") )
        hiphopArray.forEach(song => {
            html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
        });
        document.querySelector(".songs").innerHTML=html;
        })
        
    };
    

    //U7 JAZZ al hacer click en JAZZ en la nav bar aparece la song list de ése género. Como no hay he puesto otro género

let jazz = document.querySelector(".jazz")
 jazz.addEventListener("click", listaJazz);

 function listaJazz(){
    fetch("music.json")
    .then(res => res.json())
    .then(function(data){
        let html="";
        let jazzArray= data.filter(song => song.genres.includes("psychedelic") )
        jazzArray.forEach(song => {
            html += `<li><img src="logoMusica.png" atr=""/ ><span class="songArtist" > <a href=${song.artist.url}> ${song.artist.name} </a> </span> <span class="songBold"> <a href=${song.url}> ${song.name} </a> </span><span class="listEnd"> ${song.listeners} listeners</span></li>`
        });
        document.querySelector(".songs").innerHTML=html;
        })
        
    };

