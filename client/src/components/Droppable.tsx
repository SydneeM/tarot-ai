import { useDroppable } from '@dnd-kit/core';

interface DroppableItemProps {
  id: string;
  children: React.ReactNode;
}

function Droppable({ id, children }: DroppableItemProps) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div ref={setNodeRef} className="w-50 border-1">
      {children}
    </div>
  );
}

export default Droppable;
