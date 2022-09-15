import React, { useState } from 'react';
import data from './data';

function App() {

const [count,setCount] = useState(2);  
const [text,setText] = useState([]);  
  
const handleSubmit = (e) => {
e.preventDefault();
let amount = parseInt(count); // to change it into number rather than string


if (count <= 0) { // in this case, if the number is negative. show 1 paragprah
  amount = 1;
}
if (count > 8) { // in this case, if the number is greater than 8 (we have 9 paragprah in array so 8 indexes). show all paraphras that are there
  amount = 8;
};
  setText(data.slice(0, amount)); // slice will return a new copy of array and then we select item from start to end. the start to end value represnts indexs.  0 = 0 index
};

  return (
    <section className='section-center'>
      <h3>You can generate your own lorem Ipsum(dummy text from here).</h3>

      <form className='lorem-form' onSubmit={handleSubmit}>

        <label htmlFor="amount">Paragraphs: </label>

        <input 
          type="number" 
          name='amount' 
          id='amount'  
          value={count} 
          onChange={(e)=> setCount(e.target.value)}
        />

        <button  className='btn'>Generate Lorem Ipsum</button>
      </form>

      <article className='lorem-text'>
        
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })};

      </article>

    </section>
    )
}

export default App;
