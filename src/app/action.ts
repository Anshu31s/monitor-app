"use server";

import { prisma_client } from "./DB/client";

//get url Details
export async function getUrlDetails(urlId: string) {
  try {
    const details = await prisma_client.url.findUnique({
      where: {
        id: urlId,
      },
    });
    return details;
  } catch (error) {
    throw new Error("something went wrong");
  }
}

export async function PollUrl(urlId: string) {
  try {
    const details = await prisma_client.url.findUnique({
      where: {
        id: urlId,
      },
      include: {
        pingLog: {
          orderBy: {
            createdAt: "desc",
          },take:1
        },
      },
    });
    console.log("🚀 ~ PollUrl ~ details:", details);
    return details;
  } catch (error) {
    console.log("🚀 ~ PollUrl ~ error:", error);
  }
}
