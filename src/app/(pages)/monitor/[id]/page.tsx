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
import { Skeleton } from "@/components/ui/skeleton";
import MonitorChart from "@/components/monitor/chart";
import { getUrlDetails } from "@/app/action";
import { useEffect, useState } from "react";
import { url } from "@prisma/client";
import { useStore } from "@/store/store";

import LastChecked from "@/components/monitor/lastChecked";
import CurrentStatusCard from "@/components/monitor/currentStatusCard";
import CurrentlyUpForCard from "@/components/monitor/CurrentlyUpForCard";
import UptimeCard from "@/components/monitor/uptimeCard";

import PauseButton from "@/components/Buttons/pauseButton";
import { EditProfile } from "@/components/Buttons/editProfile";
import Link from "next/link";

export default function Page() {
  const [initialUrlDetail, setInitialUrlDetails] = useState<url | null>(null);

  const { updateDetails, urlDetails } = useStore();

  const params = useParams<{ id: string }>();
  const urlId = params.id;

  useEffect(() => {
    async function getDetails() {
      const details = await getUrlDetails(urlId);

      updateDetails({
        id: details?.id,
        isPaused: details?.isPaused,
      });

      setInitialUrlDetails(details);
    }
    getDetails();
  }, []);

  if (initialUrlDetail === null) {
    return (
      <>
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
        <Card className=" flex justify-between items-center">
          <CardHeader>
            <CardTitle className=" flex gap-3 items-center">
              <div>
                {!urlDetails.currentStatus ? (
                  <Skeleton className="w-[20px] h-[20px] rounded-full" />
                ) : (
                  <Lottie
                    animationData={
                      urlDetails.currentStatus === "UP"
                        ? up_animation
                        : down_animation
                    }
                    loop={true}
                    className=" size-10"
                  />
                )}
              </div>
              <span className=" text-3xl font-semibold">
                {initialUrlDetail?.siteName}
              </span>
            </CardTitle>
            <CardDescription className=" ml-11">
              <Link href={initialUrlDetail.url}>
                <span className=" text-blue-500 underline">
                  {initialUrlDetail?.targetDomain}
                </span>
              </Link>
            </CardDescription>
          </CardHeader>
          <div className=" p-6 flex gap-5 w-[400px] mr-2">
            <PauseButton />
            <Button>
              <BellIcon />
              Test Notification
            </Button>
            <EditProfile />
          </div>
        </Card>
      </div>
      <div className=" flex flex-wrap gap-5 mt-5">
        <CurrentlyUpForCard />
        <LastChecked />
        <CurrentStatusCard />
        <UptimeCard />
      </div>
      {/* <div>
        <MonitorChart />
      </div> */}
    </div>
  );
}
