import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose Theme</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => {
              setTheme('light');
              setOpen(false);
            }}
          >
            <Sun className="h-4 w-4" />
            Light
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => {
              setTheme('dark');
              setOpen(false);
            }}
          >
            <Moon className="h-4 w-4" />
            Dark
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}