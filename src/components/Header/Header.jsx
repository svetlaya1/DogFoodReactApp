/* eslint-disable */

import { Link } from 'react-router-dom'
import headerStyles from './header.module.css'
import logoImg from './logo.png'
import favoritestImg from './favorites.png'
import cartImg from './cart.png'
<<<<<<< HEAD
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContextProvider';

export const Header = () => {

    const {setToken} = useContext(AppContext);
    function signoutHandler() {
        setToken('');
    }

  return (
    <header className={headerStyles.wr}>
        <div className={headerStyles.container}>
            <Link to="/" className={headerStyles.logo}>
                <img className={headerStyles.imgLogo} src={logoImg}>
                    
                </img>
                <p>
                    Doog Food
                </p>
            </Link>
            <div>
                <form>
                    <input className={headerStyles.search} placeholder="Поиск по сайту"></input>
                </form>
            </div>
            <div className={headerStyles.icons}>
                <Link to="/">
                    <img className={headerStyles.imgFavorite} src={favoritestImg}>
                    </img>
                </Link>

                <Link to="/">
                    <img className={headerStyles.imgCart} src={cartImg}>
                    </img>
                </Link>

                <Link className={headerStyles.link} to="/signin">
                    <p className={headerStyles.sign}>Вход</p>
                </Link>

                <Link onClick={signoutHandler} className={headerStyles.link} to="/">
                    <p className={headerStyles.sign}>Выход</p>
                </Link>
                
                <Link className={headerStyles.link} to="/signup">
                    <p className={headerStyles.sign}>Регистрация</p>
                </Link>
            </div>
        </div>
    </header>
  )
=======
import { useDispatch, useSelector } from 'react-redux'
import authSlice from '../../store/auth';
import { catalogActions } from '../../store/catalog';
import debounce from 'debounce';

export const Header = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => {
        return Object.keys(state.cart.added).length;
    });

    function signoutHandler() {
        dispatch(authSlice.actions.removeToken());
    }

    const onInput = debounce((event) => {
        dispatch(catalogActions.search(event.target.value));
    }, 500);

    return (
        <header className={headerStyles.wr}>
            <div className={headerStyles.container}>
                <Link to="/" className={headerStyles.logo}>
                    <img className={headerStyles.imgLogo} src={logoImg}>

                    </img>
                    <p>
                        Doog Food
                    </p>
                </Link>
                <div>
                    <form>
                        <input
                            className={headerStyles.search}
                            placeholder="Поиск в каталоге"
                            onInput={onInput}
                        />
                    </form>
                </div>
                <div className={headerStyles.icons}>
                    <Link to="/">
                        <img className={headerStyles.imgFavorite} src={favoritestImg}>
                        </img>
                    </Link>

                    <Link to="/cart" className={headerStyles.cart}>
                        <img className={headerStyles.imgCart} src={cartImg} />
                        {!!cartCount && <div className={headerStyles.cartCount}>{cartCount}</div>}
                    </Link>

                    <Link className={headerStyles.link} to="/signin">
                        <p className={headerStyles.sign}>Вход</p>
                    </Link>

                    <Link onClick={signoutHandler} className={headerStyles.link} to="/">
                        <p className={headerStyles.sign}>Выход</p>
                    </Link>

                    <Link className={headerStyles.link} to="/signup">
                        <p className={headerStyles.sign}>Регистрация</p>
                    </Link>
                </div>
            </div>
        </header>
    )
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
}