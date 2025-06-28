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
    <div className="flex flex-row justify-around w-[50%] border-1">
      {spreads.map((spread) => (
        <button type="button" key={spread.type} onClick={() => handleSpreadClick(spread.type)}>
          {spread.name}
        </button>
      ))}
    </div>
  );
}

export default SpreadOptions;
