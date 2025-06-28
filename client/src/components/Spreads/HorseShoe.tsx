import type { Card } from '@shared/types';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

interface HorseShoeProps {
  past: Card | undefined;
  present: Card | undefined;
  influence: Card | undefined;
  querent: Card | undefined;
  others: Card | undefined;
  advice: Card | undefined;
  outcome: Card | undefined;
}

function HorseShoe({ past, present, influence, querent, others, advice, outcome }: HorseShoeProps) {
  return (
    <div className="grid grid-cols-7 grid-rows-4 gap-4 mx-auto text-white text-center h-full w-full border-2">
      <Droppable id="horseShoePast" className="col-start-1 row-start-1 border-1">
        {past && <Draggable id={past.name}>{past.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeOutcome" className="col-start-7 row-start-1 border-1">
        {outcome && <Draggable id={outcome.name}>{outcome.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoePresent" className="col-start-2 row-start-2 border-1">
        {present && <Draggable id={present.name}>{present.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeAdvice" className="col-start-6 row-start-2 border-1">
        {advice && <Draggable id={advice.name}>{advice.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeInfluence" className="col-start-3 row-start-3 border-1">
        {influence && <Draggable id={influence.name}>{influence.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeOthers" className="col-start-5 row-start-3 border-1">
        {others && <Draggable id={others.name}>{others.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeQuerent" className="col-start-4 row-start-4 border-1">
        {querent && <Draggable id={querent.name}>{querent.name}</Draggable>}
      </Droppable>
    </div>
  );
}

export default HorseShoe;
