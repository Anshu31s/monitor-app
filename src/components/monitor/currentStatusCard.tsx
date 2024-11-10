"use client";
import React from "react";
import CardComponent from "./card";
import { useStore } from "@/store/store";

function CurrentStatusCard() {
  const { urlDetails } = useStore();
  return (
    <div>
      <CardComponent
        title="Current Status"
        description={urlDetails.currentStatus}
      />
    </div>
  );
}

export default CurrentStatusCard;
