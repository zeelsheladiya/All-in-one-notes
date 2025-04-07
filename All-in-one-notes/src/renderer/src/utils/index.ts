import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const locale = (window.context && window.context.locale) || 'en-US'; // Default to 'en-US'

const dateFormatter = new Intl.DateTimeFormat(locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
