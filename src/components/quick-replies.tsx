import { Button } from '@/components/ui/button';

interface QuickRepliesProps {
  onSelect: (message: string) => void;
}

const suggestions = [
  'What stocks should I invest in?',
  'How to diversify my portfolio?',
  'Explain market trends',
  'Investment strategies',
];

export function QuickReplies({ onSelect }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <Button
          key={suggestion}
          variant="secondary"
          className="text-sm"
          onClick={() => onSelect(suggestion)}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
}