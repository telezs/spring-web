export default class Carousel {
  constructor() {}

  initRender(container) {
    const carousel = `    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="assets/img/anh4-1702630292.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <img src="assets/img/fig-caption.png" alt="" style="width: 80vw; margin-bottom: 10rem;">
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/img/ao-dai-museum-5.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <img src="assets/img/fig-caption.png" alt="" style="width: 80vw; margin-bottom: 10rem;">
        </div>
      </div>
      <div class="carousel-item">
        <img src="assets/img/ao-dai-museum-2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <img src="assets/img/fig-caption.png" alt="" style="width: 80vw; margin-bottom: 10rem;">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  container.innerHTML += carousel;
  }
}
