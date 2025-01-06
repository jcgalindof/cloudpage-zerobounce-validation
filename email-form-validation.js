/* Validation */
$('#email-form').validate({
    errorElement: "div",
    rules: {
        'email': {
            required: true,
            "remote": {
                url: 'https://mcfmxk1g37c1jn91t2tp6mmtn3l1.pub.sfmc-content.com/15525panl1g',
                type: "post",
                data:{
                    unique_id: function () {
                        return $('#email').val();
                    },
                    LPDE_Name: "ZeroBounceValidation"
                }
            }
        },
        'optin': {
            required: true,
        }
    },
    messages: {
        'email': {
            required: "<div class='regular_required_msg'>Por favor, verifica tu correo electrónico.</div>",
            email: "<div class='regular_required_msg'>Por favor, verifica tu correo electrónico.</div>",
            remote: "<div class='regular_required_msg'>El email ya está registrado</div>",
            zerobounce: "<div class='regular_required_msg'>El email no parece ser válido</div>"
        },
        'optin': { // and here
            required: "<div class='regular_required_msg'>Acepta la política de privacidad</div>"
        }
    },
    errorPlacement: function (error, element) {
        if (element.attr("name") == "optin")
            error.insertAfter(".errorTxt");
        else
            error.insertAfter(element);
    },
    submitHandler: function (form) {
        form.submit();
    }
});