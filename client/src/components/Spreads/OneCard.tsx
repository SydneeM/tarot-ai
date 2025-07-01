import type { Card } from '@shared/types';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

interface OneCardProps {
  chosen: Card | undefined;
}

function OneCard({ chosen }: OneCardProps) {
  return (
    <div className="flex flex-row justify-evenly h-full">
      <Droppable id="oneCardChosen" className="card w-60">
        {chosen && <Draggable id={chosen.name}>{chosen.name}</Draggable>}
      </Droppable>
    </div>
  );
}

export default OneCard;
