import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface TodoCardProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoCard = ({ id, title, description, completed, onToggle, onDelete }: TodoCardProps) => {
  return (
    <Card className="p-4 shadow-todo hover:shadow-todo-hover transition-all duration-200 border border-border">
      <div className="flex items-start gap-3">
        <Checkbox
          checked={completed}
          onCheckedChange={() => onToggle(id)}
          className="mt-1"
        />
        <div className="flex-1 space-y-1">
          <h3 className={`font-medium ${completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
            {title}
          </h3>
          <p className={`text-sm ${completed ? 'line-through text-muted-foreground' : 'text-muted-foreground'}`}>
            {description}
          </p>
        </div>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(id)}
          className="ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};