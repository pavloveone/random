import React from 'react';
import styles from './greeting.module.css';
import { Link } from 'react-router-dom';

export const Greeting = () => {

    return (
        <p className={styles.title}>
            Hi, this project was completed as a test task in one of the Moscow web studios.<br />
            Here you can generate a random avatar of a lego man.<br />
            <span className={styles.span}>:)</span> <br />
            <Link to='/avatar' className={styles.link}>Want to try?</Link>
            
        </p>
    );
}