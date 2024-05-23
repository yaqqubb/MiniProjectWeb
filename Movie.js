$(document).ready(function(){
    $("#scrollButton").click(function() {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 6000); // Süreyi milisaniye cinsinden ayarlayabilirsiniz (2000 ms = 2 saniye)
    });
});

