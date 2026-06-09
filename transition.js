document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".page-wrapper   ");
    setTimeout(() => {
        if (wrapper) wrapper.classList.add("is-visible");
    }, 50);
        if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const targetUrl = link.getAttribute("href");
            if (!targetUrl || targetUrl.startsWith("#") || link.target === "_blank" || targetUrl.startsWith("http")) {
                return; 
            }
            event.preventDefault();
            wrapper.classList.remove("is-visible");
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); 
        });
    });
});
