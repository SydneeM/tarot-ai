import type { Card } from '@shared/types';
import CelticCross from './CelticCross';
import HorseShoe from './HorseShoe';
import OneCard from './OneCard';
import ThreeCard from './ThreeCard';
import TwoCardCross from './TwoCard';

interface SpreadProps {
  type: string;
  dropZones: Record<string, Card[]>;
}

function Spread({ type, dropZones }: SpreadProps) {
  return (
    <div className="col-span-3">
      {type === 'oneCard' && <OneCard chosen={dropZones.oneCardChosen[0]} />}
      {type === 'twoCardCross' && (
        <TwoCardCross
          situation={dropZones.twoCardSituation[0]}
          challenge={dropZones.twoCardChallenge[0]}
        />
      )}
      {type === 'threeCard' && (
        <ThreeCard
          past={dropZones.threeCardPast[0]}
          present={dropZones.threeCardPresent[0]}
          future={dropZones.threeCardFuture[0]}
        />
      )}
      {type === 'horseShoe' && (
        <HorseShoe
          past={dropZones.horseShoePast[0]}
          present={dropZones.horseShoePresent[0]}
          influence={dropZones.horseShoeInfluence[0]}
          querent={dropZones.horseShoeQuerent[0]}
          others={dropZones.horseShoeOthers[0]}
          advice={dropZones.horseShoeAdvice[0]}
          outcome={dropZones.horseShoeOutcome[0]}
        />
      )}
      {type === 'celticCross' && (
        <CelticCross
          present={dropZones.celticCrossPresent[0]}
          challenge={dropZones.celticCrossChallenge[0]}
          past={dropZones.celticCrossPast[0]}
          future={dropZones.celticCrossFuture[0]}
          goal={dropZones.celticCrossGoal[0]}
          subconscious={dropZones.celticCrossSubconscious[0]}
          advice={dropZones.celticCrossAdvice[0]}
          influence={dropZones.celticCrossInfluence[0]}
          hopesAndFears={dropZones.celticCrossHopesAndFears[0]}
          outcome={dropZones.celticCrossOutcome[0]}
        />
      )}
    </div>
  );
}

export default Spread;
