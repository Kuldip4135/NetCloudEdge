/* Contact intake form: routes the visible fields off the "I am a…" choice, honours a
   ?role= query param so service pages can link in with the right option pre-selected,
   and validates on submit. */
(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var roleInputs = form.querySelectorAll("[data-role-option]");
  var conditionalFields = form.querySelectorAll("[data-role-field]");

  function selectedRole() {
    var checked = form.querySelector("[data-role-option]:checked");
    return checked ? checked.value : null;
  }

  function updateFields() {
    var role = selectedRole();
    if (!role) return;

    conditionalFields.forEach(function (field) {
      var showFor = field.dataset.roleField.split(",");
      var hidden = showFor.indexOf(role) === -1;
      field.classList.toggle("hidden", hidden);
      // A hidden field must not be submitted or focused by the validator.
      field.querySelectorAll("input, select, textarea").forEach(function (control) {
        control.disabled = hidden;
      });
    });
  }

  // Deep link: /contact/?role=employer arrives from the employer-facing CTAs.
  var requested = new URLSearchParams(window.location.search).get("role");
  if (requested) {
    roleInputs.forEach(function (input) {
      if (input.value === requested) input.checked = true;
    });
  }

  roleInputs.forEach(function (input) {
    input.addEventListener("change", updateFields);
  });
  updateFields();

  form.addEventListener("submit", function (e) {
    var invalid = form.querySelector(":invalid");
    if (!invalid) return;
    e.preventDefault();
    invalid.reportValidity();
    invalid.focus();
  });
})();
