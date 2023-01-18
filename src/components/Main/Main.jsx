/* eslint-disable */
import mainStyles from './main.module.css'

export function Main() {
    console.log('Render Main')
    return (
      <main className={mainStyles.main}>
        <p className={mainStyles.text}>Добро пожаловать в наш интернет-магазин, где представлен и доступен для заказа широчайший ассортимент продукции как собственного производства, так и компаний-партнеров.</p>
      </main>
    )
  }
  