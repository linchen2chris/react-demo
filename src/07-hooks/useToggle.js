import { useState } from "react";
export const useToggle = () => {
  const [open, setOpen] = useState(false);

  return { open, toggle: () => setOpen(!open) };
};
