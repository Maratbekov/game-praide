import classes from './ContinMain.module.css'
import prifileImg    from '../../assests/images/dota2.png'
import eye from '../../assests/icons/eye.png'
import arrow from '../../assests/icons/arrow.png'
import { useRef, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const data = [
  {
    id: '1',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 1000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '2',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '20:00, 07.02.21',
    bid: 1500,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '3',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '21:30, 04.09.21',
    bid: '1000',
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '4',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 03.06.21',
    bid: 500,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '5',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 2000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '6',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 1000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '7',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '20:25, 24.06.21',
    bid: 2000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '8',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 1000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '9',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 12.22.22',
    bid: 5000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '10',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 1045,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '11',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 10000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '12',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 6000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '13',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 5000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '14',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 4000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '15',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 3000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },
  {
    id: '16',
    profileImg: `${prifileImg}`,
    title: 'Dota 2, Играем на SF, мид до 2 смертей или до падения т1',
    gameStart: 'Игра начинается:',
    time: '19:25, 04.06.21',
    bid: 2000,
    eye: `${eye}`,
    views: '332 просмотров',
    arrow: `${arrow}`,
    suggestions: '12 предложений',
    joinBtn: 'Присоединиться '
  },

]
const ContinMain = () => {
    const quantityPageRef = useRef(6);
    const [curentIndex, setCurrentIndex] = useState(0);
    const [endPosition , setEndPosition ] = useState(6)

    const  paginationHandler  = (el) => {
      setEndPosition((el + 1) * quantityPageRef.current);
      setCurrentIndex(
        (el + 1) * quantityPageRef.current -  quantityPageRef.current
      );
    };

    const prevHandler = () => {
      if(curentIndex) {
        setCurrentIndex(curentIndex - quantityPageRef.current);
        setEndPosition(endPosition - quantityPageRef.current )
      }
    };

    const nextHandler  = () => {
      if( endPosition < data.length) {
        setCurrentIndex(curentIndex + quantityPageRef.current);
        setEndPosition(endPosition + quantityPageRef.current);
      }
    };

    return(
        <section>
          
           
            {data.slice(curentIndex,endPosition).map ((item) => (
              <div className={classes.ContForItems}>
                <div  className={classes.profCont}>
                  <img className={classes.profImg} src={item.profileImg} alt={item.title} />
                  <p className={classes.title}>{item.title}</p>
                </div>

               <div className={classes.box}>
               <p className={classes.gameStart}>{item.gameStart} </p>
                <span className={classes.bid}>{item.bid}</span>
               </div>
                

                <span className={classes.time}>{item.time} </span>
                
                <div className={classes.viewsCont}>
                <img className={classes.eye} src={item.eye} alt="eye" />
                <span className={classes.grayTexts}>{item.views} </span>
                </div>
                
                <div className={classes.viewsCont}>
                <img className={classes.arrow} src={item.arrow} alt="arrow" />
                <p   className={classes.grayTexts}>{item.suggestions}</p> 
                </div>
                
                <button className={classes.joinBtn}>{item.joinBtn} </button>
                
                

              </div>
            ))}
          <div className={classes.paginCont}>
            
            <button className={classes.leftPagin}   
            onClick={prevHandler}>
              <FaChevronLeft/>
            </button>
            {Array(Math.ceil(data.length / quantityPageRef.current))
            .fill(null).map((_, el) => (
              <button  className={`${classes.paginate} ${
                curentIndex === 0 && el === curentIndex
                ?   `${classes.active}`
                : el === curentIndex / quantityPageRef.current && `${classes.active}`
              }`} 
               onClick={() => paginationHandler}>
               {el + 1} </button>
            ))}
            <button 
            className={classes.rightPagin} 
            onClick={nextHandler}>
              <FaChevronRight/>
            </button>

          </div>
        </section>
    )
}

export default ContinMain