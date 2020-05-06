

define("page1",function (require, exports, module) {
    var $ = require("jquery")

    // require("vue")

    console.log("page1 >>>>>>>>")
    //or
    //module.exports = {
    //text: textContent
    //}

    var vue = new Vue({
        el: "#page1",
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

    module.exports = vue
})


define(function (require, exports, module) {
    var init = require('page1');

});
