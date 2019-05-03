// JavaScript source code
$('#name').focus();

$('[for="other-title"]').hide();
$('#other-title').hide();

$('#colors-js-puns').hide()

$('#title').change(function () {
    if ($(this).val() === "other") {
        $('[for="other-title"]').show();
        $('#other-title').show();
    } else {
        $('[for="other-title"]').hide();
        $('#other-title').hide();
    }
});

$('#design').change(function () { 
        
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
$('input[type="checkbox"]').each(function () {
    $(this).click(function () {

        if ($(this).attr('name') === $('input[name="js-frameworks"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="express"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="express"]').prop("disabled", false).parent().css("color", "black");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="express"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="js-frameworks"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="js-frameworks"]').prop("disabled", false).parent().css("color", "black");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="js-libs"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="node"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="node"]').prop("disabled", false).parent().css("color", "black");
                number -= parseInt($(this).parent().text().split('$')[1]);
            }
        } else if ($(this).attr('name') === $('input[name="node"]').attr('name')) {
            if ($(this).prop('checked')) {
                number += parseInt($(this).parent().text().split('$')[1]);
                $('input[name="js-libs"]').prop("disabled", true).parent().css("color", "grey");
            } else {
                $('input[name="js-libs"]').prop("disabled", false).parent().css("color", "black");
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
        //console.log($number);
    });
});


//$('[name="express"]').prop("disabled", true).parent().css("color", "grey");
//$('[name="express"]').prop("disabled", false).parent().css("color", "black");

//var number = parseInt($('[name="express"]').parent().text().split('$')[1]);
//number += 1;
//console.log(number);