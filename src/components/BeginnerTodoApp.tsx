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
      <nav className="navbar navbar-light bg-light border-bottom">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Todos List</span>
        </div>
      </nav>

      <div className="container mt-4">
        {/* Header */}
        <h1 className="text-center mb-4">Todo List</h1>
        
        {/* Add Todo Form */}
        <div className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">Add a Todo</h3>
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
            >
              Add Todo
            </button>
          </div>
        </div>

        {/* Todos List */}
        <div>
          <h3>Your Todos</h3>
          {todos.length === 0 ? (
            <p className="text-muted">No todos yet! Add one above.</p>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="card mb-2">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <input 
                      type="checkbox" 
                      className="form-check-input me-3 mt-1"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />
                    <div className="flex-grow-1">
                      <h5 className={todo.completed ? 'text-decoration-line-through text-muted' : ''}>
                        {todo.title}
                      </h5>
                      <p className={`mb-1 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}>
                        {todo.description}
                      </p>
                      {todo.completed && (
                        <small className="text-success">✓ Done</small>
                      )}
                    </div>
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
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