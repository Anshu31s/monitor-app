import { SidebarDemo } from "@/components/side-bar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-full w-full ">
      <SidebarDemo>
      <div className=" border  m-11 p-3  w-screen h-screen">
          {children}
         </div>
      </SidebarDemo>
    </div>
  );
}

export default layout;
