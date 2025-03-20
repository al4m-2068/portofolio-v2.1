// const navBarContent = document.getElementById("m-header-contents");
// const navBarContentSize = document.getElementById("m-header-contents").offsetWidth;
// const navBarButton = document.getElementById("m-header-button");
// document.getElementById("mobile-header").style.transform = `translateX(-${navBarContentSize})`;
// function openMobileNav() {
    
//     addEventListener ("click", function() {
//         if (navBarContent.style.transform = `translateX(-${navBarContentSize})`) {
//             navBarContent.style.transform = `translateX(${navBarContentSize})`
//         } else {
//             navBarContent.style.transform = `translateX(-${navBarContentSize})`
//         }
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const mobileHeader = document.getElementById("mobile-header");
//     const navBarContent = document.getElementById("m-header-contents");
//     const navBarButton = document.getElementById("m-header-button");

//     // Ambil ukuran lebar dari #m-header-contents
//     let navBarContentSize = navBarContent.offsetWidth;

//     // Pastikan ukuran benar-benar terbaca dengan memberi sedikit delay
//     setTimeout(() => {
//         navBarContentSize = navBarContent.offsetWidth;
//         mobileHeader.style.transform = `translateX(-${navBarContentSize}px)`;
//     }, 50);

//     mobileHeader.style.transition = "transform 0.3s ease-in-out"; // Animasi lebih smooth

//     function openMobileNav() {
//         const currentTransform = mobileHeader.style.transform;

//         if (currentTransform === `translateX(-${navBarContentSize}px)`) {
//             mobileHeader.style.transform = "translateX(0px)";
//         } else {
//             mobileHeader.style.transform = `translateX(-${navBarContentSize}px)`;
//         }
//     }

//     navBarButton.addEventListener("click", openMobileNav);
// });

// DIBANTUIN GPT >u<

document.addEventListener("DOMContentLoaded", () => {
    const mobileHeader = document.getElementById("mobile-header");
    const navBarContent = document.getElementById("m-header-contents");
    const navBarButton = document.getElementById("m-header-button");
    const menuItems = document.querySelectorAll("#m-header-contents a"); // Ambil semua item menu
    const body = document.body;

    // Tambahkan overlay ke body
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    // Ambil ukuran lebar dari #m-header-contents
    let navBarContentSize = navBarContent.offsetWidth;

    // Pastikan ukuran benar-benar terbaca dengan memberi sedikit delay
    setTimeout(() => {
        navBarContentSize = navBarContent.offsetWidth;
        mobileHeader.style.transform = `translateX(-${navBarContentSize}px)`;
    }, 50);

    mobileHeader.style.transition = "transform 0.3s ease-in-out"; // Animasi lebih smooth

    function openMobileNav() {
        const isOpen = mobileHeader.classList.contains("active");
    
        if (isOpen) {
            mobileHeader.classList.remove("active");
            mobileHeader.style.transform = `translateX(-${navBarContentSize}px)`;
            body.classList.remove("nav-open");
        } else {
            mobileHeader.classList.add("active");
            mobileHeader.style.transform = "translateX(0px)";
            body.classList.add("nav-open");
        }
    }

    function closeMobileNav() {
        mobileHeader.classList.remove("active"); // Hapus class 'active' biar tombol balik ke bentuk awal
        mobileHeader.style.transform = `translateX(-${navBarContentSize}px)`;
        body.classList.remove("nav-open");
    }

    // Tambahkan event listener ke tombol dan overlay
    navBarButton.addEventListener("click", openMobileNav);
    overlay.addEventListener("click", closeMobileNav);

    // Tambahkan event listener ke setiap item menu di dalam #m-header-contents
    menuItems.forEach((item) => {
        item.addEventListener("click", closeMobileNav);
    });
});