/* eslint-disable no-console */
const userService = require('../services/user.service.js');

const login = async (req, res) => {
  const { name } = req.body;

  console.log('Third_step login');

  const newUser = await userService.createUser(name);

  res.send(newUser);
};

const logout = async (req, res) => {
  const { user } = req.body;

  await userService.deleteUser(user.id);

  res.sendStatus(204);
};

module.exports = {
  login,
  logout,
};
