$(function () {
    console.log("Let's get ready to party with jQuery!");

    $('article img').addClass('image-center');

    $('article p').eq(5).remove();

    $('h1').css('font-size', Math.random() * 100);

    $('ol').append('<li>This is the item I am adding to the list.</li>');

    $('aside').empty().append("<p>I'm so sorry! This list was silly.</p>")

    $('input').on('keyup blur change', function () {
        let red = $('input').eq(0).val();
        let blue = $('input').eq(1).val();
        let green = $('input').eq(2).val();
        $('body').css('background-color',
            'rgb(' + red + ',' + green + ',' + blue + ')');
    });

    $('img').on('click', function () {
        $(this).remove();
    });
});