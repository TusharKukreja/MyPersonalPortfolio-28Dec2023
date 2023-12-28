let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

// Preventing User from Right Clicking
window.addEventListener('contextmenu', function (e) { 
  e.preventDefault(); 
}, false);

// Preventing User to use shortcut keys
document.addEventListener("keydown", function(e){
  if(e.ctrlKey || e.keycode==123){
    e.stopPropagation();
    e.preventDefault();
  }
});

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
  
    // Formspree endpoint with your Formspree email
    const formSpreeEndpoint = "https://formspree.io/f/xoqgarkg";
  
    fetch(formSpreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        number,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Thank you for your message!");
        } else {
          alert("Oops! Something went wrong. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Modal dialog

  document.addEventListener("DOMContentLoaded", function() {
    var hireMeBtn = document.querySelector("a[href='#hire']");
    var modal = document.getElementById("myModal");
    var closeModalSpan = document.querySelector(".close");
  
    function openModal() {
      modal.style.display = "block";
    }
  
    function closeModal() {
      modal.style.display = "none";
    }
  
    hireMeBtn.addEventListener("click", function(event) {
      event.preventDefault();
      openModal();
    });
  
    closeModalSpan.onclick = function() {
      closeModal();
    };
  
    window.onclick = function(event) {
      if (event.target === modal) {
        closeModal();
      }
    };
  
    // Hide the modal initially
    closeModal();
  });
  
  
  