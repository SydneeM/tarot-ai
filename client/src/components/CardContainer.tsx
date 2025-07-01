import type { Card } from '@shared/types';
import Draggable from './Draggable';
import Droppable from './Droppable';

interface CardContainerProps {
  cards: Card[];
  name: string;
  dropZoneId: string;
}

function CardContainer({ cards, name, dropZoneId }: CardContainerProps) {
  return (
    <Droppable id={dropZoneId} className="flex flex-col overflow-y-auto w-60 gap-y-2">
      <span>{name}</span>
      <div className="flex flex-col overflow-y-auto rounded-md">
        {cards?.map((card) => (
          <Draggable dropId={dropZoneId} key={card.name} id={card.name}>
            {card.name}
          </Draggable>
        ))}
      </div>
    </Droppable>
  );
}

export default CardContainer;
