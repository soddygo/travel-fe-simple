require.config({
    baseUrl: 'js',
    paths: {
        // "$" : "./plugins/jquery/jquery-3.5.1.min",
        // jquery: './plugins/jquery/jquery-3.5.1.min',
        "jquery" : ['./plugins/jquery-1.9.1'],
    }
});

require(['jquery'],function ($, hello) {
    $("#btn").click(function(){
        hello.showMessage("hangge.com");
    });
    console.log("test >>>>>>>>")
});
