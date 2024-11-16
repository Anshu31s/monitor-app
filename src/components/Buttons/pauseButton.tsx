"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";
import { LoaderCircle, Pause, Play } from "lucide-react";
import { useStore } from "@/store/store";

import { toast } from "sonner";
import { updateIsPaused } from "@/app/action";

function PauseButton() {
  const { urlDetails, updateDetails } = useStore();

  async function handleUpdateIsPaused() {
    try {
      const updatedStatus = await updateIsPaused(
        urlDetails.id,
        urlDetails.isPaused!
      );

      updateDetails({
        isPaused: updatedStatus.isPaused,
      });
      toast.success("successfully updated");
    } catch (error) {
      console.log("🚀 ~ handleUpdateIsPaused ~ error:", error);
      toast.error("Something went wrong");
    }
  }
  return (
    <div>
      <Button onClick={handleUpdateIsPaused}>
        {urlDetails.isPaused === null ? (
          <LoaderCircle />
        ) : urlDetails.isPaused ? (
          <>
            <Play /> Resume
          </>
        ) : (
          <>
            <Pause />
            Pause
          </>
        )}
      </Button>
    </div>
  );
}

export default PauseButton;
