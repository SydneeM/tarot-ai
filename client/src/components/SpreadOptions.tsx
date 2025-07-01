const spreads = [
  { type: 'oneCard', name: 'One Card' },
  { type: 'twoCardCross', name: 'Two Card Cross' },
  { type: 'threeCard', name: 'Three Card' },
  { type: 'horseShoe', name: 'Horseshoe' },
  { type: 'celticCross', name: 'Celtic Cross' },
];

interface SpreadOptionsProps {
  handleSpreadClick: (type: string) => void;
}

function SpreadOptions({ handleSpreadClick }: SpreadOptionsProps) {
  return (
    <div className="flex flex-row w-[50%] justify-center">
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
  );
}

export default SpreadOptions;
