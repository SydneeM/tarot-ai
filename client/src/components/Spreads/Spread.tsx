import type { Card } from '@shared/types';
import OneCard from './OneCard';
import ThreeCard from './ThreeCard';

interface SpreadProps {
  type: string;
  dropZones: Record<string, Card[]>;
}

function Spread({ type, dropZones }: SpreadProps) {
  return (
    <div className="col-span-3">
      {type === 'oneCard' && <OneCard chosen={dropZones.oneCardChosen} />}
      {type === 'threeCard' && (
        <ThreeCard
          past={dropZones.threeCardPast}
          present={dropZones.threeCardPresent}
          future={dropZones.threeCardFuture}
        />
      )}
    </div>
  );
}

export default Spread;
