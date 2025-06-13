import type { Card } from '@shared/types';

interface CardContainerProps {
  cards: Card[];
}

function CardContainer({ cards }: CardContainerProps) {
  return (
    <div className="flex flex-col overflow-y-auto max-h-[60%] w-80 border-1">
      {cards.map((card) => (
        <span key={card.name}>{card.name}</span>
      ))}
    </div>
  );
}

export default CardContainer;
