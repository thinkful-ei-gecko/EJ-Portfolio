'use strict';

function hamburgerShow() {

    $('.menu-wrap').on('click', function(){


        console.log($('input[type=checkbox]'))

        if ($('.toggler').prop('checked') == false) {
        // $('.toggler').prop('checked', true)
        $('#show').remove()
    }

        if ($('.toggler').prop('checked') == true) {
        // $('.toggler').prop('checked', true)
        $('head').append('<link rel="stylesheet" type="text/css" id="show" href="activeHamburger.css">')
    }

    })

    $('#uncheck').on('click', function () {
        event.preventDefault()
        $('.toggler').prop('checked', false)
    })

}


$(hamburgerShow);