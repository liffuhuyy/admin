// Memuat sidebar ke dalam setiap halaman
document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html") // Pastikan path-nya sesuai
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
        })
        .catch(error => console.error("Gagal memuat sidebar:", error));
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
document.addEventListener("DOMContentLoaded", function () {
    const modalForm = document.getElementById("modal-form");
    if (modalForm) {
        modalForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Data berhasil disimpan!");
            closeModal();
        });
    }
});
