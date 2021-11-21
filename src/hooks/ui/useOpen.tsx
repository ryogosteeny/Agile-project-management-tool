import { RefObject, useEffect, useRef, useState } from 'react';

export interface UseOpenReturnType {
  openTargetRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  openEventHandler: () => void;
  closeEventHandler: () => void;
}

export const useOpen = () => {
  const openTargetRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openEventHandler = () => {
    setIsOpen(!isOpen);
  };

  const closeEventHandler = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e: Event) => {
    if (openTargetRef.current && !openTargetRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return { openTargetRef, isOpen, closeEventHandler, openEventHandler };
};
