import { useContext } from "react";
import { DrawerContext } from "../contextProvider/DrawerContext";

const useDrawer = () => {
   const context = useContext(DrawerContext);
   if(!context){
    throw new Error("useCheckout must be used inside CheckoutProvider");
   }
   return context;
};

export default useDrawer;