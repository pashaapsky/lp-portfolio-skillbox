$(document).ready(function () {

    const headerElem = $('.js-header');     //хедер
    const introElem = $('.js-intro');       //интро блок
    const mainElem = $('.js-main');         //main блок
    const serviceElem = $('#js-service');   //service блок
    const worksElem = $('#js-works');       //works блок
    const pricesElem = $('#js-prices');     //prices блок
    const btnStartOrderElem = $('.js-btn'); //кнопки вызова обратной связи
    const modalsElem = $('.js-modals');     //модальные окна

    const orderCallElem = $('.js-order-call');                      //модальное окно обратной связи
    const orderSuccessElem = $('.js-order-success');                //модальное окно успешной заявки
    const orderCallBtnElem = $('#js-order-call-btn');               //кнопка submit модального окна order-call
    const closeBtnOrderCallElem = $('#js-close-btn--order-call');   // кнопка закрыть модального окна order-call
    const closeBtnOrderSuccessElem = $('#js-close-btn--order-success');   // кнопка закрыть модального окна order-success
    const orderCallUserNameInput = $('.js-user-name');              //поле ввода имени пользователя
    const orderCallUserPhoneInput = $('.js-user-phone');            //поле ввода телефона пользователя

    const orderCallFormElem = $('#js-order-call__form');   //order-call форма

    const burgerButtonElem = $('#js-nav-btn');  //кнопка навигационного меню при разрешении 320px
    const navLinksElem = $('[data-scroll]');    //массив ссылок навигации

    //граничные высоты блоков
    let headerHeight = headerElem.innerHeight();   //высота хедера
    let introHeight = introElem.innerHeight();     //высота блока интро

    //позиция элементов от начала страницы
    let offsetService = serviceElem.offset().top;   //service offsetTop
    let offsetWorks = worksElem.offset().top;       //works offsetTop
    let offsetPrices = pricesElem.offset().top;     //prices offsetTop

    let scrollPos = $(window).scrollTop();          //позиция скролла

    $(window).on('resize load', () => {
        offsetService = serviceElem.offset().top;
        offsetWorks = worksElem.offset().top;
        offsetPrices = pricesElem.offset().top;

        // headerHeight = headerElem.innerHeight();
    });

    //навигация, перемещение по клику, скроллинг
    $(window).on('load scroll resize', function () {
        scrollPos = $(this).scrollTop();

        //фикс header при скролле
        if (scrollPos > introHeight + headerHeight) {
            headerElem.addClass('header--fixed');
            mainElem.css({'margin-top': headerHeight})
        }
        else {
            headerElem.removeClass('header--fixed');
            mainElem.css({'margin-top': 0})
        }

        //выделение навигации при скролле
        //блок service
        if ((scrollPos >= offsetService - headerHeight) && (scrollPos < offsetWorks - headerHeight)) {
            navLinksElem.each(function (index) {
                if (index === 0) {
                    $(this).addClass('active');
                }
                else {
                    $(this).removeClass('active');
                }
            })}
        //блок works
        else if ((scrollPos >= offsetWorks - headerHeight) && (scrollPos < offsetPrices - headerHeight)) {
            navLinksElem.each(function (index) {
                if (index === 1) {
                    $(this).addClass('active');
                }
                else {
                    $(this).removeClass('active');
                }
            })
        }
        //блок prices
        else if (scrollPos >= offsetPrices - headerHeight) {
            navLinksElem.each(function (index) {
                if (index === 2) {
                    $(this).addClass('active');
                }
                else {
                    $(this).removeClass('active');
                }
            })
        }
        else {
            navLinksElem.each(function (index) {
                $(this).removeClass('active')
            })
        }
    });

    //анимация выделения ссылок навигации
    $(navLinksElem).hover(
        function (event) {
            const elem = event.target;
            $(elem).animate({
                opacity : 0.5,
                fontSize : "+=1",
            })},
        function (event) {
            const elem = event.target;
            $(elem).animate({
                opacity : 1,
                fontSize : "-=1",
            })}
        );


    //скролл по навигационным ссылкам
    navLinksElem.on('click', function (ev) {
        ev.preventDefault();

        const elementId = $(this).data('scroll');
        const elementOffSet = $(elementId).offset().top;

        headerElem.removeClass('menu-open');

        $('html, body').animate({
            scrollTop: elementOffSet
        }, 1000);
    });

    //открыть-закрыть навигационное меню при разрешении  <= 1200px
    burgerButtonElem.on('click', function (ev) {
        ev.preventDefault();

        headerElem.toggleClass('menu-open'); //переключаем класс для отображения меню

        //настройка атрибутов aria для кнопки
        if(burgerButtonElem.attr('aria-expanded') === 'true'){
            burgerButtonElem.attr('aria-expanded', 'false');                 //aria-expanded
            burgerButtonElem.attr('aria-label', 'Скрыть навигационное меню');   //aria-label
        }
        else {
            burgerButtonElem.attr('aria-expanded', 'true');
            burgerButtonElem.attr('aria-label', 'Раскрыть навигационное меню');
        }
    });

    //закрыть меню если его не закрыли
    $(window).on('resize', function () {
        if((window.innerWidth > 1200) && (headerElem.hasClass('menu-open')))
            headerElem.removeClass('menu-open');
    });

    //открыть модальное окно обратной связи order-call
    btnStartOrderElem.on('click', function (event) {
        event.preventDefault();

        //отключаем скролл
        $('body').addClass('no-scroll');

        //открываем окно + маска
        modalsElem.css('display', 'flex');
        orderCallElem.css('display', 'flex');

        //анимация
        $(modalsElem).animate({
            opacity : 1
        }, 1000);

        $(orderCallElem).animate({
            opacity : 1
        }, 1000);
    });

    // отправить данные обратной связи и закрыть окно
    orderCallBtnElem.on('click', function (event) {
        event.preventDefault();
        // console.log('event:', event);

        //отрабатывает если поля ввода заполнены
        const phoneLen = orderCallUserPhoneInput.val();
        const nameLen = orderCallUserNameInput.val();

        //отправка формы Ajax без перезагрузки страницы
        function sendAjaxForm(form, url) {
            $.ajax({
                url: url, //url страницы (mail.php)
                type: "POST", //метод отправки
                dataType: "html", //формат данных
                data: form.serialize(),  // Сеарилизуем объект
                success: function(response) { //Данные отправлены успешно
                    // console.log('response', response);
                    // let result = $.parseJSON(response);
                    // console.log('данные отправлены: ', result)
                },
                error: function(response) { // Данные не отправлены
                    alert('данные не отправлены');
                }
            });
        }
        
        if ((nameLen.length > 0) && (phoneLen.length === 18)) {
            // orderCallFormElem.submit();
            sendAjaxForm(orderCallFormElem, './mail.php');

            //отключаем скролл
            $('body').addClass('no-scroll');

            //открываем окно + маска
            // modalsElem.css('display', 'flex');
            orderCallElem.css('display', 'none');
            orderSuccessElem.css('display', 'flex');

            $(orderCallElem).animate({
                opacity : 0
            }, 100);

            $(orderSuccessElem).animate({
                opacity : 1
            }, 2000);

            orderCallFormElem[0].reset();
        }
        else {
            alert('Данные введены не верно');
        }
    });

    closeBtnOrderCallElem.on('click', function (event) {
        event.preventDefault();

        //убираем  отмену скролла
        $('body').removeClass('no-scroll');

        //закрываем окно + маска
        $(modalsElem).animate({
            opacity : 0
        }, 1000, function () {
            $(this).css('display', 'none')
        });

        $(orderCallElem).animate({
            opacity : 0
        }, 1000, function () {
            $(this).css('display', 'none')
        });

        //резет формы
        orderCallFormElem[0].reset();
    });

    closeBtnOrderSuccessElem.on('click', function (event) {
        event.preventDefault();

        //убираем  отмену скролла
        $('body').removeClass('no-scroll');

        //закрываем окно + маска
        $(modalsElem).animate({
            opacity : 0
        }, 1000, function () {
            $(this).css('display', 'none')
        });

        $(orderSuccessElem).animate({
            opacity : 0
        }, 1000, function () {
            $(this).css('display', 'none')
        });
    })

});

