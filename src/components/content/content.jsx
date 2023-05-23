import React from "react";
import Card from "../card/card";
import Card_1 from "../card/card-1";
import Card_2 from "../card/card-2";
import Photo1 from "../../assets/2.png";
import Photo2 from "../../assets/3.png";
import Photo3 from "../../assets/4.png";
import Photo4 from "../../assets/5.png";
import Photo5 from "../../assets/6.png";
import User from "../../assets/user.svg";
import Bridge from "../../assets/bridge.svg";
import Time from "../../assets/time.svg";
import Approved from "../../assets/approved.svg";

const content = () => {
  return (
    <div className="content">
      <div className="header">
        <h2>Jasa Kami</h2>
      </div>
      <div className="flex-container">
        <Card img={Photo1} content="Konsultasi" />
        <Card img={Photo2} content="Renovasi" />
        <Card img={Photo3} content="Fabrikasi dan Ereksi" />
      </div>
      <div className="header">
        <h2>Portofolio</h2>
      </div>
      <div className="flex-container">
        <Card img={Photo4} content="Pembangunan Jembatan Baja di Indonesia" />
        <Card img={Photo5} content="Pembangunan Jembatan Baja di Indonesia" />
      </div>
      <div className="header">
        <h2>Kenapa harus memilih kami?</h2>
      </div>
      <div className="flex-container">
        <Card_1 img={User} content="Tenaga Profesional" paragraph="Kami memiliki pekerja yang ahli dan peralatan yang memadai untuk menunjang setiap pekerjaan" />
        <Card_1 img={Bridge} content="Hasil Berkualitas" paragraph="Kami sangat memperhatikan kualitas pekerjaan kami, termasuk dalam pemilihan bahan material dan hasil akhir yang berkualitas" />
      </div>
      <div className="flex-container">
        <Card_1 img={Time} content="Tepat Waktu" paragraph="Setiap pekerjaan kami memiliki standar penyelesaian dan termanage dalam aplikasi manajemen proyek sehingga pekerjaan akan tepat waktu" />
        <Card_1 img={Approved} content="Spesialis" paragraph="Kami spesialis fabrikasi pada struktur baja crane, workshop, gudang dan jembatan" />
      </div>
      <div className="header">
        <h2>Proses Jasa Kontraktor kami</h2>
      </div>
      <div className="flex-container">
        <Card_2 number="1" content="Survey" paragraph="Hubungi kami untuk menjadwalkan survey lokasi yang akan dilakukan pekerjaan" />
        <Card_2 number="2" content="Konsultasi" paragraph="Konsultasikan kepada kami seperti apa bangunan yang ingin anda bangun" />
        <Card_2 number="3" content="RAB" paragraph="Kami akan mengolah data seluruh anggaran dan akan kami berikan kepada Anda dalam bentuk RAB." />
      </div>
      <div className="flex-container">
        <Card_2 number="4" content="Surat Kontrak Kerja" paragraph="Penandatanganan surat kontrak kerja dimana surat kontrak kerja berisi biaya, durasi, jadwal pembayaran, hak dan kewajiban antara kontraktor dan klien" />
        <Card_2 number="5" content="Pembayaran Bertahap" paragraph="Setelah Anda melakukan pembayaran tahap pertama ini, maka pekerjaan akan bisa dimulai" />
        <Card_2 number="6" content="Pekerjaan" paragraph="Setiap pekerjaan yang dilakukan akan sesuai dengan RAB yang telah disepakati bersama" />
      </div>
      <div className="flex-container">
        <Card_2 number="7" content="Addendum" paragraph="Jika ingin mengubah pekerjaan ditengah proyek, proses ini akan mencatat perubahan secara terpisah dari surat kontrak kerja" />
        <Card_2 number="8" content="Berita Acara" paragraph="Jika sudah menandatangi berita acara pekerjaan, berarti pekerjaan telah selesai dan anda sudah tidak bisa melakukan revisi pekerjaan" />
        <Card_2 number="9" content="Sertifikat Garansi Pekerjaan" paragraph="Kami akan berikan garansi pekerjaan selama 3 bulan sebagai bentuk kontrol kualitas pekerjaan agar tetap merasa aman dan nyaman" />
      </div>
    </div>
  )
}

export default content;