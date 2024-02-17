import React from 'react';
import ButtonIcon from '../../assets/Vector.png';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.headerLogo} href="/">ЛОГО</a>
      <div className={styles.numberButtonBlock}>
        <p class={styles.number}>+7 (812) <span class={styles.numberBold}>944-4490</span></p>
        <button class={styles.button}>
          <img class={styles.buttonIcon} src={ButtonIcon} alt="cart icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
