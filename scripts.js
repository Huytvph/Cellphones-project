window.onscroll = function() {cpsHeader()};

var headerTop = document.getElementById("cpsHeader");

var stickey = header.offsetTop;

function cpsHeader(){
    if (window.pageYOffset > stickey) {
        header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
}
 
}

function changeColor(element){
    element.classList.add("active");
}
function initMap() {
    var location = {lat: 40.712776, lng: -74.005974};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }

//slide show pre top 
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     const slides = document.getElementsByClassName("slides")[0].getElementsByClassName("slide");
//     const dots = document.getElementsByClassName("dot");
//     const slideContents = document.getElementsByClassName("slide-content");
//     if (n > slides.length) {slideIndex = 1}

//     if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   for (i = 0; i < slideContents.length; i++) {
//     slideContents[i].classList.remove("active");
//   }
//   slides[slideIndex-1].style.display = "flex";
//   dots[slideIndex-1].className += " active";
//   slideContents[slideIndex-1].classList.add("active");
// }
//hàm sửa lỗi khi load lại trang ta bấm vào nút prev hoặc next thì lại khoogn hiển thị image-slide
function initSlideShow() {
  var slides = document.getElementsByClassName("slides")[0].getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slideIndex = 1;
  showSlides(slideIndex);
}
var slideIndex = 1;
var autoSlideInterval;

// Khởi tạo slide
showSlides(slideIndex);

// Tự động chuyển slide
autoSlide();

function plusSlides(n) {
    clearInterval(autoSlideInterval); // Dừng tự động chuyển slide khi người dùng tương tác
    showSlides(slideIndex += n);
    autoSlide(); // Khởi động lại tự động chuyển slide
}

function currentSlide(n) {
    clearInterval(autoSlideInterval); // Dừng tự động chuyển slide khi người dùng tương tác
    showSlides(slideIndex = n);
    autoSlide(); // Khởi động lại tự động chuyển slide
}

function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("slides")[0].getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    const slideContents = document.getElementsByClassName("slide-content");
    const slidePosition = document.querySelector(".slide-position");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < slideContents.length; i++) {
        slideContents[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    slidePosition.textContent = slideIndex + " / " + slides.length;
    slideContents[slideIndex-1].classList.add("active");

}
// Tự động chuyển slide sau mỗi  3giây
function autoSlide() {
    autoSlideInterval = setInterval(function() {
        plusSlides(1);
    }, 3000); 
}

// Thêm sự kiện click cho các slide-content
var slideContents = document.getElementsByClassName("slide-content");
for (var i = 0; i < slideContents.length; i++) {
    slideContents[i].addEventListener("click", function() {
        var index = Array.prototype.indexOf.call(this.parentNode.children, this);
        currentSlide(index + 1);
    });
}

window.onload = function() {
  showSlides(slideIndex);
  autoSlide();
};
///////////////////////////////////////////////////////////////////
//register js 
  
function validateForm() {
  var id = document.querySelector('input[name="ID"]').value;
  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var interests = document.querySelectorAll('input[name="interest"]:checked');
  var nationality = document.getElementById("nationality").value;
  var note = document.getElementById("note").value;

  var error = false;
  var errorMessage = "";

  // Kiểm tra mã sinh viên, họ tên và email không được để trống
  if (id.trim() === "") {
      setError(document.querySelector('input[name="ID"]'));
      error = true;
      errorMessage += "Vui lòng nhập mã sinh viên.\n \n";
  } else {
      removeError(document.querySelector('input[name="ID"]'));
  }

  if (name.trim() === "") {
      setError(document.querySelector('input[name="name"]'));
      error = true;
      errorMessage += "Vui lòng nhập họ và tên.\n \n";
  } else {
      removeError(document.querySelector('input[name="name"]'));
  }

  if (email.trim() === "") {
      setError(document.querySelector('input[name="email"]'));
      error = true;
      errorMessage += "Vui lòng nhập email.\n \n";
  } else {
      removeError(document.querySelector('input[name="email"]'));
  }

  // Kiểm tra định dạng email
  var emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
      setError(document.querySelector('input[name="email"]'));
      error = true;
      errorMessage += "Định dạng email không hợp lệ.\n \n";
  } else {
      removeError(document.querySelector('input[name="email"]'));
  }

  // Kiểm tra giới tính đã được chọn
  if (!gender) {
      error = true;
      errorMessage += "Vui lòng chọn giới tính.\n \n";
  }

  // Kiểm tra sở thích đã được chọn
  if (interests.length === 0) {
      error = true;
      errorMessage += "Vui lòng chọn ít nhất một sở thích.\n \n";
  }

  // Kiểm tra quốc tịch đã được chọn
  if (nationality === "nationality-choice") {
      error = true;
      errorMessage += "Vui lòng chọn quốc tịch.\n \n";
  }

  // Kiểm tra ghi chú có ít hơn 200 từ
  if (note.split(/\s+/).length > 200) {
      error = true;
      errorMessage += "Ghi chú không được vượt quá 200 từ.\n \n";
  }

  // Nếu có lỗi, hiển thị thông báo
  if (error) {
      displayModal(errorMessage);
      return false;
  }

  return true;
}

function setError(element) {
  element.classList.add("error");
}

function removeError(element) {
  element.classList.remove("error");
}

function displayModal(message) {
  var modal = document.getElementById("modal");
  var modalContent = document.getElementById("modalErrorMessage");
  modalContent.innerText = message;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}


//////////////////////////////////////////
//Login

