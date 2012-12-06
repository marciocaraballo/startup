requirejs.config({
    
    baseUrl: 'js',
   
    paths: {
        element:'app/element',
        movie: 'app/movie',
        director:'app/director',
        jquery:'lib/jquery-1.8.2',
        jquerymobile:'lib/jquery.mobile-1.2.0'
    },

    shim:{
        'jquery.mobile':{
            dep:["jquery"],
            exports:"jQueryMobile"
        }
    }

});

// Start the main app logic.
requirejs(['movie','director','element','jquerymobile'],
function (Movie, Director,Element) {

    var m = new Movie();
    m.set('name','waterboy');
    m.play(); 

    var w = new Director("Tarantino");
    w.set("Age","44");

    w.set('quotes',['Do what you want','Cause a pirate is free','You are a pirate','He knows','I died','A long time ago']);

    var size = 6;

    m.set('director',w);

    $("#movieContent").append("<p>"+w.speak(0)+"</p>");

    $("#randomButton").click(function(){

            var randomnumber=Math.floor(Math.random()*size);

            $("#movieContent").html('').append("<p>"+w.speak(randomnumber)+"</p>");

    });

});

