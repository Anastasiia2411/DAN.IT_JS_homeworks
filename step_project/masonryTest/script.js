var $grid = $('#gallery').imagesLoaded( function() {
    $grid.masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter:10,
    });
    var $grid_2 = $('#gallery_2').imagesLoaded( function() {
        $grid_2.masonry({
            itemSelector: '.grid-item_2',
            percentPosition: true,
            columnWidth: '.grid-sizer_2',
            gutter: 2,
            originLeft: false,
            // fitWidth: true,
            // horizontalOrder: true
        });
    });
});
console.log("hello")








