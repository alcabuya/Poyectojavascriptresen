$(document).ready(function(){ 
    console.log("dddd"); 
    var path =window.location.pathname;
    var page = path.split("/").pop();

    showcontent(page);     
});  
$("#keys").on('keypress', function(){
    console.log("kks");
    filterser = series.filter(element=> element.Nombre.toLocaleLowerCase().includes( $("#keys").val().toLocaleLowerCase()));
    seriesstring = stringbuild(filterser,"Series");
    filterpel = peliculas.filter(element=> element.Nombre.includes( $("#keys").val()));
    pelisstring = stringbuild(filterpel,"Peliculas");
    let finalcont = seriesstring+pelisstring + "</div>";

    $('.main').html(finalcont);
    
});
function genero(){
    console.log("dddd");

    $("#trailer").load("ajax/prueba.html");
}
let series=[
    {Nombre: "Peaky Blinders", Img: "./Img/peaky.jfif", gen: "drama", rank:6},
    {Nombre: "Estamos muertos", Img: "./Img/estamosmuert.jfif", gen: "terror", rank:2},
    {Nombre: "Inventando a Anna", Img: "./Img/Inventando_a_Anna.jpg", gen: "misterio", rank:4},
    {Nombre: "Monstruos de krakovia", Img: "./Img/krakovia.jfif", gen: "terror", rank:7},
    {Nombre: "Segunda temporada los Bridgerton", Img: "./Img/bridgertones.jfif", gen: "drama", rank:8},
    {Nombre: "Los guardianes de la justicia", Img: "./Img/guardianes.jfif", gen: "accion", rank:9},
    {Nombre: "Pasion de gavilanes", Img: "./Img/Pasiondegav.jfif", gen: "drama", rank:1},
    {Nombre: "Archivo81", Img: "./Img/archiv.jfif", gen: "misterio", rank:3},
    {Nombre: "The Sinner", Img: "./Img/thesinner.jfif", gen: "terror", rank:5}
    
];
let peliculas=[
    {Nombre: "Tick tick boom", Img: "./Img/ticktickboom.jfif",gen: "drama", rank:5},
    {Nombre: "Imperdonable", Img: "./Img/imperdonable.jfif",gen: "drama", rank:6 },
    {Nombre: "Texas Chainsaw Massacre", Img: "./Img/Chainsawm.jfif",gen: "terror", rank:1},
    {Nombre: "Perdidos en el ártico", Img: "./Img/Perdidosenelartico.jfif",gen: "terror", rank:7},
    {Nombre: "Fin de semana en Croacia", Img: "./Img/findecroacia.jfif",gen: "drama", rank:8},
    {Nombre: "The ritual", Img: "./Img/theritual.jpg",gen: "terror", rank:9},
    {Nombre: "El poder del perro", Img: "./Img/perropow.jfif",gen: "drama", rank:2},
    {Nombre: "A través de mi ventana", Img: "./Img/Atravesdm.jfif",gen: "drama", rank:3},
    {Nombre: "El estafador de tinder", Img: "./Img/estaftind.jpg",gen: "documental", rank:4}
];
generos = ["accion","terror","drama","documental","misterio"];
function showcontent(page){
    let seriesstring =" ";
    let pelisstring = " ";
    if(page == "index.html" || page == "Estrenos.html"){
        //let main =document.getElementsByClassName("main");
        seriesstring = stringbuild(series,"Series");
        pelisstring = stringbuild(peliculas,"Peliculas");
    }
    else if(page == "Peliculas.html"){
        pelisstring = stringbuild(peliculas,"Peliculas");
    }
    else if(page == "Series.html"){
        seriesstring = stringbuild(series,"Series");
    }
    else if(page == "Populares.html"){
        let sortseries = series;
        sortseries.sort(comparar);
        seriesstring = stringbuild(series,"Series");
        let sortpelis = peliculas;
        sortpelis.sort(comparar);
        pelisstring = stringbuild(peliculas, "Peliculas");

    }
    else if (page == "Generos.html"){
        stringtot = " ";
        generos.forEach(element=>{
            ser = series.filter(prod=> prod.gen == element);
            pel = peliculas.filter(prod=> prod.gen == element);
            tot = pel.concat(ser);
            stringtot =stringtot+stringbuild(tot,element);
        })
        seriesstring = stringtot;
    }
    
    let finalcont = seriesstring+pelisstring + "</div>";

    $('.main').html(finalcont);
}

function comparar ( a,b ){ return a.rank - b.rank; }
function stringbuild(Tipo, Titulo){
     let pelisstring =  `<h2>${Titulo}</h2>`;
    Tipo.forEach(element => {
        pelisstring = pelisstring +`<div class="row">
        <div class="col">
        <h3>${element.Nombre}</h3>
            <img class = "maincontentimg" src=${element.Img} />
        </div>
        </div>
    ` 
    });
    pelisstring = pelisstring ;
    return pelisstring;
}
