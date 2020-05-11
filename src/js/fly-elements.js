$(document).ready(function () {
    //летающие элементы
    const flyGridElem_1 = $('#grid-1');
    const flyGridElem_2 = $('#grid-2');

    const flyBracketsElem_1 = $('#brackets-1');
    const flyBracketsElem_2 = $('#brackets-2');
    const flyBracketsElem_3 = $('#brackets-3');
    const flyBracketsElem_4 = $('#brackets-4');

    const flyDivElem_1 = $('#div-1');
    const flyDivElem_2 = $('#div-2');
    const flyDivElem_3 = $('#div-3');

    const flySlashElem_1 = $('#slash-1');
    const flySlashElem_2 = $('#slash-2');
    const flySlashElem_3 = $('#slash-3');

    let windowWidth = $(window).innerWidth();  //разрешение экрана

    // при изменении ширины экрана
    // перерисовываем в опороных точках
    $(window).on('resize', () => {
        windowWidth = $(window).innerWidth();

        if (windowWidth === 1201) {
            flyGridElem_1.animate({
                fontSize: "3.8rem",
                top: "254px",
                left: "12.8%"
            }, 500, "linear");

            flyGridElem_2.animate({
                fontSize: "3.8rem",
                top: "250px",
                left: "12.8%"
            }, 500, "linear");

            flyBracketsElem_1.animate({
                fontSize: "3.2rem",
                top: "26px",
                left: "6.8%"
            }, 500, "linear");

            flyBracketsElem_2.animate({
                fontSize: "3.3rem",
                top: "557px",
                left: "19%"
            }, 500, "linear");

            flyBracketsElem_3.animate({
                fontSize: "3.3rem",
                top: "260px",
                left: "92%"
            }, 500, "linear");

            flyBracketsElem_4.animate({
                fontSize: "3.2rem",
                top: "60px",
                left: "6.7%"
            }, 500, "linear");

            flyDivElem_1.animate({
                fontSize: "2.5rem",
                top: "434px",
                left: "49.6%"
            }, 500, "linear");

            flyDivElem_2.animate({
                fontSize: "2rem",
                top: "60px",
                left: "41%"
            }, 500, "linear");

            flyDivElem_3.animate({
                fontSize: "2.48rem",
                top: "304px",
                left: "74%"
            }, 500, "linear");

            flySlashElem_1.animate({
                fontSize: "2.7rem",
                top: "564px",
                left: "19.6%"
            }, 500, "linear");

            flySlashElem_2.animate({
                fontSize: "3.07rem",
                top: "557px",
                left: "19%"
            }, 500, "linear");

            flySlashElem_3.animate({
                fontSize: "2.67rem",
                top: "77px",
                left: "86.2%"
            }, 500, "linear");
        }
        else if ((windowWidth === 768) || (windowWidth === 1200)) {
            flyGridElem_1.animate({
                fontSize: "3.8rem",
                top: "524px",
                left: "5.8%"
            }, 500, "linear");

            flyBracketsElem_1.animate({
                fontSize: "3.25rem",
                top: "49px",
                left: "7.8%"
            }, 500, "linear");

            flyBracketsElem_4.animate({
                fontSize: "2.2rem",
                top: "24px",
                left: "15%"
            }, 500, "linear");

            flyDivElem_1.animate({
                fontSize: "2.5rem",
                top: "430px",
                left: "84%"
            }, 500, "linear");

            flyDivElem_2.animate({
                fontSize: "2rem",
                top: "44px",
                left: "86.6%"
            }, 500, "linear");

            flyDivElem_3.animate({
                fontSize: "1.667rem",
                top: "305px",
                left: "50%"
            }, 500, "linear");

            flySlashElem_1.animate({
                fontSize: "2.7rem",
                top: "478px",
                left: "35%"
            }, 500, "linear");

            flySlashElem_2.animate({
                fontSize: "3rem",
                top: "126px",
                left: "41.4%"
            }, 500, "linear");

            flySlashElem_3.animate({
                fontSize: "2.667rem",
                top: "290px",
                left: "85.4%"
            }, 500, "linear");
        }
        else if ((windowWidth === 577) || (windowWidth === 767)) {
            flyGridElem_1.animate({
                fontSize: "3.5rem",
                top: "686px",
                left: "10%"
            }, 500, "linear");

            flyBracketsElem_1.animate({
                fontSize: "3rem",
                top: "56px",
                left: "10%"
            }, 500, "linear");

            flyDivElem_1.animate({
                fontSize: "2.5rem",
                top: "56px",
                left: "80%"
            }, 500, "linear");

            flySlashElem_1.animate({
                fontSize: "3rem",
                top: "686px",
                left: "85%"
            }, 500, "linear");
        }
        else if ((windowWidth === 320) || (windowWidth === 576)) {
            flyGridElem_1.animate({
                fontSize: "2rem",
                top: "124px",
                left: "11%"
            }, 500, "linear");

            flyBracketsElem_1.animate({
                fontSize: "1.6rem",
                top: "20px",
                left: "16%"
            }, 500, "linear");

            flyDivElem_1.animate({
                fontSize: "1rem",
                top: "68px",
                left: "76.8%"
            }, 500, "linear");

            flySlashElem_1.animate({
                fontSize: "1.2rem",
                top: "4px",
                left: "54%"
            }, 500, "linear");
        }
    });

    // при загрузке страницы
    if (windowWidth > 1200) {
        flyGridElem_1.animate({
            fontSize: "3.8rem",
            top: "254px",
            left: "12.8%"
        }, 500, "linear");

        flyGridElem_2.animate({
            fontSize: "3.8rem",
            top: "250px",
            left: "12.8%"
        }, 500, "linear");

        flyBracketsElem_1.animate({
            fontSize: "3.2rem",
            top: "26px",
            left: "6.8%"
        }, 500, "linear");

        flyBracketsElem_2.animate({
            fontSize: "3.3rem",
            top: "557px",
            left: "19%"
        }, 500, "linear");

        flyBracketsElem_3.animate({
            fontSize: "3.3rem",
            top: "260px",
            left: "92%"
        }, 500, "linear");

        flyBracketsElem_4.animate({
            fontSize: "3.2rem",
            top: "60px",
            left: "6.7%"
        }, 500, "linear");

        flyDivElem_1.animate({
            fontSize: "2.5rem",
            top: "434px",
            left: "49.6%"
        }, 500, "linear");

        flyDivElem_2.animate({
            fontSize: "2rem",
            top: "60px",
            left: "41%"
        }, 500, "linear");

        flyDivElem_3.animate({
            fontSize: "2.48rem",
            top: "304px",
            left: "74%"
        }, 500, "linear");

        flySlashElem_1.animate({
            fontSize: "2.7rem",
            top: "564px",
            left: "19.6%"
        }, 500, "linear");

        flySlashElem_2.animate({
            fontSize: "3.07rem",
            top: "557px",
            left: "19%"
        }, 500, "linear");

        flySlashElem_3.animate({
            fontSize: "2.67rem",
            top: "77px",
            left: "86.2%"
        }, 500, "linear");
    }

    else if ((windowWidth > 767) && (windowWidth <= 1200)) {
        flyGridElem_1.animate({
            fontSize: "3.8rem",
            top: "524px",
            left: "5.8%"
        }, 500, "linear");

        flyBracketsElem_1.animate({
            fontSize: "3.25rem",
            top: "49px",
            left: "7.8%"
        }, 500, "linear");

        flyBracketsElem_4.animate({
            fontSize: "2.2rem",
            top: "24px",
            left: "15%"
        }, 500, "linear");

        flyDivElem_1.animate({
            fontSize: "2.5rem",
            top: "430px",
            left: "84%"
        }, 500, "linear");

        flyDivElem_2.animate({
            fontSize: "2rem",
            top: "44px",
            left: "86.6%"
        }, 500, "linear");

        flyDivElem_3.animate({
            fontSize: "1.667rem",
            top: "305px",
            left: "50%"
        }, 500, "linear");

        flySlashElem_1.animate({
            fontSize: "2.7rem",
            top: "478px",
            left: "35%"
        }, 500, "linear");

        flySlashElem_2.animate({
            fontSize: "3rem",
            top: "126px",
            left: "41.4%"
        }, 500, "linear");

        flySlashElem_3.animate({
            fontSize: "2.667rem",
            top: "290px",
            left: "85.4%"
        }, 500, "linear");
    }
    else if ((windowWidth <= 767) && (windowWidth > 576)) {
        flyGridElem_1.animate({
            fontSize: "3.5rem",
            top: "686px",
            left: "10%"
        }, 500, "linear");

        flyBracketsElem_1.animate({
            fontSize: "3rem",
            top: "56px",
            left: "10%"
        }, 500, "linear");

        flyDivElem_1.animate({
            fontSize: "2.5rem",
            top: "56px",
            left: "80%"
        }, 500, "linear");

        flySlashElem_1.animate({
            fontSize: "3rem",
            top: "686px",
            left: "85%"
        }, 500, "linear");
    }
    else {
        flyGridElem_1.animate({
            fontSize: "2rem",
            top: "124px",
            left: "11%"
        }, 500, "linear");

        flyBracketsElem_1.animate({
            fontSize: "1.6rem",
            top: "20px",
            left: "16%"
        }, 500, "linear");

        flyDivElem_1.animate({
            fontSize: "1rem",
            top: "68px",
            left: "76.8%"
        }, 500, "linear");

        flySlashElem_1.animate({
            fontSize: "1.2rem",
            top: "4px",
            left: "54%"
        }, 500, "linear");
    }
});
