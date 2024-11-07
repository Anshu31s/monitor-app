import { prisma_client } from "@/app/DB/client";
import { getUserId } from "@/lib/getUserId";
import { newMonitor } from "@/lib/type";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const userId: string = await getUserId();
    const body: newMonitor = await req.json();
 

    const newMonitor = await prisma_client.url.create({
      data: {
        ...body,
        userId: userId,
      },
    });
    

    return Response.json(
      {
        success: true,
        message: "successfully created ",
        data: newMonitor,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
