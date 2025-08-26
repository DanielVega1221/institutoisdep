import React from "react";
import "./Minicard.css";

import logo from "../../assets/Logo1.png";
import cardmini1 from "../../assets/cardmini1.png";
import cardmini2 from "../../assets/cardmini2.png";
import cardmini3 from "../../assets/cardmini3.png";

const MiniCard = () => (
	<section className="minicard-bg">
		<div className="minicard-content">
			<img src={logo} alt="ISDEP Logo" className="minicard-logo" />
			<div className="minicard-subtitle">FORMACIÓN PROFESIONAL</div>
			<div className="minicard-banner">CARRERAS A DISTANCIA</div>
			<div className="minicard-list">
						<div className="minicard-row">
							<span className="minicard-icon">
								<img src={cardmini1} alt="Psic/grafología" className="minicard-imgicon" />
							</span>
							<span className="minicard-row-title">PERITO EN PSICOGRAFOLOGIA</span>
						</div>
						<div className="minicard-row">
							<span className="minicard-icon">
								<img src={cardmini2} alt="Grafología Forense" className="minicard-imgicon" />
							</span>
							<span className="minicard-row-title">GRAFOLOGÍA FORENSE PERICIAL</span>
						</div>
						<div className="minicard-row">
							<span className="minicard-icon">
								<img src={cardmini3} alt="Psicología Social" className="minicard-imgicon" />
							</span>
							<span className="minicard-row-title">PSICOLOGÍA SOCIAL <span className="minicard-nueva">NUEVA</span></span>
						</div>
			</div>
		</div>
	</section>
);

export default MiniCard;
