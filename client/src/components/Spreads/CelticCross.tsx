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
          <Droppable id="celticCrossPresent" className="card w-full absolute z-10 h-full">
            {present && (
              <Draggable id={present.name} dropId="celticCrossPresent">
                {present.name}
              </Draggable>
            )}
          </Droppable>
          <Droppable
            id="celticCrossChallenge"
            className="card w-full absolute z-20 -rotate-90 h-full bg-[#242424] top-4"
          >
            {challenge && (
              <Draggable id={challenge.name} dropId="celticCrossChallenge">
                {challenge.name}
              </Draggable>
            )}
          </Droppable>
        </div>
      </div>
      <Droppable id="celticCrossPast" className="col-start-1 row-start-3 card">
        {past && (
          <Draggable id={past.name} dropId="celticCrossPast">
            {past.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="celticCrossFuture" className="col-start-3 row-start-3 card">
        {future && (
          <Draggable id={future.name} dropId="celticCrossFuture">
            {future.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="celticCrossGoal" className="col-start-2 row-start-2 card">
        {goal && (
          <Draggable id={goal.name} dropId="celticCrossGoal">
            {goal.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="celticCrossSubconscious" className="col-start-2 row-start-4 card">
        {subconscious && (
          <Draggable id={subconscious.name} dropId="celticCrossSubconscious">
            {subconscious.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="celticCrossAdvice" className="col-start-4 row-start-4 card">
        {advice && (
          <Draggable id={advice.name} dropId="celticCrossAdvice">
            {advice.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="celticCrossInfluence" className="col-start-4 row-start-3 card">
        {influence && (
          <Draggable id={influence.name} dropId="celticCrossInfluence">
            {influence.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="celticCrossHopesAndFears" className="col-start-4 row-start-2 card">
        {hopesAndFears && (
          <Draggable id={hopesAndFears.name} dropId="celticCrossHopesAndFears">
            {hopesAndFears.name}
          </Draggable>
        )}
      </Droppable>
      <Droppable id="celticCrossOutcome" className="col-start-4 row-start-1 card">
        {outcome && (
          <Draggable id={outcome.name} dropId="celticCrossOutcome">
            {outcome.name}
          </Draggable>
        )}
      </Droppable>
    </div>
  );
}

export default CelticCross;
