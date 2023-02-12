
import gamePride from '../../assests/icons/GrayGamePride.png'
import classes from './Footer.module.css'
import expandLess  from '../../assests/icons/expandLess.png'
const Footer  = () => {
    return(
        <footer className={classes.footer}>
            
            <div className={classes.game}>
                <img src={gamePride} alt="gamePride" />
                <h4>GAME  PRIDE</h4>
            </div>
        <h5>ВСЕ ПРАВА ЗАЩИЩЕНЫ  2021</h5>
            <a href="https://myaccount.google.com/">INFO@GMAIL.COM</a>
            <div className={classes.container} >
                <hr />
                <p className={classes.li}>ГЛАВНАЯ</p>
                <hr />
                <p className={classes.li}>СРАЖЕНИЯ</p>
                <hr />
                <p className={classes.li}>ЧАВО </p>
                <hr />
                <p className={classes.li}>НОВОСТИ</p>
                
            </div>
            <div className={classes.enter}>
                    <img src={expandLess} alt="ExpendLess" />
                    <button>GO TO TOP</button>
                </div>

        </footer>
    )
}

export default Footer