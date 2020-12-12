export default function makeLibraryDB({ makeDb }) {
  const findById = async (todoId) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .findOne({ todoId });
  };

  const create = async (todoInfo) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .insertOne(todoInfo);
  };

  const replace = async (todo) => {
    const db = await makeDb();
    const { todoId } = todo;
    return await db
      .collection('todo')
      .findOneAndReplace(
        { todoId },
        { ...todo },
        { returnOriginal: false },
      );
  };

  const getAll = async (workGroup) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .find({ workGroup })
      .toArray();
  };

  const deleteById = async (todoId) => {
    const db = await makeDb();
    return await db
      .collection('todo')
      .deleteOne({ todoId });
  };

  return Object.freeze({
    findById,
    getAll,
    create,
    replace,
    deleteById,
  });
}
