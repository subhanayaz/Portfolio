
//  Change Navbar Color on scroll 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "white";
    }
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent";

    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwx9W0jdO665WBb4hFjOgcunBl-M58axnd0_UuCj1evUDnJ8_YZSpOM3LfJL9BuFUhEiw/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting..! Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})
