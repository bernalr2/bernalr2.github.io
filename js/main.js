// FAQ Accordion (NOT IN USE)
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of body
    groupBody.classList.toggle('open');

    // Close other open FAQ bodies
    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  let wasMenuOpen = false;
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const blurMenu = document.querySelector('.blur-menu');

  blurMenu.style.display = 'none';

  window.addEventListener('resize', function() {
    if (window.innerWidth > 670) {
      hamburgerButton.style.display = 'none';
      mobileMenu.style.display = 'none';
      blurMenu.style.display = 'none';
      document.body.style.overflow = 'auto';
    }


    else {
      hamburgerButton.style.display = 'block';
      mobileMenu.style.display = 'block';
      if (wasMenuOpen === true) {
        mobileMenu.classList.toggle('active');
        wasMenuOpen = !wasMenuOpen;
      }
    }
  });

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    wasMenuOpen = !wasMenuOpen;
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'auto';
      blurMenu.style.display = 'none';
    }
    else {
      document.body.style.overflow = 'hidden';
      blurMenu.style.display = 'block';
    }
  });
});

document.getElementById("contactBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("contact@ryanjbernal.com");
    contactBtn.innerHTML = '<i class="fa-solid fa-clipboard-check"></i> Copied to Clipboard!';
    contactBtn.style.backgroundColor = "";

    setTimeout(() => {
      contactBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Get in Contact';
      contactBtn.style.backgroundColor = "";
    }, 2000);
  } catch (err) {
    document.getElementById("contactBtn").textContent = "Failed to copy...";
    console.error(err);
  }
});
