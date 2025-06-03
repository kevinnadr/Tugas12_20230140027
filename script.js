document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formPeminatan");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah submit default

    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const peminatanRadio = document.querySelector("input[name='peminatan']:checked");

    if (!nama || !nim || !peminatanRadio || !alamat) {
      errorMsg.textContent = "Semua kolom harus diisi.";
      return;
    }

    const peminatan = peminatanRadio.value;
    errorMsg.textContent = ""; // Clear error

    // Tampilkan hasil
    alert(
      `Data Berhasil Dikirim:\n\nNama: ${nama}\nNIM: ${nim}\nPeminatan: ${peminatan}\nAlamat: ${alamat}`
    );

    // Reset form (opsional)
    form.reset();
  });
});
