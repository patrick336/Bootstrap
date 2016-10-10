$(document).ready(function () {
    jQuery(function ($) {
        //zresetuj scrolla
        $.scrollTo(0);
        $('#link3').click(function () {
            $.scrollTo($('#contact'), 1000);
        });
        $('#link2').click(function () {
            $.scrollTo($('#products'), 1000);
        });
        $('#link1').click(function () {
            $.scrollTo($('#portfolio'), 1000);
        });
        $('#link4').click(function () {
            $.scrollTo($('#gallery'), 1000);
        });
        $('#button-tell').click(function () {
            $.scrollTo($('#portfolio'), 1000);
        });
        $('#logo').click(function () {
            $.scrollTo($('#pageTop'), 1000);
        });
    });
});