import classes from './Benefits.module.css'
import ramkaImg from '../../assests/images/ramkaImg.png'
import ramkaImg2 from '../../assests/images/ramkaImg2.png'
import ramkaImg3 from '../../assests/images/ramkaImg3.png'

const Benefits = () => {
  return (
    <section id={classes.benefits}>
      <h4>Преимущества</h4>
      <div className="container">
        <div className={classes.benefits}>
          <div className={classes.card}>
            <img
              src={ramkaImg}
              alt="ramkaimg"
            />
            <div className={classes.number}>01</div>
            <div className={classes.title}>Техническая поддержка игроков</div>
            <div className={classes.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </div>
          </div>

          <div className={classes.card}>
            <img
              src={ramkaImg2}
              alt="ramka2"
            />
            <div className={classes.number}>02</div>
            <div className={classes.title}>Техническая поддержка игроков</div>
            <div className={classes.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </div>
          </div>

          <div className={classes.card}>
            <img
              src={ramkaImg3}
              alt="ramka3"
            />
            <div className={classes.number}>03</div>
            <div className={classes.title}>Техническая поддержка игроков</div>
            <div className={classes.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
