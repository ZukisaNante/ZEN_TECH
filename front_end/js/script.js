/*responsive navbar*/
function responsiveNav() {
    let respNav = document.getElementById("navLinksResponsive");
    if (respNav.className === "navLinks") {
        respNav.className += "responsive";
    } else {
        respNav.className = "navLinks";
    }
}