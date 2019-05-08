$(function () {

    const navLink = $(".nav__li");
    const sectionMenu = $(".section-1__Menu");
    const sectionMenuItem = $(".section-1__nav-product__ul__li");
    const productLi = $("#li__product");
    const itemLi = $(".drop-down-menu-1__li");
    const DDMFirst = $("#drop-down-menu-1");
    const DDMSecond = $("#drop-down-carousel");
    const header = $("#header");

    $('.your-class').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
    });

    productLi.on('click', () => {
        let classNameFirstDDM = DDMFirst.attr('class');
        if (classNameFirstDDM === "invisible") {
            DDMFirst.removeClass("invisible");
            DDMSecond.removeClass("invisible");
            itemLi.first().addClass("active_Menu");
            header.addClass("box-shadow-header");
            $('.your-class')[0].slick.refresh();
        } else {
            DDMFirst.addClass("invisible");
            DDMSecond.addClass("invisible");
            header.removeClass("box-shadow-header");
        }
    });

    itemLi.on('click', function () {
        itemLi.removeClass("active_Menu");
        $(this).addClass("active_Menu");
    });

    navLink.on('click', function () {
        navLink.removeClass("nav__active__li");
        $(this).addClass("nav__active__li");
    });


    sectionMenu.on('click', () => {
        const menu = $(".section-1__nav-product__ul");
        let res = menu.attr('class').match(/invisible/gi);
        if (res !== null) {
            menu.removeClass("invisible");
            sectionMenu.addClass("active_Menu");
            sectionMenu.text(">>> Сильфонны");
        } else {
            menu.addClass("invisible");
            sectionMenu.removeClass("active_Menu");
            $("#section-1__product-info").addClass("invisible");
            sectionMenu.text("Сильфонны");
            sectionMenuItem.removeClass("active_Menu_one_arrow");
        }
    });

    sectionMenuItem.on('click', function () {
        const text = $("#section-1__product-info");
        if (text.attr('class') === "invisible") {
            text.removeClass("invisible");
        }
        sectionMenuItem.removeClass("active_Menu_one_arrow");
        $(this).addClass("active_Menu_one_arrow");
    });

});