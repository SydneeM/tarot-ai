const spreads = ['One Card', 'Two Card', 'Three Card', 'Horseshoe', 'Celtic Cross'];

function SpreadOptions() {
  return (
    <div className="flex flex-row justify-around w-[50%] border-1">
      {spreads.map((spread) => (
        <span key={spread}>{spread}</span>
      ))}
    </div>
  );
}

export default SpreadOptions;
