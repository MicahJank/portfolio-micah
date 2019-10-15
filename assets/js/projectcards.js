$(document).ready(function() {

    $('.box').click(() => {
        window.open($(this).find('a.project-card').attr('href'));
        return false;
    })

})