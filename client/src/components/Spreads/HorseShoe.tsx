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
    <div className="grid grid-cols-[85px_85px_85px_85px_85px_85px_85px] grid-rows-4 gap-x-2 mx-auto h-full w-fit text-xs">
      <Droppable id="horseShoePast" className="col-start-1 row-start-1 card">
        {past && <Draggable id={past.name}>{past.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeOutcome" className="col-start-7 row-start-1 card">
        {outcome && <Draggable id={outcome.name}>{outcome.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoePresent" className="col-start-2 row-start-2 card">
        {present && <Draggable id={present.name}>{present.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeAdvice" className="col-start-6 row-start-2 card">
        {advice && <Draggable id={advice.name}>{advice.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeInfluence" className="col-start-3 row-start-3 card">
        {influence && <Draggable id={influence.name}>{influence.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeOthers" className="col-start-5 row-start-3 card">
        {others && <Draggable id={others.name}>{others.name}</Draggable>}
      </Droppable>
      <Droppable id="horseShoeQuerent" className="col-start-4 row-start-4 card">
        {querent && <Draggable id={querent.name}>{querent.name}</Draggable>}
      </Droppable>
    </div>
  );
}

export default HorseShoe;
