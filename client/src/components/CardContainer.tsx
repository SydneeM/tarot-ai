import type { Card } from '@shared/types';
import Draggable from './Draggable';
import Droppable from './Droppable';

interface CardContainerProps {
  cards: Card[];
  dropZoneId: string;
}

function CardContainer({ cards, dropZoneId }: CardContainerProps) {
  return (
    <Droppable id={dropZoneId} className="flex flex-col overflow-y-auto w-80 border-1">
      {cards?.map((card) => (
        <Draggable key={card.name} id={card.name}>
          {card.name}
        </Draggable>
      ))}
    </Droppable>
  );
}

export default CardContainer;
