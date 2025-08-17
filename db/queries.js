const pool = require("./pool");

async function getAllUsernames(search){
    if(search) {
        const { rows } = await pool.query("SELECT * FROM usernames WHERE username ILIKE $1", [`%${search}%`]);
        return rows;
    } else {
        const { rows } = await pool.query("SELECT * FROM usernames");
        return rows;
    }
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}


module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsernames
};