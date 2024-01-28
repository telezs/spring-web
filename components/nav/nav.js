import app, { firebaseApp } from "../../app.js";
import PostList from "../../pages/home/postlist.js";
import Login from "../../pages/login/login.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

class Nav {
    constructor() {}

    initRender(container) {
        let navbar = document.createElement("nav");
        navbar.classList.add("navbar");

        let container = document.createElement("div");
        container.classList.add("container");

        let logo =  document.createElement("img");
        logo.classList.add("")
        
  
}}