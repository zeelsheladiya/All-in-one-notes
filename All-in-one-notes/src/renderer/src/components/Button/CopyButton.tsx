import { ActionButton, ActionButtonProps } from '@/components';
import React from 'react';
import { FiCopy } from 'react-icons/fi';

interface CopyButtonProps extends ActionButtonProps {
  content: string; // Add content as a required prop
}

export const CopyButton: React.FC<CopyButtonProps> = ({ content, ...props }) => {
  const handleCopyContent = async () => {
    if (content) {
      await navigator.clipboard.writeText(content); // Copy content to clipboard
      alert('Content copied to clipboard!');
    } else {
      alert('No content to copy!');
    }
  };

  return (
    <ActionButton onClick={handleCopyContent} {...props}>
      {/*<FiCopy className="w-4 h-4 text-zinc-300" />*/}
      Copy
    </ActionButton>
  );
};
