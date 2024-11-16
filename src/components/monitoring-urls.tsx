"use client";
import { useEffect, useState } from "react";
import { columns } from "./data-table/column";
import { DataTable } from "./data-table/dataTable";
import { url } from "@prisma/client";
import { getUrlList } from "@/app/action";
import { toast } from "sonner";

export default function MonitoringComponent() {
  const [urlList, setUrlList] = useState<url[] | []>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      setLoading(true)
      try {
        const data = await getUrlList();
        setUrlList(data);
      } catch (error) {
       toast.error("error list")
      }finally{
        setLoading(false)
      }
    };
    getUrl();
  }, []);

  return (
    <div className="mt-4 w-full">
      <DataTable columns={columns} data={urlList} isLoading={isLoading} />
    </div>
  );
}
