const bookFactory = () => {
  function newBook({ title, description }) {

    if (!title) throw new Error('Title is missing!');

    if (!description) throw new Error('Description is missing')

    return { title, description }
  }

  return { newBook };
}

export default bookFactory;