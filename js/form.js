$(document).ready(function () {
    $('#month button').on('click', function () {
        $('#dropdownMenu1').text($(this).text());
    });
    $('#day button').on('click', function () {
        $('#dropdownMenu2').text($(this).text());
    });
    $('#year button').on('click', function () {
        $('#dropdownMenu3').text($(this).text());
    });  
});

