import { Button } from "@/components/ui/button";

export const TodoNavbar = () => {
  return (
    <nav className="bg-card border-b border-border p-4 mb-6 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center gap-6">
        <span className="font-medium text-foreground">Todos List</span>
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Home
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            About
          </Button>
        </div>
      </div>
    </nav>
  );
};