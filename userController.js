const db = require("../db");

const getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("All Users:", results);

    res.status(200).json(results);
  });
};

module.exports = { getAllUsers };