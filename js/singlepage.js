function contentRoute() {
    changeActiveMenuItem();
    content = document.getElementById("content-block");
    console.log(location.hash);
    fragment = location.hash.substr(1);
    page = "../pages/" + fragment + ".html";
    console.log(page);
    fetch(page).then((res) => {
        if (res.ok) {
            console.log("Sikeres betöltés");
            res.text().then((html) => {
                content.innerHTML = html;
            })
        } else {
            throw new Error();
        }

    }).catch(() => console.log("sikertelen betöltés"));
}

if (!location.hash) {
    location.hash = "#home";

}

function changeActiveMenuItem(){
    navbar = document.getElementById("mainbar");
    elemek = navbar.getElementsByTagName("a");
    navbar.getElementsByClassName("active")[0].classList.remove("active");
    for (let e of elemek){
        href = e.getAttribute("href");
        if (href == location.hash){
            e.classList.add("active");
        }
    }
}
window.addEventListener("hashchange", contentRoute);
window.addEventListener("load", contentRoute);