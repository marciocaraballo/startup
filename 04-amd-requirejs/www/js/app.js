requirejs.config({
    
    baseUrl: 'js',
   
    paths: {
        app: './app',
        lib: './lib'
    },

    shim:{
        'lib/jquery-1.8.2':{
            exports:'$'
        },
    }

});

// Start the main app logic.
requirejs(['lib/jquery-1.8.2','app/movie','app/director'],
function ($, Movie, Director) {

    var m = new Movie();
    m.set('name','waterboy');
    m.play(); 

    document.goma = Movie; 

    var w = new Director("Tarantino");
    w.set("Age","44");

    w.set('quotes',['Do what you want','Cause a pirate is free','You are a pirate']);

    m.set('director',w);

    console.log(w.speak(0));

});

