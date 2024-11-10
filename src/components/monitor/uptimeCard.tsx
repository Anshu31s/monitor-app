import React, { useEffect, useState } from "react";
import CardComponent from "./card";
import { useStore } from "@/store/store";
import { getMonitoringPercentage } from "@/lib/getUptimePercent";

function UptimeCard() {
  const { urlDetails } = useStore();
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    const getUptime = getMonitoringPercentage(
      urlDetails.uptimeInMinutes!,
      urlDetails.monitoringStartTime!
    );
    setTitle("Uptime ");
    if(getUptime === 0){

      setDescription('-- -');
      return
    }
    setDescription(getUptime.toString());
  }, [urlDetails.uptimeInMinutes]);

  return (
    <div>
      <CardComponent title={title} description={description} />
    </div>
  );
}

export default UptimeCard;
