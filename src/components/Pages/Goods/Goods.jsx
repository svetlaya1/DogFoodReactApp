/* eslint-disable */

import { useQuery } from "@tanstack/react-query"
<<<<<<< HEAD
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AppContext } from "../../../contexts/AppContextProvider"
=======
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
import { Loader } from "../../Loader/Loader"
import { GoodsItem } from "../GoodsItem/GoodsItem"
import goodsStyles from "./goods.module.css"

export const Goods = () => {
<<<<<<< HEAD
  const { token } = useContext(AppContext)
  const navigate = useNavigate()
  console.log( {token})
=======
  const token = useSelector((state) => state.auth.token);
  const search = useSelector((state) => state.catalog.search);

  const navigate = useNavigate()
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)

  useEffect(() => {
    if (!token) {
      navigate("/signin")
    }
<<<<<<< HEAD
  }, [token])
=======
  }, [token]);
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["productsfetch"],
    queryFn: () =>
<<<<<<< HEAD
      fetch("https://api.react-learning.ru/products", {
=======
      fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
<<<<<<< HEAD
        if (res.status > 299) {
=======
        if (!res.ok) {
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
          throw new Error(
            `Ошибка при получении списка продуктов. Status: ${res.status}`
          )
        }

        return res.json()
      }),
    enabled: token !== undefined,
  })

<<<<<<< HEAD
=======
  useEffect(() => {
    refetch();
  }, [search]);

>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
  if (isError)
    return (
      <div className={goodsStyles.errorMessage}>
        <p>{error.message}</p>
        <button onClick={refetch} type="button">
          Повторить запрос
        </button>
      </div>
    )

  if (isLoading) return <Loader />
<<<<<<< HEAD
  if (!data.products.length) return <p>Ошибка</p>

  return (
    <ul className={goodsStyles.productsList}>
      {data.products.map((product, index) => (
=======
  if (!data.length) return <p>Ничего не нашлось</p>

  return (
    <ul className={goodsStyles.productsList}>
      {data.map((product, index) => (
>>>>>>> c3a691a (Добавлен redux, поиск и корзина)
        <GoodsItem product={product} key={index} />
      ))}
    </ul>
  )
}
