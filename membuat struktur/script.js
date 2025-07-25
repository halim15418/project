document.addEventListener('DOMContentLoaded', () => {
    // Data untuk Struktur Kelas
    let strukturKelas = {
        'ketua-kelas': 'Abdul Halim Naufal Zaki',
        'wakil-ketua': 'Muhammad Al Auzai Rendiyanto',
        'sekretaris-1': 'Ahmad Airil Rizman',
        'sekretaris-2': 'Nicka Aulia',
        'bendahara-1': 'Wulan Muliana',
        'bendahara-2': 'Sofia'
    };

    // Data untuk Jadwal Piket
    let jadwalPiket = [
        { hari: 'Senin', anggota: ['Budi Santoso', 'Rina Wahyuni', 'Fajar'] },
        { hari: 'Selasa', anggota: ['Siti Aminah', 'Joko Susilo', 'Wati'] },
        { hari: 'Rabu', anggota: ['Dewi Lestari', 'Agus Permana', 'Doni'] },
        { hari: 'Kamis', anggota: ['Rani', 'Andi', 'Putri'] },
        { hari: 'Jumat', anggota: ['Yoga', 'Mega', 'Candra'] }
    ];

    // Fungsi untuk menampilkan struktur kelas
    function displayStrukturKelas() {
        for (const [id, nama] of Object.entries(strukturKelas)) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = nama;
            }
        }
    }

    // Fungsi untuk menampilkan jadwal piket
    function displayJadwalPiket(filterHari = 'semua') {
        const tabelBody = document.querySelector('#tabelPiket tbody');
        tabelBody.innerHTML = ''; // Kosongkan tabel sebelumnya

        const filteredJadwal = filterHari === 'semua' ? jadwalPiket : jadwalPiket.filter(jadwal => jadwal.hari === filterHari);

        if (filteredJadwal.length === 0 && filterHari !== 'semua') {
            const row = tabelBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 2;
            cell.textContent = jadwalPiket ;{filterHari};
            cell.style.textAlign = 'center';
            cell.style.fontStyle = 'italic';
        } else {
            filteredJadwal.forEach(data => {
                const row = tabelBody.insertRow();
                const cellHari = row.insertCell();
                const cellAnggota = row.insertCell();
                cellHari.textContent = data.hari;
                cellAnggota.textContent = data.anggota.join(', ');
            });
        }
    }

    // Inisialisasi tampilan
    displayStrukturKelas();
    displayJadwalPiket();

    // Event Listener untuk tombol Edit Struktur
    const editStrukturBtn = document.getElementById('editStrukturBtn');
    editStrukturBtn.addEventListener('click', () => {
        alert('Fitur edit struktur akan dikembangkan lebih lanjut. Untuk saat ini, Anda bisa mengubah data di file script.js secara manual.');
        // Di sini Anda bisa menambahkan modal atau form untuk mengedit struktur kelas
        // Contoh: prompt untuk mengubah nama ketua kelas
        // let newKetua = prompt('Masukkan nama Ketua Kelas yang baru:', strukturKelas['ketua-kelas']);
        // if (newKetua !== null) {
        //     strukturKelas['ketua-kelas'] = newKetua;
        //     displayStrukturKelas();
        // }
    });

    // Event Listener untuk tombol Edit Jadwal Piket
    const editPiketBtn = document.getElementById('editPiketBtn');
    editPiketBtn.addEventListener('click', () => {
        alert('Fitur edit jadwal piket akan dikembangkan lebih lanjut. Untuk saat ini, Anda bisa mengubah data di file script.js secara manual.');
        // Di sini Anda bisa menambahkan modal atau form untuk mengedit jadwal piket
    });

    // Event Listener untuk filter hari
    const hariFilter = document.getElementById('hariFilter');
    hariFilter.addEventListener('change', (event) => {
        displayJadwalPiket(event.target.value);
    });
});