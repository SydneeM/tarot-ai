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
        {past && (
          <Draggable id={past.name} dropId="threeCardPast">
            {past.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="threeCardPresent" className="card w-60">
        {present && (
          <Draggable id={present.name} dropId="threeCardPresent">
            {present.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="threeCardFuture" className="card w-60">
        {future && (
          <Draggable id={future.name} dropId="threeCardFuture">
            {future.name}
          </Draggable>
        )}
      </Droppable>
    </div>
  );
}

export default ThreeCard;
