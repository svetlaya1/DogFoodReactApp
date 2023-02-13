/* eslint-disable */
<<<<<<< HEAD
import mainStyles from './main.module.css'

export function Main() {
    console.log('Render Main')
    return (
      <main className={mainStyles.main}>
        <p className={mainStyles.text}>Добро пожаловать в наш интернет-магазин, где представлен и доступен для заказа широчайший ассортимент продукции как собственного производства, так и компаний-партнеров.</p>
      </main>
    )
  }
  
=======
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import mainStyles from './main.module.css'
import { useNavigate } from 'react-router-dom';

export function Main() {

  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(`/goods`);
    }
  }, [])

  return (
    <main className={mainStyles.main}>
      <p className={mainStyles.text}>Добро пожаловать в наш интернет-магазин, где представлен и доступен для заказа широчайший ассортимент продукции как собственного производства, так и компаний-партнеров.</p>
    </main>
  )
}
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
