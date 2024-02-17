import React from 'react';
import Header from '../components/header/Header';
import ProductCard from '../components/card/ProductCard';
import styles from './Main.module.css';
import Footer from '../components/footer/Footer';

const menu = ['Главная', 'Меню', 'Категория товаров'];
const products = [
  {
    id: 1,
    title: 'Товар 1', 
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.', 
    label: false,
    price: '190'
  },

  {
    id: 2,
    title: 'Товар 2', 
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.', 
    label: true,
    price: '190'
  },

  {
    id: 3,
    title: 'Товар 3', 
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.', 
    label: true,
    price: '190'
  },

  {
    id: 4,
    title: 'Товар 4', 
    description: 'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.', 
    label: true,
    price: '190'
  }
];
function MainPage() {
  return (
    <div >
      <Header />
      <div className={styles.main}>
        <div className={styles.mainTitleBlock}>
          <nav>
            <ul className={styles.mainMenuList}>
              {menu.map((item, index) => 
                <li key={item} className={styles.mainMenuItem}>
                  <a className={styles.main} href="/">{item} {(index === 0 || index === 1) && '/'}</a>
                </li>            
              )}
            </ul>
          </nav>
          <p className={styles.mainTitle}>Название категории</p>
        </div>
        <div className={styles.productList}>
          {products.map((product) => 
            <ProductCard 
              key={product.id}
              title={product.title} 
              description={product.description}
              label={product.label}
              price={product.price}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
