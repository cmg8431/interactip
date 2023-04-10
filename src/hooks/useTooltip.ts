import { useContext } from 'react';
import { TooltipContext } from '..';

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context)
    throw new Error('Enabled tooltips must be used within a tooltip provider');

  return context;
};
