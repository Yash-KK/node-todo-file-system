const express = require('express')
const fs = require("fs");
const app = express()
app.use(express.json());


const todos = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("store.json", 'utf-8', (err, data) => {
      if (err) {
        reject(err);
        return
      }

      resolve(JSON.parse(data));
    })
  })
}

const writeTodos = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("store.json", JSON.stringify(data), (err) => {
      if (err) {
        console.log(err);
        reject(err);
        return
      }
      resolve();
    })
  })
}
app.get('/', async (req, res) => {
  try {
    let data = await todos();
    res.send(data);
  } catch (err) {
    res.status(500).json({
      error: "Failed to read"
    })
  }

})

app.post("/", async (req, res) => {
  try {
    let data = await todos();
    const newTodo = req.body;
    if (!newTodo.description) throw new Error("Enter description")
    newTodo.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    data.push(newTodo);
    await writeTodos(data);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({
      error: "Failed to add todo"
    })
  }
})

app.put("/", async (req, res) => {
  try {
    let data = await todos();
    const id = parseInt(req.query.id);
    console.log(id)
    const updatedTodo = req.body;
    console.log(updatedTodo)
    const index = data.findIndex((todo) => {
      return todo.id === id
    })
    if (index !== -1) {
      data[index] = { id, ...updatedTodo }
      await writeTodos(data);
      res.json(data[index])
    } else {
      res.status(404).json({
        error: "Todo not found"
      })
    }
  } catch (err) {
    res.status(500).json({
      error: "Failed to update todo"
    })
  }
})


app.delete("/", async (req, res) => {
  try {
    const id = parseInt(req.query.id);
    let data = await todos();
    const newTodos = data.filter((todo) => {
      return todo.id !== id
    })
    if (newTodos.length !== data.length) {
      await writeTodos(newTodos);
      res.json({
        message: "Todo deleted successfully!"
      })
    } else{
      res.status(404).json({
        error: "Todo not found"
      })
    }
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete todo"
    })
  }
})
app.listen(3000) 