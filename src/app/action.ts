"use server";

import { getUserId } from "@/lib/getUserId";
import { prisma_client } from "./DB/client";

//get url Details
export async function getUrlDetails(urlId: string) {
  try {
    const details = await prisma_client.url.findUnique({
      where: {
        id: urlId,
      },
      include: {
        incident: {
          orderBy: {
            endTime: "desc",
          },
          take: 1,
        },
        pingLog: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
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
        incident: {
          orderBy: {
            endTime: "desc",
          },
          take: 1,
        },
        pingLog: {
          orderBy: {
            createdAt: "desc",
          },
          take: 1,
        },
      },
    });

 
    return details;
  } catch (error) {
    console.log("🚀 ~ PollUrl ~ error:", error);
  }
}

export async function getUrlList() {
  const userId = await getUserId();
  const response = await prisma_client.url.findMany({
    where: {
      userId: userId,
    },
  });

  return response;
}
