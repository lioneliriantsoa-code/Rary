
document.addEventListener("DOMContentLoaded", () => {
    const bouton = document.getElementById("openMessage");
    const overlay = document.getElementById("modalOverlay");
    const fermer = document.getElementById("close");

    console.log("Script messagerie chargé");
    console.log({ bouton, overlay, fermer });

    if (!bouton || !overlay || !fermer) {
        console.error("Erreur : un élément HTML est introuvable.");
        return;
    }

    bouton.addEventListener("click", (event) => {
        event.preventDefault();
        overlay.style.display = "flex";
        console.log("Bouton messagerie cliqué");
    });

    fermer.addEventListener("click", () => {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            overlay.style.display = "none";
        }
    });
});
