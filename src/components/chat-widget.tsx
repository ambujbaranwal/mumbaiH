import { useState, useRef, useEffect } from 'react';
import { Bot, X, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from '@/components/chat-message';
import { ChatInput } from '@/components/chat-input';
import { QuickReplies } from '@/components/quick-replies';
import { getChatResponse } from '@/lib/gemini';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  feedback?: 'up' | 'down';
}

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your Qubit AI assistant. How can I help you with your investments today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(true);

    try {
      const response = await getChatResponse(content);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFeedback = (messageId: string, type: 'up' | 'down') => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, feedback: type } : msg
      )
    );
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        content: "Hello! I'm your Qubit AI assistant. How can I help you with your investments today?",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:from-blue-600 hover:to-purple-600 lg:bottom-8 lg:right-8"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full border-l-0 p-0 sm:max-w-[400px] sm:border-l"
      >
        <SheetHeader className="border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <SheetTitle>Qubit AI</SheetTitle>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClearChat}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetHeader>

        <div className="flex h-[calc(100vh-8rem)] flex-col gap-4 p-4">
          <ScrollArea className="flex-1 rounded-lg bg-muted/50 p-4" ref={scrollAreaRef}>
            <div className="flex flex-col gap-4">
              {messages.map((message) => (
                <div key={message.id} className="group relative">
                  <ChatMessage message={message} />
                  {message.sender === 'bot' && (
                    <div className="absolute -right-12 top-0 hidden gap-1 group-hover:flex">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback(message.id, 'up')}
                      >
                        <ThumbsUp
                          className={`h-4 w-4 ${
                            message.feedback === 'up' ? 'fill-current' : ''
                          }`}
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleFeedback(message.id, 'down')}
                      >
                        <ThumbsDown
                          className={`h-4 w-4 ${
                            message.feedback === 'down' ? 'fill-current' : ''
                          }`}
                        />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Bot className="h-4 w-4 animate-pulse" />
                  Qubit is thinking...
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="space-y-4">
            <QuickReplies onSelect={handleSendMessage} />
            <ChatInput onSend={handleSendMessage} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}