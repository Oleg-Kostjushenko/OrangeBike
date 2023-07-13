let vipadMenu = false
$('.list').click(function () {
    if (!vipadMenu) {
        $(".li").slideDown()
    } else {
        $(".li").slideUp()
    }
    vipadMenu = !vipadMenu
})