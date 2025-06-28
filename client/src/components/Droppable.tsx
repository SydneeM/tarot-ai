import { useDroppable } from '@dnd-kit/core';

interface DroppableItemProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

function Droppable({ id, children, className }: DroppableItemProps) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} className={`${className ? className : ''}`}>
      {children}
    </div>
  );
}

export default Droppable;
