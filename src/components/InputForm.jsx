import React, { useState } from "react";

const InputForm = ({ addTodos }) => {

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      alert('今日の目標を決めよう！')
    } else {
      addTodos(input);
    }
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type='submit'>午前中</button>
      <button type='submit'>午後中</button>
      <button type='submit'>夜中</button>
    </form>
  )
}

export default InputForm;