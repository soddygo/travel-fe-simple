
seajs.config({
    alias:{
        'jquery':'/travel-fe-simple/js/plugins/jquery/jquery-3.5.1.min',
    }
});
define(function (require, exports, module) {
    var $ = require("jquery")

    console.log("test >>>>>>>>")
    //or
    //module.exports = {
    //text: textContent
    //}
})

seajs.use('../travel-fe-simaple/js/index.js');
