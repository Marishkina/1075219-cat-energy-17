var form = document.querySelector(".form");
var name = form.querySelector(".input-field--name");
var weight = form.querySelector(".input-field--weight");
var age = form.querySelector(".input-field--age");
var email = form.querySelector(".input-field--email");
var phone = form.querySelector(".input-field--phone");
var storage = localStorage.getItem("name");
var storage = localStorage.getItem("weight");
var storage = localStorage.getItem("age");
var storage = localStorage.getItem("email");
var storage = localStorage.getItem("phone");

var isStorageSupport = true;
  var storage = "";
  try {
    storage = localStorage.getItem("name");
    storage = localStorage.getItem("weight");
    storage = localStorage.getItem("age");
    storage = localStorage.getItem("email");
    storage = localStorage.getItem("phone");
  }  catch (err) {
    isStorageSupport = false;
  }

// form.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   name.focus();
// });

form.addEventListener("submit", function (evt) {
  if (!name.value || !age.value || !weight.value || !email.value || !phone.value) {
    evt.preventDefault();
    name.classList.add("input__error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", login.value);
      localStorage.setItem("weight", login.value);
      localStorage.setItem("age", login.value);
      localStorage.setItem("email", login.value);
      localStorage.setItem("phone", login.value);
    }
  }
});
