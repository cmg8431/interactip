import React, { createContext } from 'react';

export type TooltipProviderProps = {};

export const TooltipContext = createContext<TooltipProviderProps>([]);

export const TooltipProvider = () => {
  return <TooltipContext.Provider value={[]}>{}</TooltipContext.Provider>;
};
