import classes  from './RegisPage.module.css'
import gamePride  from '../../assests/icons/gamePride.png'

 const RegisPage = () => {
    return(
        <header className={classes.header1}>
            <div className={classes.game}>
                <img src={gamePride} alt="gamePride" />
                <h4>GAME <br /> PRIDE</h4>
            </div>
            
            <div>
            <button className={classes.regisBtn}>Регистрация</button>
            <button className={classes.enterBtn}>Войти</button>
            </div>
        </header>
    )
}

export default RegisPage