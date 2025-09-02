import React from "react";
import { Badge } from "@/components/ui/badge";

interface AnswerProps {
  item: {
    question: string;
    answer: string;
    category: string;
  };
}

const Answer: React.FC<AnswerProps> = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 text-center max-w-xl mx-auto">
      {/* Question */}
      <b className="text-white text-lg">{item.question}</b>

      {/* Answer */}
      <p className="text-muted-foreground text-base">{item.answer}</p>

      {/* Category Tag */}
      <Badge variant="secondary" className="text-xs">
        {item.category}
      </Badge>
    </div>
  );
};

export default Answer;
