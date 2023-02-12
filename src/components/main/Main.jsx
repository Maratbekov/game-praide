import classes from './Main.module.css'
import { Fragment } from 'react'
import ContinMian from './ContinMain'
import Question from './Questions'
import Benefits from './Benefits'
import News from './News'
import leftArr from '../../assests/icons/leftArrow.png'
import rightArr from '../../assests/icons/rightArrow.png'
import PaginationOfCarts from './PaginationOfCarts'
import arrow from '../../assests/icons/arrow (2).png'
const Main = () => {
    return(
        <Fragment>
            <main className={classes.body}>
            <hr className={classes.blueLine} />
                    <div className={classes.container}>
                    <img src={leftArr} alt="arrow" />
                    <h2>Сыграй с нами</h2>
                    <img src={rightArr} alt="arrow" />
            </div>
            <button className={classes.allGameBtn}>
                    <p>Все игры</p>
                    <img src={arrow} alt="arrow" />
            </button>
            <div className={classes.swiper}>
                <PaginationOfCarts/>
            </div>
            <div className={classes.contForComp}>
                <ContinMian/>
                <Benefits/>
                <Question/>
                <News/>
            </div>
        </main>
        </Fragment>
    )   
}

export default Main
