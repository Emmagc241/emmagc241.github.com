//Obtener los elementos de la claswe. close

let links = document.querySelectorAll(".close");

// recorrerlos

links.forEach(function(link){

//Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
//Quitarle las clases  de animacion que ya tienen
content.classList.remove("fadeInDown");
content.classList.remove("animated");


//Agregar clases para animar su salida
content.classList.add("fadeOutUp");
content.classList.add("animated");

    setTimeout(function(){
  location.href = "../index.html";

},600);

          return false;
  });

});
