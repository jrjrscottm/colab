
$(function () {
    var clickEvent = false;
    $('#myCarousel').carousel({
        interval: 4000
    }).on('click', '.list-group li', function () {
        clickEvent = true;
        $('.list-group li').removeClass('active');
        $(this).addClass('active');
    }).on('slid.bs.carousel', function (e) {
        if (!clickEvent) {
            var count = $('.list-group').children().length - 1;
            var current = $('.list-group li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.list-group li').first().addClass('active');
            }
        }
        clickEvent = false;
    });

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#carousel-text').html($('#slide-content-0').html());

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#myCarousel').carousel(id);
    });


    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
});


// $(window).load(function () {
//     var boxheight = $('#myCarousel .carousel-inner').innerHeight();
//     var itemlength = $('#myCarousel .item').length;
//     var triggerheight = Math.round(boxheight / itemlength + 1);
//     $('#myCarousel .list-group-item').outerHeight(triggerheight);
// });