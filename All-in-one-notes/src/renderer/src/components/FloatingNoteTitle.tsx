import { selectedNoteAtom } from '@renderer/store';
import { useAtomValue } from 'jotai';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { CopyButton } from '@/components'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom);

  if (!selectedNote) return null;

  return (
    <div className={twMerge('flex justify-center items-center', className)} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
      <CopyButton content={selectedNote.content || ''} /> {/* Pass content to CopyButton */}
    </div>
  );
};
