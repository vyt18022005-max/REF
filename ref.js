document.querySelectorAll(".photo-box").forEach(function(photo) {

    photo.addEventListener("click", function() {

        const image =
            photo.querySelector("img");

        if (!image) return;


        const viewer =
            document.createElement("div");

        viewer.className =
            "image-viewer";


        viewer.innerHTML = `
            <button class="viewer-close">×</button>
            <img src="${image.src}" alt="">
        `;


        document.body.appendChild(viewer);


        viewer.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === viewer ||
                    event.target.classList.contains(
                        "viewer-close"
                    )
                ) {

                    viewer.remove();

                }

            }
        );

    });

});