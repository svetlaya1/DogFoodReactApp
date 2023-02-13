/* eslint-disable */

import { Outlet } from 'react-router-dom'
<<<<<<< HEAD
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
=======
import styles from './App.module.css';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Provider } from 'react-redux'
import store from './store';
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)

function App() {


  return (
<<<<<<< HEAD
    <div>
      <Header />
      
      <Outlet />

      <Footer />
    </div>
=======
    <Provider store={store}>
      <div className={styles.app}>
        <Header />

        <div className={styles.outlet}>
          <Outlet />
        </div>

        <Footer />
      </div>
    </Provider >

>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
  )
}

export default App