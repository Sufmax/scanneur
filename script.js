// Cette fonction sera appelée dès qu'un fichier est sélectionné
function handleFileChange() {
    sendImage();  // Appeler directement la fonction pour envoyer l'image
}


async function sendImage() {
    let fileInput = document.getElementById("imageInput").files[0];
    if (!fileInput) return alert("Sélectionnez une image");
    
    document.getElementById("result").innerText = "⏳ Analyse en cours...";

    let formData = new FormData();
    formData.append("image", fileInput);

    try {
        let response = await fetch("https://scann-3cd7.onrender.com/upload", { 
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            },
            mode: "cors"  // Active le mode CORS
        });

        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);

        let data = await response.json();
        document.getElementById("result").innerText = `Résultat : ${data.result}`;
    } catch (error) {
        document.getElementById("result").innerText = `❌ Erreur : ${error.message}`;
    }
}
