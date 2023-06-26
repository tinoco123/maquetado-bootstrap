var listaDifusion = document.getElementById("lista-difusion");
var radioListaDifusion = document.getElementById("enviar-lista-difusion");
var inputEmailEspecifico = document.getElementById("input-email-especifico");
var enviarEmailEspecifico = document.getElementById("enviar-email-especifico");
var selectAll = document.getElementById("select-all");
var checkboxesContacts = document.querySelectorAll(
  ".contactos .form-check-input"
);
var btnAgregarContacto = document.getElementById("agregarContacto")


enviarEmailEspecifico.addEventListener('change', function () {
  selectAll.checked = false
  for (var i = 0; i < checkboxesContacts.length; i++) {
    checkboxesContacts[i].checked = false;
  }
})

inputEmailEspecifico.addEventListener("click", function () {
  enviarEmailEspecifico.checked = true
  selectAll.checked = false
  for (var i = 0; i < checkboxesContacts.length; i++) {
    checkboxesContacts[i].checked = false;
  }
});



listaDifusion.addEventListener("click", function () {
  radioListaDifusion.checked = true;
  inputEmailEspecifico.value = ""
});


selectAll.addEventListener("change", function () {
  var isChecked = selectAll.checked;
  for (var i = 0; i < checkboxesContacts.length; i++) {
    checkboxesContacts[i].checked = isChecked;
  }
});

for (var i = 0; i < checkboxesContacts.length; i++) {
  checkboxesContacts[i].addEventListener("change", function () {
    var allChecked = true;

    for (var j = 0; j < checkboxesContacts.length; j++) {
      if (!checkboxesContacts[j].checked) {
        allChecked = false;
        break;
      }
    }

    selectAll.checked = allChecked;
  });
}
