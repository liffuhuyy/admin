// Memuat sidebar ke dalam setiap halaman
document.addEventListener("DOMContentLoaded", function () {
    fetch("/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
        });
});

// Fungsi untuk membuka modal
function openModal(title) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal").style.display = "flex";
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Menangani form submit di modal
document.getElementById("modal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Data berhasil disimpan!");
    closeModal();
});
