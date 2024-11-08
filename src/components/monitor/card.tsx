import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface cardProp {
  title: string;
  description: string;
}

export default function CardComponent(cardProp: cardProp) {
  return (
    <div className=" w-[300px] ">
      <Card>
        <CardHeader>
          <CardTitle className=" text-sm">{cardProp.title}</CardTitle>
          <CardDescription className=" font-bold text-xl">{cardProp.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
