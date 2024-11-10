"use client";
import React, { useCallback, useEffect, useState } from "react";
import CardComponent from "./card";
import { useStore } from "@/store/store";
import { formatDistance, subDays } from "date-fns";

function CurrentlyUpForCard() {
  const { urlDetails } = useStore();
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  console.log("🚀 ~ CurrentlyUpForCard ~ description:", description)

  const handleCurrentTime = (date: Date) => {
   
    const response = formatDistance(date!, new Date(), {
      addSuffix: true,
    });
    const duration = response.replace("about", "");

    setDescription(duration);
  };

  useEffect(() => {
    if (urlDetails.currentlyUpFor) {
      if (urlDetails.currentStatus === "UP") {
        setTitle("Currently up for");
        
        
        handleCurrentTime(urlDetails.currentlyUpFor);
      } else {
        setTitle("Currently Down for");
        handleCurrentTime(urlDetails.currentlyUpFor!);
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
