document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.querySelector('.main-navbar-toggle');
  var mobileNav = document.getElementById('mobile-nav-container');

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var isExpanded = mobileNav.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });
  }
});
