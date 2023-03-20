import React from 'react';
import s from "./Footer.module.css";

export const Footer = () => {
    return (
        <div>
            <div className={s.footerBlock}>
                <div className={s.footerContainer}>
                        <h3 className={s.title}>Ekaterina Shumskaya</h3>
                        <div className={s.footer}>
                            <div className={s.f}></div>
                            <div className={s.f}></div>
                            <div className={s.f}></div>
                            <div className={s.f}></div>

                        </div>
                        <h4>@2023 All rights reserved</h4>

                    </div>
                </div>
            </div>
    );
};

