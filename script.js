 
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");

    logo.addEventListener("mouseenter", function () {
        const tooltip = document.createElement("span");
        tooltip.innerText = "Passionnée par le développement web et la cybersécurité 🚀";
        tooltip.classList.add("tooltip");
        logo.appendChild(tooltip);
    });

    logo.addEventListener("mouseleave", function () {
        const tooltip = document.querySelector(".tooltip");
        if (tooltip) {
            tooltip.remove();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const text = '"Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme." - Winston Churchill';
    let index = 0;
    const quoteElement = document.querySelector(".quote");
    quoteElement.innerHTML = "";

    function typeEffect() {
        if (index < text.length) {
            quoteElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
});
