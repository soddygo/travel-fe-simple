define("init",function (require, exports, module) {
    // Handler for .ready() called.
    var $ = require('jquery');

    var ajax = require('travel-fe-simple/js/config/ajax');

    ajax.post(ajax.returnSupplierList,{},function (res) {

        console.log("test")
    })

    console.log("sssssssss")
    var vue = new Vue({
        el: "#app",
        data: {
            a: 1,
            b: 2,
        },
        created: function () {
            console.log("a is :" + this.a);
        },
        beforeMount: function () {

        },
        mounted: function () {

        },
        methods: function () {

        }
    })

    module.exports = {
        vue: vue
    }
});

define(function (require, exports, module) {
    var init = require('init');

});
