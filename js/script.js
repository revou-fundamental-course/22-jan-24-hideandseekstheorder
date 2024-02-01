var slideIndex = 1;

function showBanner(n) {
  var i;
  var x = document.getElementsByClassName("gambar-belanjaan");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
function plusIndex(n) {
  showBanner((slideIndex += n));
}

showBanner(slideIndex);

setInterval(() => {
  plusIndex(1);
}, 2000);

function validateInput() {
  const inputName = document.getElementById("in-name").value;
  const inputEmail = document.getElementById("in-email").value;
  const inputInterest = document.getElementById("in-interest").value;

  if (inputEmail == "" && inputInterest == "" && inputName == "") {
    document.getElementById("error-message").innerHTML =
      "Nama, email, dan ketertarikan tidak boleh kosong";
  } else if (inputEmail == "" && inputInterest == "") {
    document.getElementById("error-message").innerHTML =
      "Email dan ketertarikan tidak boleh kosong";
  } else if (inputInterest == "" && inputName == "") {
    document.getElementById("error-message").innerHTML =
      "Nama dan ketertarikan tidak boleh kosong";
  } else if (inputEmail == "" && inputName == "") {
    document.getElementById("error-message").innerHTML =
      "Nama dan email tidak boleh kosong";
  } else if (inputEmail == "") {
    document.getElementById("error-message").innerHTML =
      "Email tidak boleh kosong";
  } else if (inputInterest == "") {
    document.getElementById("error-message").innerHTML =
      "Ketertarikan tidak boleh kosong";
  } else if (inputEmail == "") {
    document.getElementById("error-message").innerHTML =
      "Nama tidak boleh kosong";
  } else {
    document.getElementById("error-message").innerHTML =
      "Terima kasih. Sales kami akan segera menghubungi anda";
    document.getElementById("error-message").style.color = "black";
  }
}

document.getElementById("submit-button").addEventListener("click", function () {
  validateInput();
});
