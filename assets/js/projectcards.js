$(document).ready(function() {

    $('.box').click(function() {
        console.log(this);
        window.open($(this).find('a.project-card').attr('href'));
        return false;
    })

})