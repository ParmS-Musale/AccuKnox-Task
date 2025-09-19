import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, X } from "lucide-react";
import { Widget } from "@/types/dashboard";
import { availableWidgets } from "@/data/dashboardData";

interface AddWidgetPanelProps {
  isOpen: boolean;
  onClose: () => void;
  activeWidgets: { [key: string]: boolean };
  onToggleWidget: (widget: Widget, isActive: boolean) => void;
}

export const AddWidgetPanel = ({ 
  isOpen, 
  onClose, 
  activeWidgets, 
  onToggleWidget 
}: AddWidgetPanelProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterWidgets = (widgets: Widget[]) => {
    if (!searchTerm) return widgets;
    return widgets.filter(widget => 
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] p-0">
        <div className="flex h-full flex-col">
          <SheetHeader className="p-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-xl font-semibold">Add Widget</SheetTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Personalise your dashboard by adding the following widget
            </p>
          </SheetHeader>

          <div className="p-6 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search anything..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            <Tabs defaultValue="CSMP" className="h-full flex flex-col">
              <TabsList className="grid w-full grid-cols-4 mx-6">
                <TabsTrigger value="CSMP">CSMP</TabsTrigger>
                <TabsTrigger value="CWPP">CWPP</TabsTrigger>
                <TabsTrigger value="Image">Image</TabsTrigger>
                <TabsTrigger value="Ticket">Ticket</TabsTrigger>
              </TabsList>

              <div className="flex-1 overflow-y-auto px-6 pb-6">
                {Object.entries(availableWidgets).map(([category, widgets]) => (
                  <TabsContent key={category} value={category} className="mt-4 space-y-3">
                    {filterWidgets(widgets).map((widget) => (
                      <div key={widget.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50">
                        <Checkbox
                          id={widget.id}
                          checked={activeWidgets[widget.id] || false}
                          onCheckedChange={(checked) => 
                            onToggleWidget(widget, checked as boolean)
                          }
                          className="mt-0.5"
                        />
                        <div className="flex-1 min-w-0">
                          <label
                            htmlFor={widget.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {widget.name}
                          </label>
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {widget.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>

          <div className="p-6 pt-4 border-t">
            <div className="flex space-x-3">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button onClick={onClose} className="flex-1">
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};