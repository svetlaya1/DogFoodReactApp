import LoaderStyles from './Loader.module.css'

export function Loader() {
  return (
    <div className={LoaderStyles.container}>
        <div className={LoaderStyles['lds-ripple']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}
