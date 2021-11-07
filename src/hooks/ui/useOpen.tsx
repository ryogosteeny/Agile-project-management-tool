import { useEffect, useRef, useState } from 'react';

export const useOpen = () => {
  const openTargetRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickOpenHandler = () => {
    setIsOpen(!isOpen);
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

  return { openTargetRef, isOpen, onClickOpenHandler };
};
