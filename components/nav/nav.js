export default class Nav {
  constructor() {
    
  }

  initRender(container) {
    let nav_tag = document.createElement("nav");
    nav_tag.classList.add("navbar");
    nav_tag.classList.add("navbar-expand-sm");
    nav_tag.classList.add("bg-body-secondary");
    nav_tag.classList.add("sticky-top");

    const container_div = document.createElement("div");
    container_div.classList.add("container");

    const link = document.createElement("a");
    link.classList.add("navbar-brand");
    link.classList.add("justify-content-center");
    link.addEventListener("click", this.gotoHome.bind(this));

    const logo_img = document.createElement("img");
    logo_img.src = "pictures/Untitled2.png";
    logo_img.alt = "Avatar Logo";
    logo_img.width = "40px";
    logo_img.classList.add("img-fluid");

    // add logo in container div
    link.appendChild(logo_img);
    container_div.appendChild(link);

    let navbar_toggler = `<button
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
    container_div.innerHTML += navbar_toggler;

    const collapse_div = document.createElement("div");
    collapse_div.classList.add("collapse");
    collapse_div.classList.add("navbar-collapse");
    collapse_div.classList.add("justify-content-center");
    collapse_div.id = "navbarNavAltMarkup";

    const links_div = document.createElement("div");
    links_div.classList.add("navbar-nav");
    links_div.classList.add("d-flex");

    const link_home = document.createElement("a");
    link_home.classList.add("nav-link");
    link_home.innerText = "Home";
    link_home.addEventListener("click", this.gotoHome.bind(this));

    const link_gallery = document.createElement("a");
    link_gallery.classList.add("nav-link");
    link_gallery.innerText = "Gallery";
    link_gallery.addEventListener("click", this.gotoGallery.bind(this));

    const link_create = document.createElement("a");
    link_create.classList.add("nav-link");
    link_create.innerText = "Create";
    link_create.addEventListener("click", this.gotoCreate.bind(this));

    links_div.appendChild(link_home);
    links_div.appendChild(link_gallery);
    links_div.appendChild(link_create);

    collapse_div.appendChild(links_div);
    container_div.appendChild(collapse_div);

    const login_btn = document.createElement("a");
    login_btn.classList.add("btn");
    login_btn.classList.add("btn-outline-primary");
    login_btn.innerText = "login";
    login_btn.addEventListener("click",this.gotoLogin.bind(this));

    container_div.appendChild(login_btn);

    nav_tag.appendChild(container_div);

    // add nav in container (div app)
    container.appendChild(nav_tag);
  }

  checkLogin() {}

  gotoLogin() {}

  // goto other pages by links
  gotoHome() {}
  gotoGallery() {}
  gotoCreate() {}
}
