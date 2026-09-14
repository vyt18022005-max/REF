const refList = document.getElementById("refList");
const nextButton = document.getElementById("nextButton");
const progressBar = document.getElementById("progressBar");

const refPage = document.getElementById("refPage");
const refPageTitle = document.getElementById("refPageTitle");
const photoGrid = document.getElementById("photoGrid");
const backButton = document.getElementById("backButton");


/* =================================
   KÉO NGANG
================================= */

nextButton.addEventListener("click", () => {
    refList.scrollBy({
        left: 350,
        behavior: "smooth"
    });
});


/* =================================
   THANH PROGRESS
================================= */

function updateProgress() {

    const maxScroll =
        refList.scrollWidth - refList.clientWidth;

    if (maxScroll <= 0) {
        progressBar.style.width = "100%";
        return;
    }

    const percent =
        (refList.scrollLeft / maxScroll) * 100;

    progressBar.style.width =
        Math.max(15, percent) + "%";
}

refList.addEventListener("scroll", updateProgress);


/* =================================
   MỞ REF
================================= */

function openRef(number) {

    const refNumber =
        String(number).padStart(2, "0");

    console.log("Đã bấm REF:", refNumber);


    /* Đổi tiêu đề */

    refPageTitle.textContent =
        "REF " + refNumber;


    /* Xóa ảnh cũ */

    photoGrid.innerHTML = "";


    /* Tạo 8 ô ảnh */

    for (let i = 1; i <= 8; i++) {

        const photo = document.createElement("div");

        photo.className = "sample-photo";


        const img = document.createElement("img");

        img.src =
            `PIC/ref-${refNumber}-${String(i).padStart(2, "0")}.jpg`;

        img.alt = "";


        /*
            Nếu chưa có ảnh,
            vẫn giữ lại ô mẫu
        */

        img.onerror = function () {

            photo.classList.add("empty-photo");

            img.style.display = "none";

        };


        photo.appendChild(img);

        photoGrid.appendChild(photo);
    }


    /* Hiện trang REF */

    refPage.classList.add("show-ref");

}


/* =================================
   QUAY LẠI
================================= */

backButton.addEventListener("click", () => {

    refPage.classList.remove("show-ref");

});


/* =================================
   KÉO BẰNG CHUỘT
================================= */

let isDragging = false;
let startX = 0;
let startScroll = 0;


refList.addEventListener("pointerdown", (e) => {

    isDragging = true;

    startX = e.clientX;

    startScroll =
        refList.scrollLeft;

    refList.classList.add("dragging");

});


refList.addEventListener("pointermove", (e) => {

    if (!isDragging) return;

    const distance =
        e.clientX - startX;

    refList.scrollLeft =
        startScroll - distance;

});


refList.addEventListener("pointerup", () => {

    isDragging = false;

    refList.classList.remove("dragging");

});


refList.addEventListener("pointerleave", () => {

    isDragging = false;

    refList.classList.remove("dragging");

});


/* =================================
   KHỞI TẠO
================================= */

updateProgress();