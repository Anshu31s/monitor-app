"use client";
import React, { useEffect, useState } from "react";
import CardComponent from "./card";
import { useStore } from "@/store/store";
import { PollUrl } from "@/app/action";
import { formatDistance, subMinutes } from "date-fns";
import { Skeleton } from "../ui/skeleton";
import getCurrentUpFor from "@/lib/getCurrentUpFor";

function LastChecked() {
  const { urlDetails, updateDetails } = useStore();

  const [lastCheckedTime, setLastCheckedTime] = useState<string | null>(null);

  useEffect(() => {
    const poll = async () => {
      const data = await PollUrl(urlDetails.id);
      updateDetails({
        id: data?.id,
        currentStatus: data?.status,
        currentlyUpFor: data?.createdAt,
        lastChecked: data?.pingLog[0] ? data.pingLog[0].createdAt : new Date(),
        monitoringStartTime: data?.createdAt,
        uptimeInMinutes: data?.totalUptime,
      });

      setTimeout(poll, 120000);
    };

    poll();
  }, []);

  useEffect(() => {
    const timeCheck = () => {
      const response = formatDistance(
        urlDetails.lastChecked ? urlDetails.lastChecked : new Date(),
        new Date(),
        {
          addSuffix: true,
        }
      );

      const result = response.replace("about", "");
      setLastCheckedTime(result);
      setTimeout(timeCheck, 60000);
    };
    timeCheck();
  }, [urlDetails.lastChecked]);

  return (
    <div>
      <CardComponent title="Last Checked" description={lastCheckedTime} />
    </div>
  );
}

export default LastChecked;
