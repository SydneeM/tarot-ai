import { DndContext, type DragEndEvent, closestCenter } from '@dnd-kit/core';
import { useState } from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

const itemConstraints: Record<string, string[]> = {
  drag: ['drop', 'drop1'],
  drag1: ['drop', 'drop1'],
  drag2: ['drop1', 'drop2'],
};

const initialContainers: Record<string, string[]> = {
  drop: ['drag', 'drag1'],
  drop1: [],
  drop2: ['drag2'],
};

const droppableIds = ['drop', 'drop1', 'drop2'];

function Test() {
  const [containers, setContainers] = useState(initialContainers);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const activeId = String(active.id);
    const overId = String(over.id);

    const allowedDrops = itemConstraints[activeId];
    if (!allowedDrops.includes(overId)) return;

    setContainers((prev) => {
      const newContainers: Record<string, string[]> = {
        ...prev,
      };

      for (const key of droppableIds) {
        newContainers[key] = newContainers[key].filter((id) => id !== activeId);
      }

      newContainers[overId] = [...newContainers[overId], activeId];
      return newContainers;
    });
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Droppable id="drop">
          <p>Drop 1</p>
          {containers['drop'].map((id) => (
            <Draggable key={id} id={id}>
              {id}
            </Draggable>
          ))}
        </Droppable>
        <Droppable id="drop1">
          <p>Drop 2</p>
          {containers['drop1'].map((id) => (
            <Draggable key={id} id={id}>
              {id}
            </Draggable>
          ))}
        </Droppable>
        <Droppable id="drop2">
          <p>Drop 3</p>
          {containers['drop2'].map((id) => (
            <Draggable key={id} id={id}>
              {id}
            </Draggable>
          ))}
        </Droppable>
      </div>
    </DndContext>
  );
}

export default Test;
