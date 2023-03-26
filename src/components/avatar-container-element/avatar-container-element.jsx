import React from 'react';
import styles from '../avatar-container-element/avatar-container-element.module.css';

export const AvatarContainerElement = (props) => {

    return (
        <img id='image' className={styles[props.image]} src={props.src} />
    )
}