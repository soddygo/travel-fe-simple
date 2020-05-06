
define(function (require, exports, module) {
    console.log("test >>>>>>>>")
    //or
    //module.exports = {
    //text: textContent
    //}
})


seajs.config({
    alias:{
        'jquery':'./plugins/jquery/jquery-3.5.1.min',
    }
});
seajs.use('../travel-fe-simaple/js/index.js');
