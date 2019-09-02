var form = document.querySelector(".form");
var catName = form.querySelector(".input-field--cat-name");
var weight = form.querySelector(".input-field--weight");
var age = form.querySelector(".input-field--age");
var email = form.querySelector(".input-field--email");
var phone = form.querySelector(".input-field--phone");
var storage = localStorage.getItem("catName");
var storage = localStorage.getItem("weightField");
var storage = localStorage.getItem("age");
var storage = localStorage.getItem("email");
var storage = localStorage.getItem("phone");

var isStorageSupport = true;
  var storage = "";
  try {
    storage = localStorage.getItem("catName");
    storage = localStorage.getItem("weight");
    storage = localStorage.getItem("age");
    storage = localStorage.getItem("email");
    storage = localStorage.getItem("phone");
  }  catch (err) {
    isStorageSupport = false;
  }

form.addEventListener("submit", function (evt) {
  if (!catName.value || !age.value || !weight.value || !email.value || !phone.value) {
    evt.preventDefault();
    catName.classList.add("input__error");
    weight.classList.add("input__error");
    age.classList.add("input__error");
    email.classList.add("input__error");
    phone.classList.add("input__error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("catName", login.value);
      localStorage.setItem("weight", login.value);
      localStorage.setItem("age", login.value);
      localStorage.setItem("email", login.value);
      localStorage.setItem("phone", login.value);
    }
  }
});

function newFunction() {
  form.addEventListener("click", function (evt) {
    evt.preventDefault();
    name.focus();
  });
}
