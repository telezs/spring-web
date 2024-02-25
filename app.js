import Home from "./pages/home.js";

class App {
  activeScreen;
  container;
  nav;
  main;

  constructor(container) {
    this.container = container;
  }

  changeActiveScreen(screen) {
    // todo
    if (this.activeScren == undefined) {
      this.container.innerHTML = "";
    }
    this.activeScreen = screen;
    this.activeScreen.initRender(this.container);
  }
}
const container = document.getElementsByTagName("body")[0];
const app = new App(container);

  // todo
  const home = new Home();
  app.changeActiveScreen(home);

//export instant của app chứ ko export class vì App là duy nhất
export default app;

// Init firebase app

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOd2bK7XwuJpXE-TDRkX-qACdZKZS551U",
  authDomain: "jsi03-blogweb.firebaseapp.com",
  databaseURL:
    "https://jsi03-blogweb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi03-blogweb",
  storageBucket: "jsi03-blogweb.appspot.com",
  messagingSenderId: "818746374260",
  appId: "1:818746374260:web:8ae613af33e5dc057ef921",
};

// du phong
// const firebaseConfig = {
//   apiKey: "AIzaSyB1CAx-CyP_GQM3FusEsLVPgyhaEw95Nec",
//   authDomain: "jsi03-blogweb-1b7b7.firebaseapp.com",
//   databaseURL: "https://jsi03-blogweb-1b7b7-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "jsi03-blogweb-1b7b7",
//   storageBucket: "jsi03-blogweb-1b7b7.appspot.com",
//   messagingSenderId: "643164779534",
//   appId: "1:643164779534:web:c17a8c18c285a9880c785f",
//   measurementId: "G-GJR7S7GWTL"
// };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
