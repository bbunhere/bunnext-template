import React from "react"
import styles from "@/styles/HeroBanner.module.css"

export const HeroImage = () => {
    return (
        <div className="relative">
            <div className={`${styles.main_wrapper} top-0 left-0`}>
                <div className={`${styles.images_wrapper} absolute`}>
                    <div className={`${styles.sub_images_wrapper} absolute top-0 left-0`}>
                        <div className={`${styles.circle01} absolute bg-main rounded-full opacity-50`}></div>
                        <div className={`${styles.circle02} absolute bg-sub rounded-full opacity-60`} />
                        <div className={`${styles.circle03} absolute bg-sub rounded-full opacity-60`} />
                        <div className={`${styles.circle04} absolute bg-main rounded-full opacity-80`} />
                        <div className={`${styles.circle05} absolute bg-main rounded-full opacity-70`} />
                        <img
                            className={`${styles.hero_img_01} absolute object-cover rounded-full suspended`}
                            alt="Ellipse"
                            src="/images/hero_01.png"
                        />
                        <img
                            className={`${styles.hero_img_02} absolute object-cover rounded-full suspended delay-0-5`}
                            alt="Ellipse"
                            src="/images/hero_02.png"
                        />
                        <img
                            className={`${styles.hero_img_03} absolute object-cover suspended delay-1`} // Add rounded-full with image not png
                            alt="Ellipse"
                            src="/images/hero_03.png"
                        />
                    </div>
                    <div className={`${styles.circle06} absolute bg-main rounded-full opacity-90`}></div>
                </div>
            </div>
        </div>
    )
}
