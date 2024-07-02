import React from "react";
import contractor from "../../assets/1.png"
import Button from "../button/button";

const hero = () => {
  return (
    <div className="hero">
      <div className="grid-container">
        <div className="grid-item">
          <h2>PT. ANJANI JAYA</h2>
          <h1>Jasa Kontraktor Baja Profesional</h1>
          <p>Didukung oleh insinyur dengan pengalaman puluhan tahun merancang dan membuat jembatan baja dan kontruksi baja lainnya, kami siap untuk melayani dan membantu konsultasi baik dalam hal engineering maupun pelaksanaan di lapangan</p>
          <div className="button">
            <button className="b1"><span></span>Kirim Email</button>
            <button className="b2"><span></span>WhatsApp</button>
          </div>
        </div>
        <div className="grid-item">
          <div className="gambar">
            <img src={contractor} alt="ya" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default hero;