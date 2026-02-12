const scriptURL = 'URL_APPS_SCRIPT_ANDA'; 
const DURASI_DETIK = 5400; 

let timerAktif = false;
let intervalTimer;
let jumlahPelanggaran = parseInt(localStorage.getItem('pelanggaran_count')) || 0;
let logPelanggaran = localStorage.getItem('pelanggaran_log') || "";
let deviceID = localStorage.getItem('student_device_id') || ('DEV-' + Math.random().toString(36).substr(2, 9).toUpperCase());

localStorage.setItem('student_device_id', deviceID);

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('exam_submitted') === 'true') {
        tampilkanSudahSubmit();
        return;
    }

    if (localStorage.getItem('exam_active') === 'true') {
        mulaiUjian(true); 
    }

    // Auto-save input
    document.querySelectorAll('.save-input').forEach(input => {
        input.value = localStorage.getItem('save_' + input.id) || "";
        input.addEventListener('input', (e) => {
            localStorage.setItem('save_' + e.target.id, e.target.value);
            e.target.closest('.question').classList.remove('invalid-question');
        });
    });

    gambarGrafikSoal3();
});

function mulaiUjian(isResume = false) {
    const nama = document.getElementById('nama-siswa').value.trim();
    const kelas = document.getElementById('kelas-siswa').value;
    const pakta = document.getElementById('pakta').checked;

    if (!isResume && (!nama || !kelas || !pakta)) {
        alert("Lengkapi identitas dan setujui pakta integritas!"); 
        return;
    }

    if (!isResume) {
        localStorage.setItem('exam_active', 'true');
        localStorage.setItem('siswa_nama', nama);
        localStorage.setItem('siswa_kelas', kelas);
        localStorage.setItem('exam_start_time', Math.floor(Date.now() / 1000));
    }

    const startTime = parseInt(localStorage.getItem('exam_start_time'));
    
    document.getElementById('display-info').innerText = `Peserta: ${localStorage.getItem('siswa_nama')} (${localStorage.getItem('siswa_kelas')})`;
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('exam-page').style.display = 'block';
    
    timerAktif = true;
    proteksiLayar();
    jalankanTimer(startTime);
}

function jalankanTimer(startTime) {
    const timerDisplay = document.getElementById('time');
    
    intervalTimer = setInterval(() => {
        const sekarang = Math.floor(Date.now() / 1000);
        const sisa = DURASI_DETIK - (sekarang - startTime);

        if (sisa <= 0) {
            clearInterval(intervalTimer);
            alert("Waktu Habis!");
            kirimData();
        } else {
            const h = Math.floor(sisa / 3600);
            const m = Math.floor((sisa % 3600) / 60);
            const s = sisa % 60;
            timerDisplay.innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        }
    }, 1000);
}

// Fungsi proteksi dan pendukung lainnya tetap sama...
// Pastikan fungsi kirimData() menggunakan variabel scriptURL yang benar.