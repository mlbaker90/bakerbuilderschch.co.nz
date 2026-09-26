// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
});

// Contact form submission (opens the visitor's email client until a backend endpoint exists)
function handleContactSubmit(e) {
  e.preventDefault();
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent(`Quote Request from ${fname} ${lname}`);
  const body = encodeURIComponent(
    `Name: ${fname} ${lname}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
  );
  window.location.href = `mailto:info@bakerbuilderschch.co.nz?subject=${subject}&body=${body}`;
}
