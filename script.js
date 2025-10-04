document.addEventListener("DOMContentLoaded", function () {

    // Sélection des éléments HTML
    let colorBox = document.getElementById("color-box"); // Boîte de couleur
    let changeColorBtn = document.getElementById("change-color-btn"); // Bouton

    console.log("Éléments sélectionnés :");
    console.log("colorBox :", colorBox);
    console.log("changeColorBtn :", changeColorBtn);

    // Liste de couleurs prédéfinies
    let colors = [
        "#e74c3c",
        "#2ecc71", 
        "#3498db",
        "#f1c40f",
        "#9b59b6",
        "#e67e22",
        "#1abc9c",
        "#34495e"
    ];

    console.log("Liste des couleurs disponibles :", colors);

    // Événement : au clic sur le bouton
    changeColorBtn.addEventListener("click", function () {
        console.log("Bouton cliqué !");

        // On génère un index aléatoire
        let randomIndex = Math.floor(Math.random() * colors.length);

        // Boucle sur le tableau pour trouver la couleur correspondant à cet index
        for (let i = 0; i < colors.length; i++) {
            if (i === randomIndex) { // Quand l'index correspond
                console.log("Index trouvé :", i);
                console.log("Couleur choisie :", colors[i]);

                // On change la couleur de la boîte
                colorBox.style.backgroundColor = colors[i];
                console.log("Nouvelle couleur appliquée :", colors[i]);
            }
        }
    });

});
