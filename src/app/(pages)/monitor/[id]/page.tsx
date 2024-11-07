"use client";

import { useParams } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellIcon, CheckCheck, Edit, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/monitor/card";
import LinePlot from "@/components/monitor/chart";

export default function Page() {
  const params = useParams<{ id: string }>();

  
  return (
    <div>
      <div>
        <Card className=" flex justify-between">
          <CardHeader>
            <CardTitle className=" flex gap-5">
              <CheckCheck />
              Site Name
            </CardTitle>
            <CardDescription className=" ml-11">Site URL</CardDescription>
          </CardHeader>
          <div className=" p-6 flex gap-5 w-[30%]">
            <Button>
              <Pause />
              Pause
            </Button>
            <Button>
              <BellIcon />
              Test Notification
            </Button>
            <Button>
              <Edit />
              Edit
            </Button>
          </div>
        </Card>
      </div>
      <div className=" flex gap-5 mt-5">
        <CardComponent title="Total Uptime" description="15 days" />
        <CardComponent title="Last Checked" description="3 Min" />
        <CardComponent title="Current Status" description="UP" />
        <CardComponent title="Uptime" description="99.99%" />
      </div>
      <div>
        <LinePlot/>
      </div>
    </div>
  );
}
