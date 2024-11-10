import { prisma_client } from "@/app/DB/client";
import { incident } from "@prisma/client";

async function getCurrentUpFor(
  urlId: string,
  status: "UP" | "DOWN",
  incident: incident
) {
  const time = await prisma_client.url.findUnique({
    where: {
      id: urlId,
    },
  });

  if (status == "UP") {
    if (incident.endTime == null) {
      incident.endTime = time?.createdAt || null;
    }

    return incident.endTime;
  } else {
    return incident.startTime;
  }
}

export default getCurrentUpFor;
