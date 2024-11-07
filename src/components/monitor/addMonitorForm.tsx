"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { useDebounceCallback } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { STATUS } from "@prisma/client";
import { data } from "framer-motion/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  url: z.string(),
  siteName: z.string(),
  reqTime: z.string(),
});

const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

export function NewMonitorForm() {
  const [url, setUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const urlDebounced = useDebounceCallback(setUrl, 500);
  const router = useRouter();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "https://",
      reqTime: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting
  console.log("🚀 ~ NewMonitorForm ~ isSubmitting:", isSubmitting);

  useEffect(() => {
    if (url) {
      const validateUrl = async () => {
        try {
          setSuccessMessage("");
          setErrorMessage("");
          setIsLoading(true);
          const isValidFormat = urlRegex.test(url);
          if (!isValidFormat) {
            setErrorMessage("Invalid URL Format");
            return;
          }

          const response = await axios.post("api/check-status", { url });
          console.log("🚀 ~ validateUrl ~ response:", response);
          if (response.status === 200) {
            setSuccessMessage(response.data.message);
            return;
          }
          throw new Error("something went wrong");
        } catch (error) {
          console.log("🚀 ~ validateUrl ~ error:", error);
          setErrorMessage("Seems Down");
        } finally {
          setIsLoading(false);
        }
      };
      validateUrl();
    }
  }, [url]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let status: STATUS;
    if (successMessage) {
      status = "UP";
    } else {
      status = "DOWN";
    }

    try {
      const response = await axios.post("/api/add-monitor", {
        ...values,
        reqTime: Number(values.reqTime),
        status,
      });
      router.push(`/monitor/${response.data.data.id}`);
      toast.success(response.data.message);
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      toast.error("Something went wrong");
    }

    console.log(values);
  }
  return (
    <div className="  w-[50%] h-auto mt-3 ">
      <Card className=" p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        urlDebounced(e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    {isLoading ? (
                      <LoaderCircle className=" size-4 animate-spin" />
                    ) : errorMessage ? (
                      <span className=" ml-1 text-sm text-red-600">
                        {errorMessage}
                      </span>
                    ) : successMessage ? (
                      <span className=" ml-1 text-sm text-green-500">
                        {successMessage}
                      </span>
                    ) : null}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="siteName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Monitor Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example.com"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reqTime"
              render={({ field }) => (
                <FormItem className="text-left">
                  <FormLabel className="font-semibold text-gray-700">
                    Monitor Interval
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                        <SelectValue placeholder="Select monitor interval " />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="3 ">3 Min</SelectItem>
                      <SelectItem value="5">5 Min</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading || isSubmitting}>
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
