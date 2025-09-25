import { useState } from "react";
import { TodoNavbar } from "@/components/TodoNavbar";
import { AddTodoForm } from "@/components/AddTodoForm";
import { TodoCard } from "@/components/TodoCard";
import { useToast } from "@/hooks/use-toast";

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { toast } = useToast();

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
    toast({
      title: "Todo added!",
      description: "Your new todo has been added successfully.",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    toast({
      title: "Todo deleted",
      description: "The todo has been removed from your list.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <TodoNavbar />
      
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Todo List App
          </h1>
          <p className="text-muted-foreground">
            Stay organized and get things done!
          </p>
        </div>

        <AddTodoForm onAddTodo={addTodo} />

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            Your Todos
            {todos.length > 0 && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({todos.filter(t => !t.completed).length} pending, {todos.filter(t => t.completed).length} completed)
              </span>
            )}
          </h2>
          
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No todos yet. Add one above to get started!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map(todo => (
                <TodoCard
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
