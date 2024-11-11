"use client";
import React, { useCallback, useEffect, useState } from "react";
import CardComponent from "./card";
import { useStore } from "@/store/store";
import { formatDistance, subDays } from "date-fns";

function CurrentlyUpForCard() {
  const { urlDetails } = useStore();
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    const handleCurrentTime = () => {
      const response = formatDistance(
        urlDetails.currentlyUpFor ? urlDetails.currentlyUpFor : new Date(),
        new Date(),
        {
          addSuffix: true,
        }
      );
      const duration = response.replace("about", "");

      if (urlDetails.currentStatus) {
        setDescription(duration);
      }
      setTimeout(handleCurrentTime, 60000);
    };
    handleCurrentTime();
  }, [urlDetails.currentlyUpFor]);

  useEffect(() => {
    if (urlDetails.currentlyUpFor) {
      if (urlDetails.currentStatus === "UP") {
        setTitle("Currently up for");
      } else {
        setTitle("Currently Down for");
      }
    }
  }, [urlDetails.currentlyUpFor]);

  return (
    <div>
      <CardComponent title={title} description={description} />
    </div>
  );
}

export default CurrentlyUpForCard;
