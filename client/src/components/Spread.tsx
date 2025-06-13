import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';
import { useState } from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Spread() {
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>;

  return (
    <div className="flex flex-row gap-x-4">
      <DndContext onDragEnd={handleDragEnd}>
        {!parent ? draggable : null}
        <Droppable id="droppable">{parent === 'droppable' ? draggable : 'Drop here'}</Droppable>
        <Droppable id="droppable1">{parent === 'droppable1' ? draggable : 'Drop here'}</Droppable>
        <Droppable id="droppable2">{parent === 'droppable2' ? draggable : 'Drop here'}</Droppable>
      </DndContext>
    </div>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    setParent(over ? over.id : null);
  }
}

export default Spread;
