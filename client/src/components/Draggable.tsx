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
  let formattedId = id;
  if (inSpread) {
    formattedId = id
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  const style = {
    height: '100%',
    color: inSpread ? 'transparent' : '',
    backgroundImage: inSpread ? `url('/${formattedId}.png')` : '',
    backgroundPosition: inSpread ? 'center' : '',
    backgroundSize: inSpread ? '100% 100%' : '',
    borderWidth: inSpread ? '1px' : '',
    // borderColor: inSpread ? '#0000005f' : '',
    borderRadius: inSpread ? '0.375rem' : '',
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}

export default Draggable;
