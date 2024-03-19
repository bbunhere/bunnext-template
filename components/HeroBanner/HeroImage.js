import React from "react"
import "@/assets/HeroBanner/index.css"

export const HeroImage = () => {
    return (
        <div className="relative">
            <div className="main-wrapper top-0 left-0">
                <div className="absolute images-wrapper">
                    <div className="sub-images-wrapper absolute top-0 left-0">
                        <div className="circle-01 absolute bg-main rounded-full opacity-50"></div>
                        <div className="circle-02 absolute bg-sub rounded-full opacity-60" />
                        <div className="circle-03 absolute bg-sub rounded-full opacity-60" />
                        <div className="circle-04 absolute bg-main rounded-full opacity-80" />
                        <div className="circle-05 absolute bg-main rounded-full opacity-70" />
                        <img
                            className="absolute hero-img-01 object-cover rounded-full suspended"
                            alt="Ellipse"
                            src="/images/hero_01.jpg"
                        />
                        <img
                            className="absolute hero-img-02 object-cover rounded-full suspended delay-0-5"
                            alt="Ellipse"
                            src="/images/hero_02.jpg"
                        />
                        <img
                            className="absolute hero-img-03 object-cover rounded-full suspended delay-1"
                            alt="Ellipse"
                            src="/images/hero_03.jpg"
                        />
                    </div>
                    <div className="circle-06 absolute bg-main rounded-full opacity-90"></div>
                </div>
            </div>
        </div>
    )
}
