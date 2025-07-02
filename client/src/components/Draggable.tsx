import { useDraggable } from '@dnd-kit/core';
import type React from 'react';

interface DraggableItemProps {
  id: string;
  dropId: string;
  children: React.ReactNode;
  className?: string;
}

function Draggable({ id, dropId, children }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id,
  });

  const inSpread = dropId !== 'major' && dropId !== 'minor';

  const style = {
    height: '100%',
    color: inSpread ? 'white' : '',
    backgroundColor: inSpread ? '#1e2341' : '',
    borderWidth: inSpread ? '1px' : '',
    borderColor: inSpread ? '#0000005f' : '',
    borderRadius: inSpread ? '0.375rem' : '',
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}

export default Draggable;
