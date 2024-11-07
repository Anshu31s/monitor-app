import axios from "axios";
import { error } from "console";
import { stat } from "fs";

export async function POST(req: Request) {
  const { url } = await req.json();
  try {
    if (!url) {
      return Response.json(
        {
          success: false,
          message: "Invalid request",
        },
        {
          status: 403,
        }
      );
    }

    const response = await axios.get(url, { timeout: 10000 });
    if (response.status == 200) {
      return Response.json(
        {
          success: true,
          message: "status UP",
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "status DOWN",
      },
      {
        status: 500,
      }
    );
  }
}
