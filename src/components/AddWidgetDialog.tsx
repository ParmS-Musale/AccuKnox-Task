import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AddWidgetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string, text: string) => void;
  categoryName: string;
}

export const AddWidgetDialog = ({ 
  isOpen, 
  onClose, 
  onAdd, 
  categoryName 
}: AddWidgetDialogProps) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (widgetName.trim() && widgetText.trim()) {
      onAdd(widgetName.trim(), widgetText.trim());
      setWidgetName("");
      setWidgetText("");
      onClose();
    }
  };

  const handleClose = () => {
    setWidgetName("");
    setWidgetText("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Widget to {categoryName}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="widget-name">Widget Name</Label>
            <Input
              id="widget-name"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              placeholder="Enter widget name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="widget-text">Widget Description</Label>
            <Textarea
              id="widget-text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              placeholder="Enter widget description"
              required
              rows={3}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Add Widget</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};