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
