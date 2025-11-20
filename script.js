$(document).ready(function () {

  // Mobile Menu Toggle
  const $hamburger = $("#hamburger");
  const $mobileMenu = $("#mobileMenu");

  $hamburger.on("click", function () {
    $(this).toggleClass("active");
    $mobileMenu.toggleClass("active");
  });

  // Tutup kalau klik luar menu
  $mobileMenu.on("click", function (e) {
    if (e.target === this) {
      $hamburger.removeClass("active");
      $mobileMenu.removeClass("active");
    }
  });

  // Dropdown di mobile
  $(".mobile-dropdown .dropdown-toggle").on("click", function (e) {
    e.preventDefault();
    const $parentLi = $(this).parent();                    
    const $menu = $(this).next(".mobile-dropdown-menu");
    const $icon = $(this).find(".material-symbols-outlined");

    $parentLi.toggleClass("active");                       
    $menu.toggleClass("active");
    $icon.text($menu.hasClass("active") ? "expand_less" : "expand_more");
  });
  // end dropdown mobile

  // Header Scroll Effect
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });

  // Best Seller Carousel (FULL JQUERY + GAMBAR PASTI MUNCUL)
  const $carousel = $("#carousel");
  const $container = $("#carousel"); 

  const products = [
    { title: "Und Green",     price: 410, img: "assets/product/1.jpg" },
    { title: "Und Chair",     price: 329, img: "assets/product/2.jpg" },
    { title: "Und Orange",    price: 403, img: "assets/product/3.jpg" },
    { title: "Wooden Table",  price: 387, img: "assets/product/4.jpg" },
    { title: "Und Black",     price: 398, img: "assets/product/5.jpg" },
    { title: "Minimal Sofa",  price: 449, img: "assets/product/1.jpg" },
    { title: "Cozy Armchair", price: 379, img: "assets/product/2.jpg" },
    { title: "Nordic Bench",  price: 520, img: "assets/product/3.jpg" }
  ];

  // Generate semua card
  products.forEach(function (p, i) {
    $carousel.append(`
      <div class="product-card">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="product-info">
          <span class="price-tag">$${p.price}</span>
          <h3>${p.title}</h3>
        </div>
      </div>
    `);
  });

  // Fade-in bertahap
  $(".product-card").hide().each(function (i) {
    $(this).delay(120 * i).fadeIn(600);
  });

  // Navigasi carousel (prev & next)
  $("#nextBtn").on("click", function () {
    $container[0].scrollBy({ left: 304, behavior: "smooth" }); // 280 + 24 gap
  });

  $("#prevBtn").on("click", function () {
    $container[0].scrollBy({ left: -304, behavior: "smooth" });
  });

  // Categories Accordion / Highlight
  $(".category-item").on("click", function () {
    const $this = $(this);

    if ($this.hasClass("room")) {
      $this.removeClass("room");
      $this.find(".category-description").slideUp(300);
    } else {
      $(".category-item").removeClass("room");
      $(".category-description").slideUp(300);

      $this.addClass("room");
      $this.find(".category-description").slideDown(300);
    }
  });

  // Hover effect kecil
  $(".category-item").hover(
    function () {
      if (!$(this).hasClass("room")) {
        $(this).css("transform", "translateX(6px)");
      }
    },
    function () {
      $(this).css("transform", "translateX(0)");
    }
  );

  // Email Form Submission (Limited Deals)
  $(".email-form").on("submit", function (e) {
    e.preventDefault();

    const email = $(this).find(".email-input").val().trim();

    if (!email || !email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Thank you! You’ll get 10% off on your first purchase.");
    $(this)[0].reset();
  });

});