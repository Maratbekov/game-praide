import classes from './News.module.css'
import voin from '../../assests/images/voin.png'

const News = () => {
  return (
    <section id={classes.news}>

        <h2>Новости</h2>
        
        <div className={classes.news}>
          <div className={classes.card}>
            <div className={classes.card__img}>
              <img
                src={voin}
                alt="voin"
              />
            </div>

            <div className={classes.card__text}>
              <h1 >Lorem ipsum dolor sit amet</h1>
              <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                aliquet arcu ante praesent arcu. Congue gravida metus vulputate
                volutpat. quisque .
              </p>
            </div>

            <div className={classes.data}>
              <span>02.11.2022</span>
            </div>
          </div>

          
          <div className={classes.card}>
            <div className={classes.card__img}>
              <img
                src={voin}
                alt="voin"
              />
            </div>

            <div className={classes.card__text}>
              <h1 >Lorem ipsum dolor sit amet</h1>
              <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                aliquet arcu ante praesent arcu. Congue gravida metus 
                volutpat. quisque .
              </p>
            </div>

            <div className={classes.data}>
              <span>02.11.2022</span>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default News
