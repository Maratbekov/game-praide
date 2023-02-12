import classes  from './Header.module.css'
import instagram from '../../assests/icons/instagram.png'
import vcontacte from '../../assests/icons/vkontacte.png'
import facebook from '../../assests/icons/facebook.png'
import {NavLink} from 'react-router-dom'


const Header = () => {
    return(
        <header className={classes.header}>
            
                <ul className={classes.nav}>
                    <li> <NavLink to='/'>Главная</NavLink></li>
                    <li> <NavLink to="/battle">Сражения</NavLink></li>
                    <li> <NavLink to="/chavo">ЧАВО</NavLink></li>
                    <li> <NavLink to="/news">Новости</NavLink></li>
                </ul>  
            

            <div className={classes.container}>
                <a href="https://learn.javascript.ru/"><img src={instagram} alt="instagram" /></a>
              <a href="  https://vk.com/"><img src={vcontacte} alt="vcontacte" /> </a>   
             <a href=" https://www.facebook.com/">  <img src={facebook} alt="facebook" /></a>   
            </div>
        </header>
    )
}

export default Header