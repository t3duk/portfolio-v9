"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import * as React from "react";
import {
  Controller,
  type SubmitHandler,
  type UseFormReturn,
  useForm,
} from "react-hook-form";
import { useMediaQuery } from "usehooks-ts";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Field, FieldError, FieldLabel } from "./ui/field";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  message: z
    .string()
    .min(1, "Message cannot be empty.")
    .max(1000, "Message cannot exceed 1000 characters."),
});

type LetsConnectFormValues = z.infer<typeof formSchema>;

type LetsConnectFormProps = {
  form: UseFormReturn<LetsConnectFormValues>;
  onSubmit: SubmitHandler<LetsConnectFormValues>;
  className?: string;
};

export const LetsConnect = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const form = useForm<LetsConnectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<LetsConnectFormValues> = (data) => {
    console.log(data);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <Send /> Let's connect
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Let's connect</DialogTitle>
            <DialogDescription>
              Fill out the form below and I will get back to you as soon as
              possible.
            </DialogDescription>
          </DialogHeader>
          <LetsConnectForm form={form} onSubmit={onSubmit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost">
          <Send /> Let's connect
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Let's connect</DrawerTitle>
          <DrawerDescription>
            Fill out the form below and I will get back to you as soon as
            possible.
          </DrawerDescription>
        </DrawerHeader>
        <LetsConnectForm form={form} onSubmit={onSubmit} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const LetsConnectForm = ({
  form,
  onSubmit,
  className,
}: LetsConnectFormProps) => {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("grid items-start gap-6", className)}
    >
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="email">Your email address</FieldLabel>
            <Input
              {...field}
              id="email"
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="anita@gmail.com"
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="message">Your message</FieldLabel>
            <Textarea
              {...field}
              id="message"
              aria-invalid={fieldState.invalid}
              placeholder="Let's connect..."
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type="submit">Send message</Button>
    </form>
  );
};
