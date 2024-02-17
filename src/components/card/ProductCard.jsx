import React, { useState } from 'react';
import ProductLabel from '../../assets/product-label.png';
import styles from './ProductCard.module.css';

function ProductCard({
    title = 'Товар 1', 
    description = 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.', 
    label = true,
    price = '190'
  }) {

    const [isToggled, setIsToggled] = useState(false);
    
    const handleChange = () => {
      setIsToggled(!isToggled);
    };
  return (
    <div className={styles.card}>
      <div className={styles.cardImage} />
      {label && <img class={styles.cardImageImageLabel} src={ProductLabel} alt="label" />}
      <div className={styles.cardMain}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.togglleButtonsBlock}>
          <button onClick={handleChange} className={isToggled ? styles.standartButtonActive : styles.standartButton}>
          {isToggled ? 'Двойной' : 'Стандарт'}
          </button>
          <button onClick={handleChange} className={isToggled ? styles.doubleButton : styles.doubleButtonActive}>
            {isToggled ? 'Стандарт' : 'Двойной'}
          </button>
        </div>
        <div className={styles.cardPriceButtonBlock}>
          <p className={styles.cardPrice}>{price} ₽</p>
          <button onClick={() => null} className={styles.orderButton}>
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
