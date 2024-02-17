import app, { firebaseApp, firestore } from "../app.js";
import Login from "./login.js";
import {
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
export default class Signup {
  constructor() {
    document.getElementsByTagName("head")[0].innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Heritage</title>
    <!-- cdn for plugins and extensions -->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <!-- icon branding -->
  <link rel="shortcut icon" href="pictures/Untitled2.png">
`;
  }
  initRender(container) {
    const container_login = document.createElement("div");
    container_login.classList.add("container");
    container_login.classList.add("login");

    // row
    const row = document.createElement("div");
    row.classList.add("row");

    //col1
    let col1 = document.createElement("div");
    col1.classList.add("col-sm-8");
    col1.classList.add("signin-text");
    col1.style = "margin-top: 25vh;";
    col1.innerHTML += `<h1 class="my-5 display-3 fw-bold ls-tight">
    Lorem Ipsum <br />
    <span class="text-primary">Dolor Sit Amet</span>
  </h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
    itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
    at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
    aliquid ipsum atque?
  </p>`;
    row.appendChild(col1);

    //col2
    const col2 = document.createElement("div");
    col2.classList.add("col-sm-4");
    col2.classList.add("login-form");
    col2.style = "margin-top: 30vh;";

    // form
    const card = document.createElement("div");
    card.classList.add("card");
    const card_body = document.createElement("div");
    card_body.classList.add("card-body");

    // username input
    const form_floating1 = document.createElement("div");
    form_floating1.classList.add("form-floating");
    form_floating1.classList.add("mb-3");

    const form_outline1 = document.createElement("div");
    form_outline1.classList.add("form-outline");
    form_outline1.classList.add("mb-4");

    const input_username = document.createElement("input");
    input_username.type = "text";
    input_username.id = "username";
    input_username.classList.add("form-control");

    const label_username = document.createElement("label");
    label_username.setAttribute("for", "username");
    label_username.innerText = "Username";
    label_username.classList.add("form-label");

    form_outline1.appendChild(input_username);
    form_outline1.appendChild(label_username);
    form_floating1.appendChild(form_outline1);
    card_body.appendChild(form_floating1);

    // email input
    const form_floating = document.createElement("div");
    form_floating.classList.add("form-floating");
    form_floating.classList.add("mb-3");

    const form_outline = document.createElement("div");
    form_outline.classList.add("form-outline");
    form_outline.classList.add("mb-4");

    const input_email = document.createElement("input");
    input_email.type = "email";
    input_email.id = "email";
    input_email.classList.add("form-control");

    const label_email = document.createElement("label");
    label_email.setAttribute("for", "email");
    label_email.innerText = "Email";
    label_email.classList.add("form-label");

    form_outline.appendChild(input_email);
    form_outline.appendChild(label_email);
    form_floating.appendChild(form_outline);
    card_body.appendChild(form_floating);

    //password input
    const form_floating_1 = document.createElement("div");
    form_floating_1.classList.add("form-floating");
    form_floating_1.classList.add("mb-3");

    const form_outline_1 = document.createElement("div");
    form_outline_1.classList.add("form-outline");
    form_outline_1.classList.add("mb-4");

    const input_pass = document.createElement("input");
    input_pass.type = "password";
    input_pass.id = "password";
    input_pass.classList.add("form-control");

    const label_pass = document.createElement("label");
    label_pass.setAttribute("for", "password");
    label_pass.innerText = "Password";
    label_pass.classList.add("form-label");

    form_outline_1.appendChild(input_pass);
    form_outline_1.appendChild(label_pass);
    form_floating_1.appendChild(form_outline_1);
    card_body.appendChild(form_floating_1);

    //submit btn
    const submit_btn = document.createElement("a");
    submit_btn.type = "submit";
    submit_btn.classList.add("btn");
    submit_btn.classList.add("btn-primary");
    submit_btn.classList.add("d-block");
    submit_btn.classList.add("mb-4");
    submit_btn.classList.add("login-btn");
    submit_btn.innerText = "Signup";
    submit_btn.addEventListener("click", this.signup.bind(this));

    card_body.appendChild(submit_btn);
    // signup link
    const signup_link = document.createElement("a");
    signup_link.classList.add("signup-href");
    signup_link.innerText = "Login here";
    signup_link.addEventListener("click", this.gotoLogin.bind(this));

    card_body.appendChild(signup_link);

    card.appendChild(card_body);
    col2.appendChild(card);
    row.appendChild(col2);

    container_login.appendChild(row);
    container.appendChild(container_login);
  }

  signup(e) {
    e.preventDefault();
    // get data from input (login form)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    // validate form
    if (!email || !password || !username) {
      alert("You need to fill this form");
    } else {
      // create account on Firebase
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          set(ref(firestore, "users/" + user.uid), {
            displayName: username,
            email: email,
          });

          localStorage.setItem("currentUser", JSON.stringify(user));
          alert("Success");
          //gotohome
          const login = new Home();
          app.changeActiveScreen(login);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }
  gotoLogin() {
    const login = new Login();
    app.changeActiveScreen(login);
  }
}
