import type { Card } from '@shared/types';
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
    </div>
  );
}

export default Spread;
