require.config({
    baseUrl: 'js',
    paths: {
        // "$" : "./plugins/jquery/jquery-3.5.1.min",
        jquery: './plugins/jquery/jquery-3.5.1.min',
        // "jquery" : ['./plugins/jquery-1.9.1'],
    }
});

require(['jquery'],function ($) {
    // var $ = require("jquery")
    $("#btn").click(function(){
        console.log("test >>>>>>>>2")
    });
    console.log("test >>>>>>>>")
});

// seajs.use('../travel-fe-simaple/js/index.js');
