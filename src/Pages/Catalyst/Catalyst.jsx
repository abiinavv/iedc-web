import React from "react";
import "./Catalyst.styles.css";
import Catalyst2022 from "../../Assets/Catalyst_2022_page-0001.jpg";

const Catalyst = () => {
    return (
        <div className="catalyst-card">
            <img src={Catalyst2022} className="catalyst-image" />

            <div className="catalyst-content">
                <div className="catalyst-headings">
                    <div className="catalyst-heading1">CATALYST 2022</div>
                    <div className="catalyst-heading2">
                        <span style={{ color: "grey" }}>Chief editor</span>
                        <span style={{ fontWeight: "500" }}> Aswathy S Menon</span>
                    </div>
                </div>

                <div className="catalyst-buttons">
                    <a
                        href="https://issuu.com/iedcmec/docs/first_merged_compressed"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="catalyst-button">READ ONLINE</div>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1R3Sf5V8WMoyGsNNpehYIfnaLwrcq-kd0/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="catalyst-button">DOWNLOAD</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Catalyst;
