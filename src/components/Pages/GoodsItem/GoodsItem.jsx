/* eslint-disable */
import goodItemStyles from "./goodsitem.module.css"
import PropTypes from "prop-types"
<<<<<<< HEAD
=======
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../../../store/cart"
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)

export const GoodsItem = ({ product }) => {
  const { pictures, discount, price, stock, description } = product

<<<<<<< HEAD
  return (
    <div className={goodItemStyles.item}>
      <img className={goodItemStyles.itemImg} src={pictures} alt="product" />
=======
  const dispatch = useDispatch();

  const inCart = useSelector((state) => state.cart.added[product._id]);

  const onAddToCart = () => {
    const id = product._id;
    const action = inCart
      ? cartActions.decrement({ id })
      : cartActions.increment({ id });

    dispatch(action);
  };

  return (
    <div className={goodItemStyles.item}>
      <img className={goodItemStyles.itemImg} src={pictures} alt="product" />
      <div>{product.name}</div>
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
      <p>
        <span>Скидка:</span> {discount} %
      </p>
      <p>
        <span>Цена:</span> {price} ₽
      </p>
      <p>
        <span>Осталось:</span> {stock} шт.
      </p>
      <span>Описание товара:</span>
      <p>&quot;{description}&quot;</p>
      <div className={goodItemStyles.blockBtn}>
<<<<<<< HEAD
        <button className={goodItemStyles.itemButton}>В корзину</button>
        <button className={goodItemStyles.itemButton}>В избранное</button>
      </div>
    </div>
    // </div>
=======
        <button className={goodItemStyles.itemButton} onClick={onAddToCart}>{inCart ? 'Удалить' : 'В корзину'}</button>
        <button className={goodItemStyles.itemButton}>В избранное</button>
      </div>
    </div>
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
  )
}

GoodsItem.propTypes = {
  product: PropTypes.object,
}
