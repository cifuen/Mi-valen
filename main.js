import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <input type="password" class="form-control" id="exampleInputPassword1">
`;

setupCounter(document.querySelector("#counter"));
