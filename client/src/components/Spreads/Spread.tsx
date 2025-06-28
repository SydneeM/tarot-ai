import type { Card } from '@shared/types';
import ThreeCard from './ThreeCard';

interface SpreadProps {
  type: string;
  dropZones: Record<string, Card[]>;
}

function Spread({ type, dropZones }: SpreadProps) {
  return (
    <div className="flex">
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
