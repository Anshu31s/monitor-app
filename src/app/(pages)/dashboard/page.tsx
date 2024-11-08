
import MonitoringComponent from "@/components/monitoring-urls";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/store/store";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

function Dashboard() {
  
  return (
    <div >
      <div className=" flex justify-between ">
        <h2 className=" text-primary mb-2 text-3xl font-semibold">Monitors</h2>
        <Link href={'/new-monitor'}>
          <Button>
            <PlusCircle />
            Create monitor
          </Button>
        </Link>
      </div>

      <Separator />
      <MonitoringComponent />
    </div>
  );
}

export default Dashboard;
