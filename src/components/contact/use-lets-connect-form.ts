"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  type LetsConnectFormValues,
  letsConnectSchema,
} from "@/components/contact/schema";

export const connectCopy = {
  title: "Let's connect",
  description:
    "Fill out the form below and I will get back to you as soon as possible.",
  menuDescription: "Find me around the web or send a message.",
} as const;

export function useLetsConnectForm() {
  const form = useForm<LetsConnectFormValues>({
    resolver: zodResolver(letsConnectSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<LetsConnectFormValues> = (data) => {
    console.log(data);
  };

  return { form, onSubmit };
}
