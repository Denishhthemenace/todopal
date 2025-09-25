import { useState } from "react";

// Simple beginner-style todo interface
interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const BeginnerTodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Simple function to add todo (beginner style)
  const addTodo = () => {
    if (title.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(), // Simple ID generation
        title: title,
        description: description,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setTitle(""); // Clear inputs
      setDescription("");
      alert("Todo added!"); // Basic alert like a beginner would use
    } else {
      alert("Please enter a title!");
    }
  };

  // Toggle completion
  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    if (confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  return (
    <div>
      {/* Basic Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="#" style={{color: '#333', fontWeight: 'bold'}}>
            Todos List
          </a>
        </div>
      </nav>

      <div className="container todo-container">
        {/* Header */}
        <h1 className="header-title">Todo List</h1>
        
        {/* Add Todo Form */}
        <div className="add-todo-form">
          <h3>Add a Todo</h3>
          <div className="mb-3">
            <label className="form-label">Todo Title</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Read about PC Parts"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Todo Description</label>
            <textarea 
              className="form-control" 
              rows={3}
              placeholder="I have to read about latest pc parts in the market"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={addTodo}
            style={{backgroundColor: '#007bff', borderColor: '#007bff'}}
          >
            Add Todo
          </button>
        </div>

        {/* Todos List */}
        <div>
          <h3>Your Todos</h3>
          {todos.length === 0 ? (
            <p style={{color: '#666', fontSize: '18px'}}>No todos yet! Add one above.</p>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="todo-item">
                <div className="d-flex align-items-start">
                  <input 
                    type="checkbox" 
                    className="todo-checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    style={{marginTop: '5px'}}
                  />
                  <div className="flex-grow-1">
                    <h5 className={todo.completed ? 'completed' : ''}>
                      {todo.title}
                    </h5>
                    <p className={todo.completed ? 'completed' : ''} style={{margin: 0}}>
                      {todo.description}
                    </p>
                    {todo.completed && (
                      <small style={{color: '#28a745'}}>✓ Done</small>
                    )}
                  </div>
                  <button 
                    className="btn btn-delete btn-sm ms-2"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BeginnerTodoApp;