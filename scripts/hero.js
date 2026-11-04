// These image URLs give the hero a fresh, relevant photo on each page load.
const heroImages = [
  "https://images.unsplash.com/photo-1652972850590-4ccf8a99cf7f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://images.unsplash.com/photo-1586634101782-4e041ed32bc7?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://plus.unsplash.com/premium_photo-1679423807759-afb3c145c535?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  "https://plus.unsplash.com/premium_photo-1759165726241-baa579071e3a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  
];

// `document` represents the current webpage, and lets JavaScript find its elements.
// `querySelectorAll` finds every element that matches these CSS selectors.
const heroes = document.querySelectorAll(".hero, .report-hero");

// Pick one image at random and apply it to the hero present on this page.
const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];
// `forEach` runs this function once for each matching hero element.
heroes.forEach((hero) => {
  // `.style` lets JavaScript read or change an element's inline CSS styles.
  // `setProperty` sets a CSS property by name; here it sets a custom property used by CSS.
  hero.style.setProperty("--hero-image", `url("${randomImage}")`);
});