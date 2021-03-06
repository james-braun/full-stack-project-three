// JavaScript source code

// Set cursor focus to name field on load.
$('#name').focus();

// Hide other field for job role.
$('[for="other-title"]').hide();
$('#other-title').hide();

// Hide t-shirt color select menu.
$('#colors-js-puns').hide();

// Add a span to contain cedit card validation error message to the dom.
$('label[for="cc-num"]').after('<span class="error-message card-error"></span>');

// set default payment method to cc and prevent "select payment" option from being visible.
$('#payment').val('credit card');
$('#payment').html('<option value="credit card">Credit Card</option><option value="paypal">PayPal</option><option value="bitcoin">Bitcoin</option>');

// Hide or show 'other job role' on 'other' select.
$('#title').on('change', function () {
    if ($(this).val() === "other") {
        $('[for="other-title"]').show();
        $('#other-title').show();
    } else {
        $('[for="other-title"]').hide();
        $('#other-title').hide();
    }
});

// Show or hide t-shirt colors based on t-shirt theme select.
$('#design').on('change', function () {
    $('#color').html('');
    if ($(this).val() === "js puns") {

        $('#color').append('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>');        
        $('#color').append('<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>');        
        $('#color').append('<option value="gold">Gold (JS Puns shirt only)</option>');
        $('#colors-js-puns').show();
        $('#color').val('cornflowerblue');
    } else if ($(this).val() === "heart js") {

        $('#color').append('<option value="tomato">Tomato (I &#9829; JS shirt only)</option>');
        $('#color').append('<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>');
        $('#color').append('<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
        $('#colors-js-puns').show();
        $('#color').val('tomato');
    } else {
        $('#colors-js-puns').hide();
    }
});
 
// number holds the cost of the activities person is attending.
var number = 0;

// checkBoxFlag tells whether any checkboxes have been checked,
var checkBoxFlag = false;

// For each checkbox...
$('input[type="checkbox"]').each(function () {

    // If checkbox is clicked...
    $(this).click(function () {

        // If all checkbox are red from button sumbition then
        // then change there color to white and flag that you've
        // done that.
        if (!checkBoxFlag) {
            $('input[type="checkbox"]').each(function () {
                $(this).parent().css('color', 'white');
            });
            checkBoxFlag = true;
        }

        // If checkbox clicked is "js-frameworks" then
        // if you are checking the box add the price of the 
        // activity to the cost and disable opposing activity.
        if ($(this).attr('name') === $('input[name="js-frameworks"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="express"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="express"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }

        // If checkbox clicked is "express" then
        // if you are checking the box add the price of the 
        // activity to the cost and disable opposing activity.
        } else if ($(this).attr('name') === $('input[name="express"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="js-frameworks"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="js-frameworks"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }

        // If checkbox clicked is "js-libs" then
        // if you are checking the box add the price of the 
        // activity to the cost and disable opposing activity.
        } else if ($(this).attr('name') === $('input[name="js-libs"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="node"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="node"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }

        // If checkbox clicked is "node" then
        // if you are checking the box add the price of the 
        // activity to the cost and disable opposing activity.
        } else if ($(this).attr('name') === $('input[name="node"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="js-libs"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="js-libs"]').prop("disabled", false).parent().css("color", "white");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }

        // If checkbox clicked is "all" then
        // if you are checking the box add the price of the 
        // activity to the cost.
        } else if ($(this).attr('name') === $('input[name="all"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
            } else {
                number -= parseInt($(this).parent().text().split('$')[1]);
            }

        // If checkbox clicked is "build-tools" then
        // if you are checking the box add the price of the 
        // activity to the cost.
        } else if ($(this).attr('name') === $('input[name="build-tools"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
            } else {
                number -= parseInt($(this).parent().text().split('$')[1]);
            }

        // If checkbox clicked is "npm" then
        // if you are checking the box add the price of the 
        // activity to the cost.
        } else if ($(this).attr('name') === $('input[name="npm"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
            } else {
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        }

        // Add the cost to the form.
        $('.activities p').remove();
        $('.activities').append('<p>Cost $' + number + '</p>');
    });
});

// Set payment type to credit card and hide
// the other two forms of payment.
$('#payment').val("credit card");
$('#credit-card + div').hide();
$('#credit-card + div + div').hide();

// On user select show and hide the apropriate forms of payment.
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


// On button submit do the following...
$('button').click(function (e) {

    // if name field empty then add red border.
    if ($('#name').val() === '') {
        e.preventDefault();
        $('#name').addClass("error");
    } else {
        $('#name').removeClass("error");
    }

    // If email field does not match the expression
    // add red border.
    var regExpression = /^[^@]+@[^@.]+\.[a-z]+$/i;
    if (regExpression.test($('#mail').val())) {
        $('#mail').removeClass("error");
    } else {
        e.preventDefault();
        $('#mail').addClass("error");
    }

    // clear the checkBoxFlag.
    checkBoxFlag = false;

    // If checkboxes are checked then set checkBoxFlag.
    $('input[type="checkbox"]').each(function () {
        if ($(this).prop('checked')) {
            checkBoxFlag = true;
        }
    });

    // If no checkboxes are checked then turn there labels red.
    if (!checkBoxFlag) {
        e.preventDefault();
        $('input[type="checkbox"]').each(function () {
            $(this).parent().css('color', 'red');
        });
    }

    // If crdit card payment form is chosen then...
    if ($('#payment').val() === "credit card") {

        // Flag for conditional error messages.
        var errorFlag = false;

        // if user enters letters into the cc field show error.
        regExpression = /[^0-9]/;
        if (regExpression.test($('#cc-num').val())) {
            $('.card-error').text("Numbers only");
            errorFlag = true;
        } 

        // if user doesn't enter 13 to 16 digits show error.
        regExpression = /^\d{13,16}$/;
        if (!regExpression.test($('#cc-num').val()) && !errorFlag) {
            $('.card-error').text("13 to 16 digits");
            errorFlag = true;
        } 

        // if user enters 13 to 16 digits hide error.
        regExpression = /^\d{13,16}$/;
        if (regExpression.test($('#cc-num').val()) && !errorFlag) {
            $('.card-error').text("");
        } 

        // if an error has occured on keyup remove error message.
        if (errorFlag) {
            $('#cc-num').on('keyup', function (event) {
                var keycode = (event.keycode ? event.keycode : event.which);
                if (keycode === 13) {
                    $('#cc-num').off();
                } else {
                    $('.card-error').text('');
                }
            });
        }

        // If credit card number not between 13 and 16 digits
        // add red border.
        if (!(/^[0-9]{13,16}$/.test($('#cc-num').val()))) {
            e.preventDefault();
            $('#cc-num').addClass("error");
        } else {
            $('#cc-num').removeClass("error");
        }

        // If zipcode not five digits then add red border.
        if (!(/^[0-9]{5,5}$/.test($('#zip').val()))) {
            e.preventDefault();
            $('#zip').addClass("error");
        } else {
            $('#zip').removeClass("error");
        }

        // If cvv not 3 digits then add red border.
        if (!(/^[0-9]{3,3}$/.test($('#cvv').val()))) {
            e.preventDefault();
            $('#cvv').addClass("error");
        } else {
            $('#cvv').removeClass("error");
        }
    }
});

// If user focuses on name, mail, credit card, zipcode, or cvv
// remove red border.
$('#name,#mail,#cc-num,#zip,#cvv').focus(function () {
    $(this).removeClass("error");
});

// Add a span to contain the real time validation message to the dom.
$('label[for="mail"]').after('<span class="error-message mail"></span>');

// when a key is pressed...
$('#mail').keyup(function () {

    // if the value of the mail field does not equal
    // the regExpression display the error message
    // else display nothing.
    var regExpression = /^[^@]+@[^@.]+\.[a-z]+$/i;
    if (regExpression.test($(this).val())) {
        $('span[class="error-message mail"]').text("");
    } else {
        $('span[class="error-message mail"]').text("Format: user@example.com");
        if ($(this).val() === '') {
            $('span[class="error-message mail"]').text("");
        }
    }
});

