import React from 'react';
import s from './Variant.module.css'

export const Variant = () => {
    return (
        <div className={s.variantBlock}>
            <div className={s.variantContainer}>
                <div className={s.variant}>
                <h3 className={s.title}>I am considering options for remote work</h3>
                    <button>Hire me</button>
                </div>
            </div>
        </div>
    );
};

