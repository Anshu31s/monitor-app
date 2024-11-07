import { NewMonitorForm } from "@/components/monitor/addMonitorForm";
import { Separator } from "@/components/ui/separator";
import React from "react";

function AddMonitor() {
  return (
    <div className=" p-10 ">
      <div className=" mb-3">
        <h1 className=" text-3xl font-semibold">Create monitor</h1>
      </div>
      <Separator />
      <div className=" flex gap-96 ">
        <div className=" mt-3 p-4 w-[30%] flex flex-col gap-4">
          <h2 className=" text-xl font-semibold">What to monitor</h2>
          <p className=" text-sm">
            Configure the target website you want to monitor. You'll find the
            advanced configuration below, in the advanced settings section.
          </p>
        </div>
        <NewMonitorForm />
      </div>
    </div>
  );
}

export default AddMonitor;
