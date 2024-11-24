import React from 'react';
import images from "./../assets/img/images.jpg"
import "./../styles/logo-hcmut.css";

export default function LogoHCMUT() {
    return (
        <div className="logo-HCMUT">
            <img src={images} alt="HCMUT Logo"/>
        </div>
    );
}