import React from 'react';
import styles from '../avatar-container/avatar-container.module.css';
import { getRandomIcon } from '../../utils/variables';
import { images } from '../../utils/images';
import { AvatarContainerElement } from '../avatar-container-element/avatar-container-element';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const AvatarContainer = () => {

    const [avatar, setAvatar] = useState(null);

    return (
        <>
            <Link 
                className={styles.breadcrumbs} 
                to='/'>
                ←
            </Link>
            <div 
                className={styles.buttons_container}>
                <button 
                    className={styles.button} 
                    onClick={() => setAvatar(getRandomIcon(images))} 
                    type='button'>
                    { 
                        avatar === null 
                        ? 'Хочу новый аватар!' 
                        : 'Попробовать снова!'
                    }
                </button>
            </div>  
            {avatar !== null && (
                <div className={styles.container}>
                {Object.keys(avatar).map(key => (
                    <AvatarContainerElement 
                        key={key} 
                        src={avatar[key]} 
                        image={key} />
                ))}
                </div>
            )}
        </>

    );
}