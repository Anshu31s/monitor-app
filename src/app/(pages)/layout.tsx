import { SidebarDemo } from "@/components/side-bar";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full">
      <SidebarDemo>
      <div className="border rounded-lg w-full p-4 m-4">
          {children}
         </div>
      </SidebarDemo>
    </div>
  );
}

export default layout;
