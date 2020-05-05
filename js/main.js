require.config({
    baseUrl: 'js',
    paths: {
        // "$" : "./plugins/jquery/jquery-3.5.1.min",
        // jquery: './plugins/jquery/jquery-3.5.1.min',
        "jquery" : ["http://code.jquery.com/jquery-1.9.1.js"],
    }
});

require(['jquery'],function ($, hello) {
    $("#btn").click(function(){
        hello.showMessage("hangge.com");
    });
    console.log("test >>>>>>>>")
});
