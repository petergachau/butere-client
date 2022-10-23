import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import './Hero.css'
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);
  const[number,setNumber]=useState(0)
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 9000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote ,news,view} = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            
            <article  style={{alignItems:'center'}} className={position } key={id}>
              <div className="title1">
                <h4 className="title">{title}</h4>
              </div>
                <div className="hero">
                <div className="image">
                                <img src={image} alt={name} className="person-img" />
                                
 <p className="quote">{quote}</p>
 <div className="items">
  <button className="btns">
    {view}
  </button>
 </div>
              <FaQuoteRight className="icon" />
              </div>
                </div>
              <h4>{name}</h4>
              
             
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
