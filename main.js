'use strict';

function hamburgerShow() {
    $('.menu-wrap').on('click', function (event) {
        $('.menu').toggleClass('invis');
    })
}


$(hamburgerShow);