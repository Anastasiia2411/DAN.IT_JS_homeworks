$('.amazing_work_list_btn button').on('click', function () {
    let img = $(this).attr('data-filter');
    if (img === "all") {
        $('.amazing_work_list_img li').show();
    } else if (img === "graphic_design") {
        $('.amazing_work_list_img li').hide();
        $('.amazing_work_list_img li[data-filter="graphic_design"]').show();
    } else if (img === "web_design") {
        $('.amazing_work_list_img li').hide();
        $('.amazing_work_list_img li[data-filter="web_design"]').show();
    } else if (img === "landing_pages") {
        $('.amazing_work_list_img li').hide();
        $('.amazing_work_list_img li[data-filter="landing_pages"]').show();
    } else if (img === "wordpress") {
        $('.amazing_work_list_img li').hide();
        $('.amazing_work_list_img li[data-filter="wordpress"]').show();
    }
})