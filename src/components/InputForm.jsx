import React, { useState } from "react";

const InputForm = ({ addAmTodos, addPmTodos, addEvTodos }) => {

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      alert('今日の目標を決めよう！')
    } else {
      // addAmTodos(input);
      // addPmTodos(input);
      // addEvTodos(input);
    }
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type='submit' onClick={() => addAmTodos(input)}>午前中</button>
      <button type='submit' onClick={() => addPmTodos(input)}>午後中</button>
      <button type='submit' onClick={() => addEvTodos(input)}>夜中</button>
    </form>
  )
}

export default InputForm;