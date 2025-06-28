import type { Card } from '@shared/types';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

interface OneCardProps {
  chosen: Card[];
}

function OneCard({ chosen }: OneCardProps) {
  return (
    <div className="flex flex-row justify-evenly h-full">
      <Droppable id="oneCardChosen" className="flex flex-col w-60 border-1">
        {chosen.map((card) => (
          <Draggable key={card.name} id={card.name}>
            {card.name}
          </Draggable>
        ))}
      </Droppable>
    </div>
  );
}

export default OneCard;
