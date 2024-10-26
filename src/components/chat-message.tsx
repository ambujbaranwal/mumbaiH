import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  feedback?: 'up' | 'down';
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot';

  return (
    <div
      className={cn('flex gap-3', {
        'justify-end': !isBot,
      })}
    >
      {isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <Card
        className={cn(
          'max-w-[85%] break-words px-3 py-2 text-sm',
          {
            'bg-gradient-to-r from-blue-500 to-purple-500 text-white':
              !isBot,
          }
        )}
      >
        <ReactMarkdown className="prose prose-sm dark:prose-invert">
          {message.content}
        </ReactMarkdown>
      </Card>
      {!isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-muted">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}