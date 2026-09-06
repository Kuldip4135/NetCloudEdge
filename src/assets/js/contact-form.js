/* Contact intake form: routes the visible fields off the "Who's asking" choice,
   honours a ?role= query param so service pages can link in with the right option
   pre-selected, acknowledges that arrival with a small "Continuing from" line, and
   on a valid submit swaps the panel for an in-place confirmation rather than
   navigating away. */
(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var roleInputs = form.querySelectorAll("[data-role-option]");
  var conditionalFields = form.querySelectorAll("[data-role-field]");
  var ackLine = document.querySelector("[data-role-ack]");
  var successPanel = document.querySelector("[data-contact-success]");

  // Presentational only — the "Continuing from · …" line under the lead.
  var ackLabels = {
    "job-seeker": "Job Placement",
    "employer": "Hiring",
    "training": "IT Training"
  };

  function selectedRole() {
    var checked = form.querySelector("[data-role-option]:checked");
    return checked ? checked.value : null;
  }

  function updateFields(animate) {
    var role = selectedRole();
    if (!role) return;

    conditionalFields.forEach(function (field) {
      var showFor = field.dataset.roleField.split(",");
      var hidden = showFor.indexOf(role) === -1;
      var wasHidden = field.classList.contains("hidden");
      field.classList.toggle("hidden", hidden);
      // A hidden field must not be submitted or focused by the validator.
      field.querySelectorAll("input, select, textarea").forEach(function (control) {
        control.disabled = hidden;
      });
      // Reveal the newly shown group with a short opacity + rise — only on an actual
      // role change, never on load, and never for a group that was already visible.
      if (animate && !hidden && wasHidden) {
        field.classList.remove("is-revealing");
        void field.offsetWidth; // restart the animation
        field.classList.add("is-revealing");
      }
    });
  }

  // Deep link: /contact/?role=employer arrives from the employer-facing CTAs.
  var requested = new URLSearchParams(window.location.search).get("role");
  if (requested) {
    roleInputs.forEach(function (input) {
      if (input.value === requested) input.checked = true;
    });
    if (ackLine && ackLabels[requested]) {
      ackLine.textContent = "Continuing from · " + ackLabels[requested];
      ackLine.hidden = false;
    }
  }

  roleInputs.forEach(function (input) {
    input.addEventListener("change", function () {
      updateFields(true);
    });
  });
  updateFields(false);

  form.addEventListener("submit", function (e) {
    var invalid = form.querySelector(":invalid");
    if (invalid) {
      e.preventDefault();
      invalid.reportValidity();
      invalid.focus();
      return;
    }
    // No inbound endpoint is wired yet (CONTACT-PAGE.md production gate); until one
    // is, keep the hand-off visible in place rather than reloading the page.
    if (successPanel) {
      e.preventDefault();
      form.hidden = true;
      successPanel.hidden = false;
      successPanel.setAttribute("tabindex", "-1");
      successPanel.focus();
      successPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
})();
