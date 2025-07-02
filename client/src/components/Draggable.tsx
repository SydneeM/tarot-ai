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

  //https://www.sacred-texts.com/tarot/xr/index.htm
  const style = {
    height: '100%',
    color: inSpread ? 'white' : '',
    backgroundImage: inSpread ? `url(${'/test.jpg'})` : '',
    backgroundPosition: inSpread ? 'center' : '',
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
