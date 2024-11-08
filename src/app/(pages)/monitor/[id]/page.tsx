"use client";
import Lottie from "lottie-react";
import { useParams } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import up_animation from "../../../../../public/Up_animation.json";
import down_animation from "../../../../../public/Down_animation.json";
import { BellIcon, CheckCheck, Edit, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/monitor/card";
import { Skeleton } from "@/components/ui/skeleton";
import MonitorChart from "@/components/monitor/chart";
import { getUrlDetails } from "@/app/action";
import { useEffect, useState } from "react";
import { url } from "@prisma/client";
import { useStore } from "@/store/store";
import TotalUptimeCard from "@/components/monitor/totalUptimeCard";
import LastChecked from "@/components/monitor/lastChecked";

export default function Page() {
  const [initialUrlDetail, setInitialUrlDetails] = useState<url | null>(null);
  const {updateDetails,urlDetails} = useStore()

  const params = useParams<{ id: string }>();
  const urlId = params.id;

  useEffect(() => {
    async function getDetails() {
      const details = await getUrlDetails(urlId);
      updateDetails({id:details?.id})
      setInitialUrlDetails(details);
    }
    getDetails();
  }, [urlId]);

  if (initialUrlDetail === null) {
    return (
      <>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </>
    );
  }

  return (
    <div>
      <div>
        <Card className=" flex justify-between">
          <CardHeader>
            <CardTitle className=" flex gap-5">
              <div>
                <Lottie
                  animationData={
                    urlDetails.currentStatus === "UP" ? up_animation : down_animation
                  }
                  loop={true}
                  className=" size-10"
                />
              </div>
              <span className=" text-xl font-semibold">
                {initialUrlDetail?.siteName}
              </span>
            </CardTitle>
            <CardDescription className=" ml-11">
              {initialUrlDetail?.url}
            </CardDescription>
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
        <TotalUptimeCard />
       <LastChecked/>
        <CardComponent title="Current Status" description="UP" />
        <CardComponent title="Uptime" description="99.99%" />
      </div>
      <div>
        <MonitorChart />
      </div>
    </div>
  );
}
