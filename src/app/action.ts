"use server";

import { getUserId } from "@/lib/getUserId";
import { prisma_client } from "./DB/client";
import { formSchema } from "@/components/Buttons/editProfile";
import { z } from "zod";
import { error } from "console";

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
  try {
    const userId = await getUserId();
    const response = await prisma_client.url.findMany({
      where: {
        userId: userId,
      },
    });

    return response;
  } catch (error) {
    throw new Error("something went wrong");
  }
}

export async function updateIsPaused(urlId: string, currentStatus: boolean) {
  try {
    const changePauseStatus = await prisma_client.url.update({
      where: {
        id: urlId,
      },
      data: {
        isPaused: !currentStatus,
      },
    });
    return changePauseStatus;
  } catch (error) {
    throw new Error("something went wrong");
  }
}

export async function updateUrlDetail(
  urlId: string | undefined,
  data: z.infer<typeof formSchema>
) {
  if (!urlId) {
    return new Error("Id not found");
  }
  try {
    const updateUrl = await prisma_client.url.update({
      where: {
        id: urlId,
      },
      data: {
        ...data,
      },
    });
    return updateUrl;
  } catch (error) {
    return new Error("Something went wrong");
  }
}
