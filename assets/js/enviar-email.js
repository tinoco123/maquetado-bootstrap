var selectAll = document.getElementById("select-all")
var checkboxesContacts = document.querySelectorAll('.contactos .form-check-input')
console.log(checkboxesContacts);

selectAll.addEventListener('change', function() {
    var isChecked = selectAll.checked
    for (var i = 0; i < checkboxesContacts.length; i++) {
        checkboxesContacts[i].checked = isChecked;
    }
})

for (var i = 0; i < checkboxesContacts.length; i++) {
    checkboxesContacts[i].addEventListener('change', function() {
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