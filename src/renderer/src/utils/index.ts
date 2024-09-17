import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(...args))
}