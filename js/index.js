console.log('Hello from the Home Page')

const form = document.querySelector('#contactForm')

async function sendData(){
  const formData = new FormData(form)

  try{
      const response = await fetch('https://formspree.io/f/xayrorvj', {
        method: "POST",
        body: formData,
        mode: "no-cors"
      })
  }catch(err){
    console.error(err.message)
  }
}

form.addEventListener("submit", (event)=>{
  event.preventDefault()
  sendData()
  form.reset()
  showToast("Thank you for for reaching out! I will get back to you as soon as I can", 3000)
})

function showToast(message, duration) {
  var toastContainer = document.getElementById("toast-container");
  toastContainer.innerText = message;
  toastContainer.style.display = "block";

  setTimeout(function() {
    toastContainer.style.display = "none";
  }, duration);
}