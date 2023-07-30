export function readMore(span) {
    var id = document.getElementById(span);
    if (id.style.display === "inline") {
        id.style.display = "none";
    } else {
        id.style.display = "inline";
    }
    console.log(id.style.display);
}