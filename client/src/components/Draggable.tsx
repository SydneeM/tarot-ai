import { useDraggable } from '@dnd-kit/core';
import type React from 'react';

interface DraggableItemProps {
  id: string;
  children: React.ReactNode;
}

function Draggable({ id, children }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  return (
    <button ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </button>
  );
}

export default Draggable;
