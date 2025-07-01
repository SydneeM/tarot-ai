import type { Card } from '@shared/types';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

interface ThreeCardProps {
  past: Card | undefined;
  present: Card | undefined;
  future: Card | undefined;
}

function ThreeCard({ past, present, future }: ThreeCardProps) {
  return (
    <div className="flex flex-row justify-evenly h-full">
      <Droppable id="threeCardPast" className="card w-60">
        {past && <Draggable id={past.name}>{past.name}</Draggable>}
      </Droppable>
      <Droppable id="threeCardPresent" className="card w-60">
        {present && <Draggable id={present.name}>{present.name}</Draggable>}
      </Droppable>
      <Droppable id="threeCardFuture" className="card w-60">
        {future && <Draggable id={future.name}>{future.name}</Draggable>}
      </Droppable>
    </div>
  );
}

export default ThreeCard;
