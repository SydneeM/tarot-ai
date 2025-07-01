const spreads = [
  { type: 'oneCard', name: 'One Card' },
  { type: 'twoCardCross', name: 'Two Card Cross' },
  { type: 'threeCard', name: 'Three Card' },
  { type: 'horseShoe', name: 'Horseshoe' },
  { type: 'celticCross', name: 'Celtic Cross' },
];

interface SpreadOptionsProps {
  name: string;
  handleSpreadClick: (type: string) => void;
}

function SpreadOptions({ name, handleSpreadClick }: SpreadOptionsProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <span>{name}</span>
      <div className="flex flex-row justify-center">
        {spreads.map((spread) => (
          <button
            type="button"
            key={spread.type}
            className="first:rounded-l-md last:rounded-r-md"
            onClick={() => handleSpreadClick(spread.type)}
          >
            {spread.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SpreadOptions;
