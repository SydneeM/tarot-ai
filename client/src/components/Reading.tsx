import { Dialog, DialogPanel } from '@headlessui/react';

interface ReadingProps {
  data: string;
  open: boolean;
  handleOpen: (type: boolean) => void;
}

function Reading({ data, open, handleOpen }: ReadingProps) {
  return (
    <Dialog open={open} onClose={() => handleOpen(false)} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 border-4">
        <DialogPanel className="w-[75%] h-full bg-[#fffffff2] rounded-lg p-20 flex flex-row items-center">
          <p className="text-xl">{data}</p>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Reading;
