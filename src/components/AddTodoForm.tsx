import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface AddTodoFormProps {
  onAddTodo: (title: string, description: string) => void;
}

export const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim(), description.trim());
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Card className="p-6 shadow-todo">
      <h2 className="text-xl font-semibold mb-4 text-foreground">Add a Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Todo Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Todo Description</Label>
          <Textarea
            id="description"
            placeholder="Enter todo description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-input resize-none"
            rows={3}
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">
          Add Todo
        </Button>
      </form>
    </Card>
  );
};