export default class Nav {
  constructor() {}

  initRender(container) {
    const nav_tag = document.createElement("nav");
    nav_tag.classList.add("navbar");
    nav_tag.classList.add("navbar-expand-sm");
    nav_tag.classList.add("bg-body-secondary");
    nav_tag.classList.add("sticky-top");

    const container_div = document.createElement("div");
    container_div.classList.add("container");

    const link = document.createElement("a");
    link.classList.add("navbar-brand");
    link.classList.add("justify-content-center");
    // link.href = "#";
    link.addEventListener("click", this.gotoHome.bind(this));

    const logo_img = document.createElement("img");
    logo_img.src = "...";
    logo_img.alt = "Avatar Logo";
    logo_img.width = "40px";
    logo_img.classList.add("img-fluid");

    // add logo in container div
    link.appendChild(logo_img);
    container_div.appendChild(link);

    const navbar_toggler = `<button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>`;

  // add toggler in container div
    container_div += navbar_toggler;

    const links_div = document.createElement("div");
    

    <nav class="navbar navbar-expand-sm bg-body-secondary sticky-top">
      <div class="container">
        <!-- nav links -->
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav d-flex">
            <a class="nav-link" href="index.html">Home</a>
            <a class="nav-link" href="discount.html">Gallery</a>
            <a class="nav-link" href="Impact.html">Create</a>
          </div>
        </div>
        <!-- login button -->
        <a class="btn btn-outline-primary" href="login.html">login</a>
      </div>
    </nav>
  }

  checkLogin() {}

  gotoLogin() {}

  // goto other pages by links
  gotoHome() {}
  gotoGallery() {}
  gotoCreate() {}
}
