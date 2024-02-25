import { firestore } from "../app.js";
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import {
  collection,
  query,
  where,
  getDocs,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";

export default class History {
  constructor() {
    // add name for title
    document.getElementsByTagName("title")[0].innerHTML = "History";
    // get current user
    this.$currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // add style for head
    this.styleCSS(document.getElementsByTagName("head")[0]);
  }
  initRender(container) {
    // add nav in page
    if (!document.getElementsByTagName("nav").length) {
      const nav = new Nav();
      nav.initRender(container);
    }

    const container_div = document.createElement("div");
    container_div.style = "padding: 25px;";

    // Create the h2 element
    const h2 = document.createElement("h2");
    h2.textContent = "My order history";

    // Create the input element
    const input = document.createElement("input");
    input.type = "text";
    input.id = "myInput";
    input.onkeyup = this.searchByPhoneNumber.bind(this); // Replace this with your actual function definition
    input.placeholder = "Search for phone number..";
    input.title = "Type in a phone number";

    // Append the h2 and input elements to the container_div
    container_div.appendChild(h2);
    container_div.appendChild(input);

    // Create the table element
    const table = document.createElement("table");
    table.id = "myTable";
    table.style = "margin-bottom:30%;";

    // Create the header row
    const headerRow = document.createElement("tr");
    headerRow.classList.add("header");

    // Create the header cells
    const orderDate = document.createElement("th");
    orderDate.style.width = "15%";
    orderDate.textContent = "Order date";

    const orderName = document.createElement("th");
    orderName.textContent = "Order name";

    const phoneNum = document.createElement("th");
    phoneNum.textContent = "phone number";

    const address = document.createElement("th");
    address.style.width = "30%";
    address.textContent = "Address";

    const total = document.createElement("th");
    total.textContent = "Total";

    // Append the header cells to the header row
    headerRow.appendChild(orderDate);
    headerRow.appendChild(orderName);
    headerRow.appendChild(phoneNum);
    headerRow.appendChild(address);
    headerRow.appendChild(total);

    // Append the header row to the table
    table.appendChild(headerRow);

    // Append the table element to the container_div
    container_div.appendChild(table);

    container.appendChild(container_div);

    // add footer in page
    if (!document.getElementsByTagName("footer").length) {
      const footer = new Footer();
      footer.initRender(container);
    }
  }

  styleCSS(head_container) {
    const style = document.createElement("style");
    style.innerHTML = `  * {
      box-sizing: border-box;
    }

    #myInput {
      background-image: url("/css/searchicon.png");
      background-position: 10px 10px;
      background-repeat: no-repeat;
      width: 100%;
      font-size: 16px;
      padding: 12px 20px 12px 40px;
      border: 1px solid #ddd;
      margin-bottom: 12px;
    }

    #myTable {
      border-collapse: collapse;
      width: 100%;
      border: 1px solid #ddd;
      font-size: 18px;
    }

    #myTable th,
    #myTable td {
      text-align: left;
      padding: 12px;
    }

    #myTable tr {
      border-bottom: 1px solid #ddd;
    }

    #myTable tr.header,
    #myTable tr:hover {
      background-color: #f1f1f1;
    }`;

    head_container.appendChild(style);
  }

  async searchByPhoneNumber() {
    const input = document.getElementById("myInput").value;
    const table = document.getElementById("myTable");
    // Check if the conversion was successful or not
    if (isNaN(input)) {
      // The value is not a number
      alert("The input is not a number");
    } else {
      // search by firestore
      const q = query(
        collection(firestore, "orders"),
        where("phoneNum", "==", input)
      );

      const querySnapshot = await getDocs(q);
      // custom table (needs space between table and footer)
      if (querySnapshot.size < 5) {
        table.style = "margin-bottom:30%;";
      } else {
        table.style = "";
      }
      // add rows in table
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        // Create the data row
        const dataRow = document.createElement("tr");

        // Create the data cells
        const orderDate = document.createElement("td");
        orderDate.textContent = this.formatTimestamp(doc.data().created_at);

        const orderName = document.createElement("td");
        orderName.textContent = doc.data().orderName;

        const phoneNum = document.createElement("td");
        phoneNum.textContent = doc.data().phoneNum;

        const address = document.createElement("td");
        address.textContent = doc.data().address;

        const total = document.createElement("td");
        total.textContent = doc.data().total;

        // Append the data cells to the data row
        dataRow.appendChild(orderDate);
        dataRow.appendChild(orderName);
        dataRow.appendChild(phoneNum);
        dataRow.appendChild(address);
        dataRow.appendChild(total);

        // Append the data row to the table
        table.appendChild(dataRow);
      });
    }
  }
  // custom time format
  formatTimestamp(time) {
    const timestamp = new Timestamp(time.seconds, time.nanoseconds);
    console.log(timestamp);
    const date = new Date(timestamp.toDate().toDateString());
    console.log(date);
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }
}
