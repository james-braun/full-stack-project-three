// JavaScript source code
$('#name').focus();

$('[for="other-title"]').hide();
$('#other-title').hide();

$('#colors-js-puns').hide()

$('#title').on('change', function () {
    if ($(this).val() === "other") {
        $('[for="other-title"]').show();
        $('#other-title').show();
    } else {
        $('[for="other-title"]').hide();
        $('#other-title').hide();
    }
});

$('#design').on('change', function () {        
    if ($(this).val() === "js puns") {
        $('#colors-js-puns').show();
        $('#color').val('cornflowerblue');
        $('option[value="tomato"],[value="steelblue"],[value="dimgrey"]').hide();
        $('option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').show();
    } else if ($(this).val() === "heart js") {
        $('#colors-js-puns').show();
        $('#color').val('tomato');
        $('option[value="cornflowerblue"],[value="darkslategrey"],[value="gold"]').hide();
        $('option[value="tomato"],[value="steelblue"],[value="dimgrey"]').show();
    } else {
        $('#colors-js-puns').hide();
    }
});

var number = 0;
var checkBoxFlag = false;
$('input[type="checkbox"]').each(function () {
    $(this).click(function () {
        if (!checkBoxFlag) {
            $('input[type="checkbox"]').each(function () {
                $(this).parent().css('color', 'white');
            });
            checkBoxFlag = true;
        }

        if ($(this).attr('name') === $('input[name="js-frameworks"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="express"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="express"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="express"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="js-frameworks"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="js-frameworks"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="js-libs"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="node"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="node"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="node"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="js-libs"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="js-libs"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="all"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
            } else {
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="build-tools"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
            } else {
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="npm"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
            } else {
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        }
        $('.activities p').remove();
        $('.activities').append('<p>Cost $' + number + '</p>');
    });
});

$('#payment').val("credit card");
$('#credit-card + div').hide();
$('#credit-card + div + div').hide();
$('#payment').on('change', function () {
    console.log($(this).val());
    if ($(this).val() === "credit card") {
        $('#credit-card').show();
        $('#credit-card + div').hide();
        $('#credit-card + div + div').hide();
    } else if ($(this).val() === "paypal") {
        $('#credit-card').hide();
        $('#credit-card + div').show();
        $('#credit-card + div + div').hide();
    } else if ($(this).val() === "bitcoin") {
        $('#credit-card').hide();
        $('#credit-card + div').hide();
        $('#credit-card + div + div').show();
    }
});

$('button').click(function (e) {
    if ($('#name').val() === '') {
        e.preventDefault();
        $('#name').addClass("error");
    } else {
        $('#name').removeClass("error")
    }
    var regExpression = /^[^@]+@[^@.]+\.[a-z]+$/i;
    if (regExpression.test($('#mail').val())) {
        $('#mail').removeClass("error");
    } else {
        e.preventDefault();
        $('#mail').addClass("error");
    }
    checkBoxFlag = false;
    $('input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            checkBoxFlag = true;
        }
    });
    if (!checkBoxFlag) {
        e.preventDefault();
        $('input[type="checkbox"]').each(function () {
            $(this).parent().css('color', 'red');
        });
    } else {
        $('input[type="checkbox"]').each(function () {
            $(this).parent().css('color', 'black');
        });
    }
    if (!(/^[0-9]{13,16}$/.test($('#cc-num').val()))) {
        e.preventDefault();
        $('#cc-num').addClass("error");
    } else {
        $('#cc-num').removeClass("error");
    }
    if (!(/^[0-9]{5,5}$/.test($('#zip').val()))) {
        e.preventDefault();
        $('#zip').addClass("error");
    } else {
        $('#zip').removeClass("error");
    }
    if (!(/^[0-9]{3,3}$/.test($('#cvv').val()))) {
        e.preventDefault();
        $('#cvv').addClass("error");
    } else {
        $('#cvv').removeClass("error");
    }
});

$('#name,#mail,#cc-num,#zip,#cvv').focus(function () {
    $(this).removeClass("error");
});

$('label[for="mail"]').after('<span class="error-message"></span>');
$('#mail').keyup(function () {
    var regExpression = /[^@]+@[^@.]+\.[a-z]+/i;
    if (regExpression.test($(this).val())) {
        $('.error-message').text("");
    } else {
        $('.error-message').text("Format: user@example.com");
        if ($(this).val() === '') {
            $('.error-message').text("");
        }
    }
});

