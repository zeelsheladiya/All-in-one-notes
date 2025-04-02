import { ActionButton, ActionButtonProps } from '@/components'
import { LiaFileSignatureSolid } from "react-icons/lia";

export const NewNoteButton = ({ ...props}: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <LiaFileSignatureSolid clasName="w-4 h-4 text-zinc-300"/>
    </ActionButton>
  )
}
