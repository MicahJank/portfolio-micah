$(document).ready(function() {

    $('.project').click(function() {
        console.log(this);
        window.open($(this).find('a.project-card').attr('href'));
        return false;
    })

})