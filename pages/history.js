import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import modal from "../components/history-modal.js";
import Home from "./home.js";
import Checkout from "./checkout.js";
import app from "../app.js";
import {
  collection,
  addDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";

export default class history {
    constructor(){
         // add name for title
    document.getElementsByTagName("title")[0].innerHTML = "History";
    // get current user
    this.$currentUser = JSON.parse(localStorage.getItem("currentUser"));

    }
    initRender(container) {
        // add nav in page
        if (!document.getElementsByTagName("nav").length) {
          const nav = new Nav();
          nav.initRender(container);
        }
        const container_fluid = document.createElement("div");
        container_fluid.id = history;

        const modal_btn = document.createElement("button");
        modal_btn.classList.add("btn");
        modal_btn.classList.add("btn-primary");
        modal_btn.classList.add("launch");
        modal_btn.classList.add("mx-auto");
        modal_btn.type = "button";
        modal_btn.innerText = "Get information";

        const modal = document.createElement("div")
        modal.id = "staticBackdrop";
        modal.classList.add("modal");
        modal.classList.add("fade");

        const modal_dialog = document.createElement("div")
        modal_dialog.classList.add("modal-dialog");

        const modal_content = document.createElement("div")
        modal_content.classList.add("modal-content");

        const modal_body = document.createElement("div")
        modal_body.classList.add("modal-body");

        const text_right = document.createElement("div")
        text_right.classList.add("text-right");
        text_right.innerHTML = ` <i class="fa fa-close close" data-dismiss="modal"></i>`;

        container_fluid.appendChild(modal-btn);
        modal-btn.appendChild(modal);
        modal.appendChild(modal-dialog);
        modal-dialog.appendChild(modal-content);
        modal-content.appendChild(modal-body);
        modal-body.appendChild(text-right);

        const container_fluid1 = document.createElement("div");
        container_fluid1.id = "history-modal";
        // add carousel object in div
        const modal = new modal();
        modal.initRender(container_fluid1);



        
    }

}