import { getHtml, possibleHash } from "./router.js";

const app = document.querySelector("#app");
let auth; // instance of Auth, which will be created in login view

document.addEventListener("DOMContentLoaded", () => {
  changePage("landing");
})

window.addEventListener("hashchange", changePage);

async function changePage(location) {
  let viewName = window.location.hash.split("#")[1];
  if (typeof location === "string") viewName = location;
  if (!possibleHash.includes(viewName)) return;

  switch (viewName) {
    case "location": {
      app.innerHTML = await getHtml("landing");
      document.getElementById("location").scrollIntoView({
        behavior: "smooth"
      });
      break;
    }
    case "login": {
      app.innerHTML = await getHtml(viewName);
      auth = new Auth({
        loginBtn: document.querySelector(".login-btn"),
        registerBtn: document.querySelector(".register-btn"),
        form: document.forms.login,
        errorField: document.querySelector(".error-field"),
      });
      break;
    }
    case "profile": {
      app.innerHTML = await getHtml(viewName);
      auth.setLogoutBtn(document.querySelector(".logout-btn"));
      break;
    }
    case "about":
    case "blog":
    case "cats":
    case "dogs":
    case "responses":
    default: {
      app.innerHTML = await getHtml(viewName);
    }
  }
}