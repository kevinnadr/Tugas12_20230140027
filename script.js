document.addEventListener('DOMContentLoaded', () => {
  const formPeminatan = document.getElementById('formPeminatan');
  const outputContainer = document.getElementById('outputContainer');
  const outputNama = document.getElementById('outputNama');
  const outputNim = document.getElementById('outputNim');
  const outputAngkatan = document.getElementById('outputAngkatan');
  const outputTanggalDaftar = document.getElementById('outputTanggalDaftar');
  const outputPeminatan = document.getElementById('outputPeminatan');
  const outputAlamat = document.getElementById('outputAlamat');

  formPeminatan.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const nim = document.getElementById('nim').value.trim();
    const angkatan = document.getElementById('angkatan').value;
    const tanggalDaftar = document.getElementById('tanggalDaftar').value;
    const alamat = document.getElementById('alamat').value.trim();
    const selectedPeminatan = document.querySelector('input[name="peminatan"]:checked');

    // Validasi input
    if (!nama || !nim || !angkatan || !tanggalDaftar || !alamat || !selectedPeminatan) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops!',
        text: 'Semua kolom harus diisi!',
        confirmButtonColor: '#6366f1'
      });
      outputContainer.style.display = 'none';
      return;
    }

    if (!/^\d{11}$/.test(nim)) {
      Swal.fire({
        icon: 'error',
        title: 'Format NIM Salah!',
        text: 'NIM harus berupa 11 digit angka.',
        confirmButtonColor: '#6366f1'
      });
      outputContainer.style.display = 'none';
      return;
    }

    // Jika validasi sukses
    outputNama.textContent = nama;
    outputNim.textContent = nim;
    outputAngkatan.textContent = angkatan;
    outputTanggalDaftar.textContent = tanggalDaftar;
    outputPeminatan.textContent = selectedPeminatan.value;
    outputAlamat.textContent = alamat;

    outputContainer.style.display = 'block';

    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: 'Data pendaftaran berhasil ditampilkan.',
      timer: 1500,
      showConfirmButton: false
    });

    // Opsional: Reset form setelah submit
    // formPeminatan.reset();
  });
});
