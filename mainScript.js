document.querySelectorAll(".zybook-chapter-section-page, .zb-card-content .interactive-activity-container, .zybook-section, .static-container").forEach(el => {
    el.style.backgroundColor = "rgb(40, 40, 40)";
})

document.querySelectorAll(".animation-canvas, .console").forEach(el => {
    el.style.backgroundColor = "rgb(170, 170, 170)";
})


document.querySelectorAll(".code").forEach(el => {
    el.style.backgroundColor = "rgb(200, 190, 255)";
})

document.querySelectorAll(".good-practice").forEach(el => {
    el.style.color = "rgb(150, 150, 255)"
});

document.querySelectorAll(".term").forEach(el => {
    el.style.color = "rgb(255, 150, 100)"
});

document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, .label, pre, .text, li, .animation-text-object, .animation-caption, .static-container-title, label, pre, .activity-instructions, .instructions-div").forEach(el => {
    el.style.color = "white";
})

document.querySelectorAll(".animation-text-object").forEach(el => {
    el.style.color = "black";
})