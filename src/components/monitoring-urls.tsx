"use client";
import { useEffect, useState } from "react";
import { columns } from "./data-table/column";
import { DataTable } from "./data-table/dataTable";

import { url } from "@prisma/client";
import { getUrlList } from "@/app/action";

export default function MonitoringComponent() {
  const [urlList, setUrlList] = useState<url[] | []>([]);

  useEffect(() => {
    const getUrl = async () => {
      const data = await getUrlList();
      setUrlList(data);
    };
    getUrl();
  }, []);

  return (
    <div className="container mx-auto py-10 w-[100]">
      <DataTable columns={columns} data={urlList} />
    </div>
  );
}
