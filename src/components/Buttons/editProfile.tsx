"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDebounceCallback } from "usehooks-ts";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";
import axios from "axios";
import { Edit, LoaderCircle } from "lucide-react";
import { url } from "@prisma/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getUrlDetails, updateUrlDetail } from "@/app/action";
import { useStore } from "@/store/store";

export const formSchema = z.object({
  url: z.string(),
  siteName: z.string(),
});

const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

export function EditProfile() {
  const [url, setUrl] = useState("");
  const { urlDetails } = useStore();
  const [errorMessage, setErrorMessage] = useState("");
  const [initialUrlDetail, setInitialUrlDetail] = useState<url | null>(null);
  console.log("🚀 ~ EditProfile ~ initialUrlDetail:", initialUrlDetail);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const urlDebounced = useDebounceCallback(setUrl, 500);
  const router = useRouter();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const getDetail = await getUrlDetails(urlDetails.id);
        setInitialUrlDetail(getDetail);
        form.reset({
          url: getDetail?.url,
          siteName: getDetail?.siteName,
        });
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    getDetails();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",

      siteName: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

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
    try {
      const response: any = await updateUrlDetail(initialUrlDetail?.id, values);
      
      window.location.reload()
      toast.success("Successfully updated");

    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      toast.error("Something went wrong");
    }

    console.log(values);
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Edit />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your details here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL</FormLabel>
                      <FormControl>
                        <Input disabled={true}
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

                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      disabled={
                        isLoading || isSubmitting || errorMessage ? true : false
                      }
                    >
                      Save changes
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
