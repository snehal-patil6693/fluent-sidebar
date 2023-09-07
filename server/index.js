const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//create a todo

app.post("/todos", async (req, res) => {
    try {
      const { file } = req.body;
      const { author } = req.body;
      const { last_updated } = req.body;
      const { last_update } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO fluent_table( file, author, last_updated, last_update) VALUES($1, $2, $3, $4) RETURNING *",
        [file, author, last_updated, last_update]
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all todos
  
  app.get("/todos", async (req, res) => {
    try {
      const allTodos = await pool.query("SELECT * FROM fluent_table");
      res.json(allTodos.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a todo
  
  app.get("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM fluent_table WHERE fluent_id = $1", [
        id
      ]);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a todo
  
  app.put("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { file } = req.body;
      const { author } = req.body;
      const { last_updated } = req.body;
      const { last_update } = req.body;
      const updateTodo = await pool.query(
        "UPDATE fluent_table SET file = $2, author=$3, last_updated=$4, last_update=$5 WHERE fluent_id = $1",
        [file, author, last_updated, last_update, id]
      );
  
      res.json("Fluent was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a todo
  
  app.delete("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM fluent_table WHERE fluent_id = $1", [
        id
      ]);
      res.json("Fluent was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
  
app.listen(5050, () => {
    console.log("server has started on port 5050");
})