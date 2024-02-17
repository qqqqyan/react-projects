import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ qa }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, info } = qa

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn'>
          {showInfo ? <AiOutlineMinus onClick={() => setShowInfo(false)} /> : <AiOutlinePlus onClick={() => setShowInfo(true)} />}
        </button>
      </header>
      {showInfo ? <section>{info}</section> : null}
    </article>
  )
};

export default Question;
