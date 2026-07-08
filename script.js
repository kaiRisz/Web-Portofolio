document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbar a");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const isIndex = currentPath === "index.html" || currentPath === "";
    const activeHash = window.location.hash || "#home";

    navLinks.forEach(function (link) {
        let href = link.getAttribute("href");
        if (isIndex && href.startsWith("index.html#")) {
            href = `#${href.split("#")[1]}`;
            link.setAttribute("href", href);
        }

        if (isIndex && href === activeHash) {
            link.classList.add("nav-active");
        }
    });

    const form = document.querySelector("form");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        let valid = true;

        if (!nameInput.value.trim()) {
            alert("Nama tidak boleh kosong");
            valid = false;
        }

        if (!emailInput.value.includes("@")) {
            alert("Email tidak valid");
            valid = false;
        }

        if (messageInput.value.trim().length < 10) {
            alert("Pesan minimal 10 karakter");
            valid = false;
        }

        if (valid) {
            alert("Pesan berhasil dikirim");
            form.reset();
        }
    });
});
