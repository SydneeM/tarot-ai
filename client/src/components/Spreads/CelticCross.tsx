import type { Card } from '@shared/types';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

interface CelticCrossProps {
  present: Card | undefined;
  challenge: Card | undefined;
  past: Card | undefined;
  future: Card | undefined;
  goal: Card | undefined;
  subconscious: Card | undefined;
  advice: Card | undefined;
  influence: Card | undefined;
  hopesAndFears: Card | undefined;
  outcome: Card | undefined;
}

function CelticCross({
  present,
  challenge,
  past,
  future,
  goal,
  subconscious,
  advice,
  influence,
  hopesAndFears,
  outcome,
}: CelticCrossProps) {
  return (
    <div className="grid grid-cols-[85px_85px_85px_85px] grid-rows-4 gap-x-8 gap-y-2 mx-auto h-full w-fit text-xs">
      <div className="col-start-2 row-start-3">
        <div className="flex flex-row justify-evenly h-full relative">
          <Droppable
            id="celticCrossPresent"
            className="flex flex-col w-full border-1 absolute z-10 h-full"
          >
            {present && <Draggable id={present.name}>{present.name}</Draggable>}
          </Droppable>
          <Droppable
            id="celticCrossChallenge"
            className="flex flex-col w-full border-1 absolute z-20 -rotate-90 h-full bg-[#242424] top-4"
          >
            {challenge && <Draggable id={challenge.name}>{challenge.name}</Draggable>}
          </Droppable>
        </div>
      </div>
      <Droppable id="celticCrossPast" className="col-start-1 row-start-3 border-1">
        {past && <Draggable id={past.name}>{past.name}</Draggable>}
      </Droppable>
      <Droppable id="celticCrossFuture" className="col-start-3 row-start-3 border-1">
        {future && <Draggable id={future.name}>{future.name}</Draggable>}
      </Droppable>
      <Droppable id="celticCrossGoal" className="col-start-2 row-start-2 border-1">
        {goal && <Draggable id={goal.name}>{goal.name}</Draggable>}
      </Droppable>
      <Droppable id="celticCrossSubconscious" className="col-start-2 row-start-4 border-1">
        {subconscious && <Draggable id={subconscious.name}>{subconscious.name}</Draggable>}
      </Droppable>
      <Droppable id="celticCrossAdvice" className="col-start-4 row-start-4 border-1">
        {advice && <Draggable id={advice.name}>{advice.name}</Draggable>}
      </Droppable>
      <Droppable id="celticCrossInfluence" className="col-start-4 row-start-3 border-1">
        {influence && <Draggable id={influence.name}>{influence.name}</Draggable>}
      </Droppable>
      <Droppable id="celticCrossHopesAndFears" className="col-start-4 row-start-2 border-1">
        {hopesAndFears && <Draggable id={hopesAndFears.name}>{hopesAndFears.name}</Draggable>}
      </Droppable>
      <Droppable id="celticCrossOutcome" className="col-start-4 row-start-1 border-1">
        {outcome && <Draggable id={outcome.name}>{outcome.name}</Draggable>}
      </Droppable>
    </div>
  );
}

export default CelticCross;
