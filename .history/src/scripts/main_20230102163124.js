function readMore () {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if(dots.style.display ===  "none") {
        dots.style.display ===  "block";
        btn.innerHTML=== "Скрыть";
        more.style.display === "none";
    } else {
        dots.style.display ===  "none";
        btn.innerHTML === "Подробнее";
        more.style.display === "block";
    }
}

readMore()

export default readMore;