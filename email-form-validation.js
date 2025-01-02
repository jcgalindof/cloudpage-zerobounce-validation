/* Validation */
$('#email-form').validate({
errorElement: "div",
rules: {
'firstname': {
required: true
},
'email': {
required: true,
"remote": {
url: 'https://cloud.mail.colgatepalmolive.com.mx/giveaways-doctorvalidation',
type: "post",
data:
{
unique_id: function () {
return $('#email').val();
}
}
}
},
'optin': {
required: true,
}
},
messages: {
'firstname': {
required: "<div class='regular_required_msg'>Por favor, introduce solo un nombre.</div>"
},
'email': { // and here
required: "<div class='regular_required_msg'>Por favor, verifica tu correo electrónico.</div>",
email: "<div class='regular_required_msg'>Por favor, verifica tu correo electrónico.</div>",
remote: "<div class='regular_required_msg'>El email ya está registrado</div>",
},

'mobile_phone_num': {
minlength: "<div class='regular_required_msg'>Verifica este campo</div>"
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