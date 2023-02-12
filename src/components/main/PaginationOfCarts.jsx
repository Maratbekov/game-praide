import {React} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/css'
import 'swiper/css/pagination'


import { Pagination } from 'swiper'

import classes  from  './PaginationOfCarts.module.css'
import sword from '../../assests/icons/swordIcon.png'
import people from '../../assests/icons/peopleIcon.png'
import round from '../../assests/icons/roundIcon.png'
import Button from '../ui/Button'

const PaginationOfCarts = () => {
  return (
    <>
       {/* <span>kkkkk</span> */}      <Swiper
        slidesPerView={3}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={classes.MySwiper}
      >
        <SwiperSlide className={classes.swiper}>
            
        <div className={classes.cart1}>
        <div className={classes.cart}>
                <p className={classes.title}>Dota 2</p>
                <div className={classes.box}>
                    <img className={classes.sword} src={sword} alt="sword" />
                    <span>145</span>
                    <img className={classes.people} src={people}  alt="people" />
                    <span>2789</span>
                    <img className={classes.round} src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <Button>Стратегия</Button>
                </div>
            </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide className={classes.swiper}>
        <div className={classes.cart2}>
        <div className={classes.cart}>
                <p className={classes.title}>Counter-Strike: Global Offensive</p>
                <div className={classes.box}>
                    <img className={classes.sword} src={sword} alt="sword" />
                    <span>145</span>
                    <img className={classes.people} src={people}  alt="people" />
                    <span>2789</span>
                    <img className={classes.round} src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <Button>Шутер</Button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className={classes.swiper}>
        <div className={classes.cart3}>
        <div className={classes.cart}>
                <p className={classes.title}>World of Tanks</p>
                <div className={classes.box}>
                    <img className={classes.sword} src={sword} alt="sword" />
                    <span>145</span>
                    <img className={classes.people} src={people}  alt="people" />
                    <span>2789</span>
                    <img className={classes.round} src={round}  alt="round" />
                    <span> до 25 000с</span>
                    <Button>PRG</Button>
                </div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide className={classes.swiper}>
            
            <div className={classes.cart1}>
            <div className={classes.cart}>
                    <p className={classes.title}>Dota 2</p>
                    <div className={classes.box}>
                        <img className={classes.sword} src={sword} alt="sword" />
                        <span>145</span>
                        <img className={classes.people} src={people}  alt="people" />
                        <span>2789</span>
                        <img className={classes.round} src={round}  alt="round" />
                        <span> до 25 000с</span>
                        <Button>Стратегия</Button>
                        
                    </div>
                </div>
            </div>
            </SwiperSlide>
            
            <SwiperSlide className={classes.swiper}>
            <div className={classes.cart2}>
            <div className={classes.cart}>
                    <p className={classes.title}>Counter-Strike: Global Offensive</p>
                    <div className={classes.box}>
                        <img className={classes.sword} src={sword} alt="sword" />
                        <span>145</span>
                        <img className={classes.people} src={people}  alt="people" />
                        <span>2789</span>
                        <img className={classes.round} src={round}  alt="round" />
                        <span> до 25 000с</span>
                        <Button>Шутер</Button>
                        
                    </div>
                </div>
            </div>
            </SwiperSlide>
    
            <SwiperSlide className={classes.swiper}>
            <div className={classes.cart3}>
            <div className={classes.cart}>
                    <p className={classes.title}>World of Tanks</p>
                    <div className={classes.box}>
                        <img className={classes.sword} src={sword} alt="sword" />
                        <span>145</span>
                        <img className={classes.people} src={people}  alt="people" />
                        <span>2789</span>
                        <img className={classes.round} src={round}  alt="round" />
                        <span> до 25 000с</span>
                    <Button>PRG</Button>
                        
                    </div>
                </div>
            </div>
            </SwiperSlide>

            <SwiperSlide className={classes.swiper}>
            
            <div className={classes.cart1}>
            <div className={classes.cart}>
                    <p className={classes.title}>Dota 2</p>
                    <div className={classes.box}>
                        <img className={classes.sword} src={sword} alt="sword" />
                        <span>145</span>
                        <img className={classes.people} src={people}  alt="people" />
                        <span>2789</span>
                        <img className={classes.round} src={round}  alt="round" />
                        <span> до 25 000с</span>
                        <Button>Стратегия</Button>
                        
                    </div>
                </div>
            </div>
            </SwiperSlide>
            
            <SwiperSlide className={classes.swiper}>
            <div className={classes.cart2}>
            <div className={classes.cart}>
                    <p className={classes.title}>Counter-Strike: Global Offensive</p>
                    <div className={classes.box}>
                        <img className={classes.sword} src={sword} alt="sword" />
                        <span>145</span>
                        <img className={classes.people} src={people}  alt="people" />
                        <span>2789</span>
                        <img className={classes.round} src={round}  alt="round" />
                        <span> до 25 000с</span>
                        <Button>Шутер</Button>
                        
                    </div>
                </div>
            </div>
            </SwiperSlide>
    
            <SwiperSlide className={classes.swiper}>
            <div className={classes.cart3}>
            <div className={classes.cart}>
                    <p className={classes.title}>World of Tanks</p>
                    <div className={classes.box}>
                        <img className={classes.sword} src={sword} alt="sword" />
                        <span>145</span>
                        <img className={classes.people} src={people}  alt="people" />
                        <span>2789</span>
                        <img className={classes.round} src={round}  alt="round" />
                        <span> до 25 000с</span>
                    <Button>PRG</Button>
                        
                    </div>
                </div>
            </div>
            </SwiperSlide>
    
    
        
      </Swiper>
    </>
  )
}

export default PaginationOfCarts
