const Markers = {
    fn: {
        addMarkers: function () {
            const target = $('#image-wrapper');
            const data = target.attr('data-captions');
            const captions = $.parseJSON(data);
            const coords = captions.coords;

            for (let i = 0; i < coords.length; i++) {
                const obj = coords[i];
                const top = obj.top;
                const left = obj.left;
                const id = obj.id;
                $('<span class="marker" />')
                    .css({
                        top: top,
                        left: left
                    })
                    .html(`<span class="caption" id="${id}">${id}</span>`)
                    .appendTo(target);
            }
        }
    },

    init: function () {
        this.fn.addMarkers();
    },

    showsCaptions: function (id, text) {
        let elemId = id % 6 === 0 ? (id % 6) + 1 : id % 6;
        elemId = id > 6 ? elemId + 1 : elemId;
        const marker = $(`#plus_${elemId}`);
        const markers = $(".caption");
        markers.each((item) => {
            if (item !== elemId) {
                $(`#plus_${item}`).slideUp(300);
                if (elemId !== 5) {
                    $(`#plus_5`).slideUp(300)
                }
            }
        });
        marker.text(text);
        marker.slideDown(300);
    }
};

$(function () {
    Markers.init();

    const navLink = $(".nav__li");
    const sectionMenuItem = $(".section-1__nav-product__ul__li");
    const productLi = $("#li__product");
    const itemLi = $(".drop-down-menu-1__li");
    const DDMFirst = $("#drop-down-menu-1");
    const DDMSecond = $("#drop-down-carousel-1");
    const header = $("#header");


    //test
    $("#menu ul").hide();
    $("#menu li span").click(function () {
        $("#menu ul:visible").slideUp("normal");
        if (($(this).next().is("ul")) && (!$(this).next().is(":visible"))) {
            $(this).next().slideDown("normal");
        }
    });

    sectionMenuItem.on('click', function () {
        const text = $("#section-1__product-info");
        const itemText = $(this).find('div').text();
        const itemId = $(this).find('div').attr('id');
        Markers.showsCaptions(itemId, itemText);
        if (text.attr('class') === "invisible") {
            text.removeClass("invisible");
        }
        sectionMenuItem.removeClass("active_Menu_one_arrow");
        $(this).addClass("active_Menu_one_arrow");
    });
    //test

    productLi.on('click', () => {
        let classNameFirstDDM = DDMFirst.attr('class');
        if (classNameFirstDDM === "invisible") {
            DDMFirst.removeClass("invisible");
            DDMSecond.removeClass("invisible");
            itemLi.first().addClass("active_Menu");
            header.addClass("box-shadow-header");
            refreshCarousel();
        } else {
            DDMFirst.addClass("invisible");
            DDMSecond.addClass("invisible");
            header.removeClass("box-shadow-header");
        }
    });

    itemLi.on('click', function () {
        itemLi.removeClass("active_Menu");
        $(this).addClass("active_Menu");
        const value = $(this).attr('id');
        switch (value) {
            case "section-1__DDM-1":
                $('#drop-down-carousel-1').removeClass("invisible");
                $('#drop-down-carousel-2').addClass("invisible");
                $('#drop-down-carousel-3').addClass("invisible");
                refreshCarousel();
                break;
            case "section-1__DDM-2":
                $('#drop-down-carousel-2').removeClass("invisible");
                $('#drop-down-carousel-1').addClass("invisible");
                $('#drop-down-carousel-3').addClass("invisible");
                refreshCarousel();
                break;
            case "section-1__DDM-3":
                $('#drop-down-carousel-3').removeClass("invisible");
                $('#drop-down-carousel-1').addClass("invisible");
                $('#drop-down-carousel-2').addClass("invisible");
                refreshCarousel();
                break;
            default:
                console.error("err")
        }

    });

    function refreshCarousel() {
        $('.section-1-index__your-class-1-js')[0].slick.refresh();
        $('.section-1-index__your-class-2-js')[0].slick.refresh();
        $('.section-1-index__your-class-3-js')[0].slick.refresh();
    }

    navLink.on('click', function () {
        navLink.removeClass("nav__active__li");
        $(this).addClass("nav__active__li");
    });


    /*section online order*/
    const inputFile = $('.section-9__inputFile');
    const inputFileSecond = $(".section-10__inputFile");
    const inputFileЕhird = $(".section-12__inputFile");

    inputFile.change("click", function () {
        let inputFileValue = inputFile.val();
        downloadFile(inputFileValue, "9");
    });

    inputFileSecond.change("click", () => {
        let inputFileValue = inputFileSecond.val();
        downloadFile(inputFileValue, "10");
    });

    inputFileЕhird.change("click", () => {
        let inputFileValue = inputFileЕhird.val();
        downloadFile(inputFileValue, "12");
    });


    const downloadFile = (value, numberInput) => {
        if (!value) {
            return false;
        }
        const spanText = $(`.section-${numberInput}__download-block__text-div__download-text`);
        const spanDate = $(`.section-${numberInput}__download-block__item-date`);
        const downloadItem = $(`.section-${numberInput}__download-block__item`);
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        downloadItem.removeClass("visibilityHidden");
        spanText.text(regularFileFunc(value));
        spanDate.text(date);
    };

    const regularFileFunc = (letter) => {
        const regular = /[^\/\\]*$/;
        return letter.match(regular)[0];
    };

    const bellowsBlock = $(".section-11__bellows__block-img-text");
    bellowsBlock.on('mouseover', function () {
        bellowsBlock.removeClass("section-11__active-block-js");
        $(this).addClass("section-11__active-block-js");
        const value = $(this).attr('id');

        const carousel1 = $('.section-11-product__your-class-1-js');
        const carousel2 = $('.section-11-product__your-class-2-js');
        const carousel3 = $('.section-11-product__your-class-3-js');
        const img1 = $('#section-11__image-1');
        const img2 = $('#section-11__image-2');
        const img3 = $('#section-11__image-3');
        const imgClass = $('.section-11__fon-image');
        switch (value) {
            case "section-11-DDM-1":
                carousel1.removeClass('invisible');
                carousel2.addClass('invisible');
                carousel3.addClass('invisible');
                imgClass.addClass('invisible');
                img1.removeClass('invisible');
                refreshCarouselInProduct(carousel1, carousel2, carousel3);
                break;
            case "section-11-DDM-2":
                carousel1.addClass('invisible');
                carousel2.removeClass('invisible');
                carousel3.addClass('invisible');
                imgClass.addClass('invisible');
                img2.removeClass('invisible');
                refreshCarouselInProduct(carousel1, carousel2, carousel3);
                break;
            case "section-11-DDM-3":
                carousel1.addClass('invisible');
                carousel2.addClass('invisible');
                carousel3.removeClass('invisible');
                imgClass.addClass('invisible');
                img3.removeClass('invisible');
                refreshCarouselInProduct(carousel1, carousel2, carousel3);
                break;
            default:
                alert('Я таких значений не знаю');
        }
    });


    function refreshCarouselInProduct(c1, c2, c3) {
        c1[0].slick.refresh();
        c2[0].slick.refresh();
        c3[0].slick.refresh();
    }

    const more = $(".more");
    more.on('click', function () {
        const textMore = $(".section-12__blueprints__body__table-block__button__text");
        const arrow = $(".section-12__blueprints__body__table-block__button__arrow");
        const thisTable = $(this).parent().children(".section-12__blueprints__body__table-block");
        const thisTableOpen = $(this).parent().children(".section-12__blueprints__body__table-block__open");
        if (thisTable.hasClass("section-12__blueprints__body__table-block")) {
            thisTable.removeClass("section-12__blueprints__body__table-block");
            thisTable.addClass("section-12__blueprints__body__table-block__open");
            textMore.text("Спрятать таблицу");
            return;
        }
        thisTableOpen.removeClass("section-12__blueprints__body__table-block__open");
        thisTableOpen.addClass("section-12__blueprints__body__table-block");
        textMore.text("Показать полную таблицу");
    });

    const initializationCarouselInProductFile = () => {
        const corusel1 = $(".section-11-product__your-class-1-js");
        const corusel2 = $(".section-11-product__your-class-2-js");
        const corusel3 = $(".section-11-product__your-class-3-js");
        if (corusel1.length !== 0 && corusel2.length !== 0 && corusel3.length !== 0) {
            corusel1.slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });

            corusel2.slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
            });

            corusel3.slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
            });
        } else {
            return false;
        }
    };

    const initializationCarouselInIndexFile = () => {
        const corusel1 = $(".section-1-index__your-class-1-js");
        const corusel2 = $(".section-1-index__your-class-2-js");
        const corusel3 = $(".section-1-index__your-class-3-js");
        if (corusel1.length !== 0 && corusel2.length !== 0 && corusel3.length !== 0) {
            corusel1.slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1
            });
            corusel2.slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1
            });
            corusel3.slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1
            });
        } else {
            return false;
        }
    };

    const initializationCarouselInNewsFile = () => {
        const corusel = $(".section-7-news__your-class-js");
        if (corusel.length !== 0) {
            corusel.slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            });
        } else {
            return false;
        }
    };

    initializationCarouselInProductFile();
    initializationCarouselInNewsFile();
    initializationCarouselInIndexFile();
});