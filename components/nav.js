import app from "../app.js";
import Create from "../pages/create.js";
import Gallery from "../pages/gallery.js";
import Home from "../pages/home.js";
import Login from "../pages/login.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

export default class Nav {
  constructor() {}

  initRender(container) {
    let nav_tag = document.createElement("nav");
    nav_tag.classList.add("navbar");
    nav_tag.classList.add("navbar-expand-sm");
    nav_tag.classList.add("index-nav");
    nav_tag.classList.add("sticky-top");

    const container_div = document.createElement("div");
    container_div.classList.add("container");

    const link = document.createElement("a");
    link.classList.add("navbar-brand");
    link.classList.add("justify-content-center");

    const logo_img = `<img
    src="assets/img/The Heritage.png"
    alt="Avatar Logo"
    style="height: 5vh"
    class="img-fluid"
  />`;

    // icon branding
    link.innerHTML += logo_img;
    container_div.appendChild(link);

    //collapsable toggle
    let navbar_toggler = `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>`;

    // add toggler in container div
    container_div.innerHTML += navbar_toggler;

    //nav links
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
    link_home.href = "#";
    link_home.addEventListener("click", this.gotoHome);

    const link_gallery = document.createElement("a");
    link_gallery.classList.add("nav-link");
    link_gallery.innerText = "Gallery";
    link_gallery.href = "#";
    link_gallery.addEventListener("click", this.gotoGallery.bind(this));

    const link_create = document.createElement("a");
    link_create.classList.add("nav-link");
    link_create.innerText = "Create";
    link_create.href = "#";
    link_create.addEventListener("click", this.gotoCreate);

    links_div.appendChild(link_home);
    links_div.appendChild(link_gallery);
    links_div.appendChild(link_create);

    collapse_div.appendChild(links_div);
    container_div.appendChild(collapse_div);

    // login button
    const login_btn = document.createElement("a");
    login_btn.classList.add("btn");
    login_btn.classList.add("btn-outline-primary");
    login_btn.id = "login-button";
    login_btn.innerText = "login";
    // login_btn.addEventListener("click", this.checkLogin);

    container_div.appendChild(login_btn);

    nav_tag.appendChild(container_div);

    // add nav in container (div app)
    container.appendChild(nav_tag);
    this.checkLogin();
  }

  checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const login_btn = document.querySelector("#login-button");

    if (currentUser) {
      login_btn.innerText = "Logout";
      login_btn.addEventListener("click", this.logout);
    } else {
      login_btn.innerText = "Login";
      login_btn.addEventListener("click", this.gotoLogin);
    }
  }

  logout() {
    // xoa storage
    localStorage.clear();
    // firebase logout
    const auth = getAuth(firebaseApp);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // goto home
        const home = new Home();
        app.changeActiveScreen(home);
      })
      .catch((error) => {
        // An error happened.
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  gotoLogin() {
    const login = new Login();
    app.changeActiveScreen(login);
  }
  // goto other pages by links
  gotoHome() {
    const home = new Home();
    app.changeActiveScreen(home);
  }
  gotoGallery() {
    const gallery = new Gallery();
    app.changeActiveScreen(gallery);
  }
  gotoCreate() {
    const create = new Create();
    app.changeActiveScreen(create);
  }
}
