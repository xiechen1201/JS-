function todoReducer(data) {
  function addItem(newItem) {
    return data.concat(newItem);
  }

  function removeItem(id) {
    return data.filter((el) => el.id !== id);
  }

  function changeCompleted(id) {
    return data.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return item;
    });
  }

  return {
    addItem,
    removeItem,
    changeCompleted
  };
}

export default todoReducer