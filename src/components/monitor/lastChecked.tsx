"use client";
import React, { useEffect } from "react";
import CardComponent from "./card";
import { useStore } from "@/store/store";
import { PollUrl } from "@/app/action";

function LastChecked() {
  const { urlDetails, updateDetails } = useStore();

  useEffect(() => {
    const poll = async () => {
      const data = await PollUrl(urlDetails.id);

      updateDetails({
        currentStatus: data?.status,
        currentlyUpFor: "20 Days",
        lastChecked: "2 min",
      });

      setTimeout(poll, 240000);
    };

    poll();
  }, []);

  return (
    <div>
      <CardComponent title="Last Checked" description="3 Min" />
    </div>
  );
}

export default LastChecked;
