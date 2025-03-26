async function sendImage() {
    let fileInput = document.getElementById("imageInput").files[0];
    if (!fileInput) return alert("Sélectionnez une image");

    let formData = new FormData();
    formData.append("image", fileInput);

    let response = await fetch("https://mon-api.onrender.com/upload", { // Remplace avec ton URL Render
        method: "POST",
        body: formData
    });

    let data = await response.json();
    document.getElementById("result").innerText = data.text;
}
