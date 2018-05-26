var currentForm = 0;
$(document).ready(function() {
    $($('div.question:first')[0]).fadeIn(1000);
    $('#quoteform').submit(function(e) {
        e.preventDefault();
        var data = {};
        $('#quoteform').serializeArray().map(input => {
            console.log(input);
            data[input.name] = input.value;
        });
        
        console.log(data);
    });
});

function changeForm() {
    var questions = $('form').find('.question');
    $(questions[currentForm]).fadeOut(300)
        .promise()
        .done(() => {
            currentForm += 1;
            $(questions[currentForm]).fadeIn(300);
        });
}
