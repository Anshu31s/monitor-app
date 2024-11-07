"use client"
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <>
      <h1>Landing Page</h1>
      <Button
        onClick={() => {
          redirect("/sign-in");
        }}
      >
        Sign In
      </Button>
    </>
  );
}
