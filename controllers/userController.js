const db = require("../db/queries");

async function createUsernameGet(req, res) {
    res.render("new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function getUsernames(req, res) {
  const search = req.query.search || null;
  const usernames = await db.getAllUsernames(search);

  res.render("index", { usernames, search });
}

async function deleteUsernames(req, res) {
  await db.deleteAllUsernames();
  res.redirect("/");
}



module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames
};