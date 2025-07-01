import type { Card } from '@shared/types';
import Draggable from '../Draggable';
import Droppable from '../Droppable';

interface TwoCardCrossProps {
  situation: Card | undefined;
  challenge: Card | undefined;
}

function TwoCardCross({ situation, challenge }: TwoCardCrossProps) {
  return (
    <div className="flex flex-row justify-evenly h-full relative">
      <Droppable id="twoCardSituation" className="card w-60 absolute z-10 h-full">
        {situation && <Draggable id={situation.name}>{situation.name}</Draggable>}
      </Droppable>
      <Droppable
        id="twoCardChallenge"
        className="card w-60 absolute z-20 -rotate-90 h-full bg-[#242424] top-16"
      >
        {challenge && <Draggable id={challenge.name}>{challenge.name}</Draggable>}
      </Droppable>
    </div>
  );
}

export default TwoCardCross;
