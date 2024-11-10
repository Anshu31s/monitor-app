import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

interface cardProp {
  title: string | null;
  description: string | null;
}

export default function CardComponent(cardProp: cardProp) {
  return (
    <div className=" w-[300px] ">
      <Card>
        <CardHeader>
          <CardTitle className=" text-sm">
            {cardProp.title ? (
              <span className=" text-gray-400">{cardProp.title}</span>
            ) : (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            )}
          </CardTitle>
          <CardDescription className=" font-semibold text-xl">
            {cardProp.description ? (
              <span className=" text-white">{cardProp.description}</span>
            ) : (
              <Skeleton className="w-[100px] h-[20px] rounded-full" />
            )}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
