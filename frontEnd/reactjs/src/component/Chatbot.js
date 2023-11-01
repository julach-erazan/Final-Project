import React, { useState } from 'react'

const Chatbot = () => {
  const [popupWindow, setPopupWindow] = useState(false);
  const handleClick = () =>{
    setPopupWindow(!popupWindow)
  }

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, inputValue]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setInputValue('');
    }
  };

  return (
    <>
      <button onClick={handleClick}
      className="w-[200px] h-[200px] fixed bottom-[30px] right-[30px] bg-cover
      bg-[url('/src/component/chat-bot.gif')]
      "></button>

      <div className={`
      w-[100%] h-[100vh] fixed z-100 top-0 flex justify-center items-center bg-[#ffffffad]
      ${(popupWindow === true) ? "visible" :"hidden"}
      `}>
        <div className='w-[300px] h-[600px] md:w-[400px] bg-[yellow]'>
          <button onClick={handleClick} className="
          w-[50px] h-[50px] relative top-[20px] right-[-230px] md:right-[-330px] 
          bg-cover bg-[url('/src/component/close-button.png')]
          "></button>
    <div className="todo-input">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addTodo}>{editIndex === -1 ? 'Add' : 'Update'}</button>
     </div>
     <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input className="editInput" 
              type="text" value={inputValue}
              onChange={handleInputChange} />
            ) : (
              todo
            )}
          </li>
        ))}
     </ul>
        </div>
      </div>
    </>
  )
}

export default Chatbot
