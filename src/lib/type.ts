import { STATUS } from "@prisma/client";

export interface newMonitor {
    url:string,
    status:STATUS,
    siteName:string,

}