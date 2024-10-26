import { useState, useRef } from 'react';
import { SendHorizontal, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <Textarea
          ref={textareaRef}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[2.5rem] resize-none py-2 pr-12"
          rows={1}
        />
        <Popover>
          
          <PopoverContent
            className="w-80 border-none p-0"
            side="top"
            align="end"
          >
            
          </PopoverContent>
        </Popover>
      </div>
      <Button
        type="submit"
        size="icon"
        disabled={!message.trim()}
        className="flex items-center justify-center p-2 bg-blue-500 rounded-full hover:bg-blue-600 disabled:bg-gray-400"
        title="Send Message"
      >
        <SendHorizontal className="h-5 w-5 text-white" />
      </Button>
    </form>
  );
}
