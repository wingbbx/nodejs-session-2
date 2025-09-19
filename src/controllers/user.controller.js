import User from "../models/users.model.js";

export async function getUsers() {
  // select * from model;
  const dataUsers = await User.findAll();
  return dataUsers;
}

export async function deleteUser(id) {
  const userDelete = await User.destroy({
    where: {
      id,
    },
  });

  return userDelete;
}

export async function createUser (user) {
    const userCreate = await User.create(user);

    return userCreate;
}
