import { URL, columns } from "./data-table/column";
import { DataTable } from "./data-table/dataTable";

export default async function MonitoringComponent() {
  const data: URL[] = [
    {
      id: "728ed52f",
      ReqTime: "3 Min",
      status: "UP",
      SiteName: "Google.com",
    },
    {
      id: "728ed52f",
      ReqTime: "3 Min",
      status: "UP",
      SiteName: "Google.com",
    },
  ];

  return (
    <div className="container mx-auto py-10 w-[100]">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
