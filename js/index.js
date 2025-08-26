document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('username')) {
    window.location.href = "registration.html";
  }
});