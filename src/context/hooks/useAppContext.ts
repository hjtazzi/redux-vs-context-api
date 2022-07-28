import { Context, useContext } from "react";

export const useAppContext = <ContextType>(context: Context<ContextType>) => {
   const ctx = useContext(context);
   if (ctx === undefined)
      throw new Error("useAppContext must be inside a Provider with a value");
   return ctx;
};