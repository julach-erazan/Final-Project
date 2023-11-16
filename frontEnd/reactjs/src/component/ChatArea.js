import React , {useState}from 'react'

const ChatArea = () => {
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
    <div>
      <div className="input">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addTodo}>{editIndex === -1 ? 'Add' : 'Update'}</button>
      </div>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={index}>
            {index === editIndex ? (
              <input className="editInput" type="text" value={inputValue} onChange={handleInputChange} disabled={editIndex !== -1}/>
            ) : (
              todo
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatArea
