  

import { Fragment, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import classes from './Question.module.css'

  const  Question  = () => {
        const  DATA  = [
    {
      id: '1',
      question: 'How dis we do this Bookmaker review?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem distinctio dolor sapiente explicabo harum nobis aliquam voluptatum velit totam, ipsam error natus, corporis expedita cum iusto dolorum, tempora quae?'
      
    },
    {
      id: '2',
      question: 'How dis we do this Bookmaker review?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem distinctio dolor sapiente explicabo harum nobis aliquam voluptatum velit totam, ipsam error natus, corporis expedita cum iusto dolorum, tempora quae?'
      
    },
    {
      id: '3',
      question: 'Can bettors in the US acccess the sportsbook?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem distinctio dolor sapiente explicabo harum nobis aliquam voluptatum velit totam, ipsam error natus, corporis expedita cum iusto dolorum, tempora quae?'
      
    },
    {
      id: '4',
      question: 'Can bettors in the US acccess the sportsbook?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere exercitationem distinctio dolor sapiente explicabo harum nobis aliquam voluptatum velit totam, ipsam error natus, corporis expedita cum iusto dolorum, tempora quae?'
      
    },
  ] 


  
  const answersData =[
    {
      id: '1',
      question: "How dis we do this Bookmaker review?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: '2',
      question: "How dis we do this Bookmaker review?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: '3',
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },

    {
      id: '4',
      question: "Can bettors in the US acccess the sportsbook?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Laoreet auctor nibh viverra amet pulvinar eu tempor id. Mauris egestas tempor sed cursus pellentesque sed in mollis lectus. Id diam congue sollicitudin dictumst dui velit. ",
    },
  ]

  const [answers, setAnswers] = useState(null);
  const [ qustions, setQustions] = useState(null);


  const toggle = (el) => {
    if (answers === el) {
      return  setAnswers(null)
    }
    setAnswers(el)
  };

  const secondToggle = (item) => {
      if (qustions === item){
        return setQustions(null)
      }
      setQustions(item)
  }

    return(
      <Fragment>
        <div className={classes.container}>
          <h1 className={classes.title}>FAQ</h1>
            <div className={classes.accordion}>
              <div>
              {DATA.map((product,el)=> (
                  <div className={classes.items}>
                    <div className={classes.click} onClick={() => toggle(el)}>
                      <span> 
                        {answers === el ? <FaMinus/> : <FaPlus/>} 
                      </span>
                      <h3>{product.question}</h3>
                    </div>
                    <div className= {answers === el ? `${classes.close} ${classes.show}` : `${classes.close}`}>

                      {product.answer}
                    </div>
              
                  </div>
                ))}
              </div>

              <div>
              {answersData.map((i, item)=> (
                  <div className={classes.items}>
                    <div className={classes.click} onClick={() => secondToggle(item)}>
                      <span> 
                        {qustions === item ? <FaMinus/> : <FaPlus/>} 
                      </span>
                      <h3>{i.question}</h3>
                    </div>

                    <div className= {qustions === item ? `${classes.close} ${classes.show}` : `${classes.close}`}>
                      {i.answer}
                    </div>
              
                  </div>
                ))}
              </div>
           
            </div>
        </div>
      </Fragment>
    )
  }

  export default Question