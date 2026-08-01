(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var roleInputs = form.querySelectorAll("[data-role-option]");
  var conditionalFields = form.querySelectorAll("[data-role-field]");

  function updateFields() {
    var selected = form.querySelector("[data-role-option]:checked");
    if (!selected) return;
    var role = selected.value;

    conditionalFields.forEach(function (field) {
      var showFor = field.dataset.roleField.split(",");
      field.classList.toggle("hidden", showFor.indexOf(role) === -1);
    });
  }

  roleInputs.forEach(function (input) {
    input.addEventListener("change", updateFields);
  });
  updateFields();

  form.addEventListener("submit", function (e) {
    var invalid = form.querySelector(":invalid");
    if (invalid) {
      e.preventDefault();
      invalid.reportValidity();
      invalid.focus();
    }
  });
})();
