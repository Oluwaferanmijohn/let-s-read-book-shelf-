const menuBar = document.getElementById('menuBar');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const closeBtn = document.getElementById('closeBtn');
const asideBar = document.getElementById('aside');


menuBar.addEventListener('click', function () {
    asideBar.style.display = "block";
    asideBar.style.transition = "5s ease-in-out"
    header.style.filter = "blur(8px)"
    main.style.filter = "blur(8px)"
    footer.style.filter = "blur(8px)"
})
closeBtn.addEventListener('click', function () {
    asideBar.style.display = "none";
    header.style.filter = "none"
    main.style.filter = "none"
    footer.style.filter = "none"
});


// alert("we are working")