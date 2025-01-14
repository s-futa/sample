// header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const mainVisual = document.querySelector(".main-visual");

  window.addEventListener("scroll", () => {
    if (window.scrollY > mainVisual.offsetHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// voice
let currentIndex = 1;
const items = document.querySelectorAll('.carousel-item');

function updateCarousel() {
  items.forEach((item, index) => {
    const position = (index - currentIndex + items.length) % items.length;

    // リセット
    item.classList.remove('active');
    item.querySelector('.carousel-info').classList.remove('show');
    item.querySelector('.carousel-spacer').classList.add('show');
    item.style.order = position;

    // 中央のアイテムをクローズアップ
    if (position === 1) {
      item.classList.add('active');
      item.querySelector('.carousel-info').classList.add('show');
      item.querySelector('.carousel-spacer').classList.remove('show');
    }
  });
}

// クリックイベントで移動
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    const position = (index - currentIndex + items.length) % items.length;

    if (position === 0) {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
    } else if (position === 2) {
      currentIndex = (currentIndex + 1) % items.length;
    }

    updateCarousel();
  });
});

updateCarousel();


// deco
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.deco1 , .deco2 , .deco-main-visual , .deco-main-visual2'); // 監視対象の要素

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
        observer.unobserve(entry.target); // 一度だけ発火したい場合は監視解除
      }
    });
  }, {
    root: null, // ビューポートを基準にする
    rootMargin: '0px', // オフセットなし
    threshold: 0.1 // 要素が10%表示されたら発火
  });

  targets.forEach(target => observer.observe(target));
});


// // deco 2
// document.addEventListener("DOMContentLoaded", () => {
//   const targets = document.querySelectorAll('.deco2'); // 監視対象の要素

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('is-show');
//         observer.unobserve(entry.target); // 一度だけ発火したい場合は監視解除
//       }
//     });
//   }, {
//     root: null, // ビューポートを基準にする
//     rootMargin: '0px', // オフセットなし
//     threshold: 0.1 // 要素が10%表示されたら発火
//   });

//   targets.forEach(target => observer.observe(target));
// });





// slide in
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.slide-in , .slide-in-l , .slide-in-r'); // 監視対象の要素
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // 一度だけ発火
      }
    });
  }, {
    root: null, // ビューポートを基準にする
    rootMargin: '0px', // オフセットなし
    threshold: 0.1 // 要素が10%表示されたら発火
  });

  targets.forEach(target => observer.observe(target));
});
