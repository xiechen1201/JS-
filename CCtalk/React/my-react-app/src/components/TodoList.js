const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function TodoList() {
  return (
    <>
      <h1>{person.name}'s Todos</h1>
      <img
        className='avatar'
        src='https://i.imgur.com/7vQD0fPs.jpg'
        alt='Gregorio Y. Zara'
      />
    </>
  );
}

export default TodoList