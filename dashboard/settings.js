const menuBar = document.getElementById('menuBar');
const setting = document.getElementById('setting');
const header = document.getElementById('header');
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const closeBtn = document.getElementById('closeBtn');
const asideBar = document.getElementById('aside');
const getStarted = document.getElementById('getStarted');
const getStarted2 = document.getElementById('getStarted2');
const dashboard = document.getElementById('dashboard');
const dashboard2 = document.getElementById('dashboard2');

menuBar.addEventListener('click', () => {

    asideBar.style.display = "block";
    // asideBar.style.overflow = "hidden"; asideBar.style.transition = "5s
    // ease-in-out" asideBar.style.transition = "5s ease-in-out" header.style.filter
    // = "blur(8px)"
    header.style.display = "none"
    // main.style.filter = "blur(8px)"
    main.style.display = "none"
    // footer.style.filter = "blur(8px)"
    footer.style.display = "none"
})
closeBtn.addEventListener('click', () => {
    asideBar.style.display = "none";
    // header.style.filter = "none" main.style.filter = "none" footer.style.filter =
    // "none"
    header.style.display = "block"
    main.style.display = "block"
    footer.style.display = "flex"
});

// getStarted.addEventListener('click', () => {
// window.location.replace('./post.html'); });
// getStarted2.addEventListener('click', () => {
// window.location.replace('./post.html'); });
dashboard.addEventListener('click', () => {
    window.location.replace('./dashboard.html');

});
dashboard2.addEventListener('click', () => {
    window.location.replace('./dashboard.html');

});
    // alert("we are working")s