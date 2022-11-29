let parrafos = document.getElementsByTagName("p");
let enlaces = document.getElementsByTagName("a");
let parrafoCero = document.getElementsByTagName("p")[0].innerHTML;

parrafos[1].style.visibility = "hidden";
parrafos[2].style.visibility = "hidden";
parrafos[3].style.visibility = "hidden";
parrafos[4].style.visibility = "hidden";


enlaces[0].addEventListener("click", function(){
    getParrafo(0);
    
});
enlaces[1].addEventListener("click", function(){
    getParrafo(1);
    
});
enlaces[2].addEventListener("click", function(){
    getParrafo(2);
    
});
enlaces[3].addEventListener("click", function(){
    getParrafo(3);
    
});
enlaces[4].addEventListener("click", function(){
    getParrafo(4);
    
})

function getParrafo(indice) {
    if( indice == 0 ){
        parrafos[0].innerHTML = parrafoCero;
    }
    parrafos[0].innerHTML = parrafos[indice].innerHTML
}

