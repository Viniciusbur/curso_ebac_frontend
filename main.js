$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        let task = $('#tarefa').val().trim();
        if (task !== '') {
            $('#lista').append('<li>' + task + '</li>');
            $('#tarefa').val('');
        }
    });

    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('completo');
    });
});