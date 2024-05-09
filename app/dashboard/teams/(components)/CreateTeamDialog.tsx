"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/utils/supabase/clientRepository";

type Props = {
  setRefreshNow: React.Dispatch<React.SetStateAction<boolean>>;
};

const formSchema = z.object({
  full_name: z.string().min(8, {
    message: "Full Name must be at least 8 characters.",
  }),

  username: z.string().min(4, {
    message: " Username must be at least 4 characters.",
  }),

  email: z.string().min(10, {
    message: "Email name must be at least 10 characters.",
  }),

  password: z.string().min(7, {
    message: "Password must be at least 7 characters.",
  }),

  role: z.string().min(1, {
    message: "Role is required.",
  }),
});

export default function CreateTeamDialog({ setRefreshNow }: Props) {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      username: "",
      email: "",
      password: "",
      role: "",
    },
  });

  // Define a submit handler
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsCreating(true);

    const { data, error } = await supabase.auth.admin.createUser({
      email: values.email,
      password: values.password,
      email_confirm: true,
      user_metadata: {
        full_name: values.full_name,
        username: values.username,
        role: values.role,
      },
      // role: "something"   // only predefined roles can be assigned 
    });

    if (error) {
      toast.error(error.message || "An error occurred during signup. Please try again.");
      setIsCreating(false);
      return;
    }

    if (data) {
      setRefreshNow(true);
      form.reset();
      setIsCreating(false);
      toast.success("User registered successfully.");
      return;
    }
  };

  // const { data: user, error } = await supabase.auth.admin.updateUserById("a7cc2481-1f47-4b27-9e74-2fa4a6b1502f", {
  //   email: "new@email.com",
  //   app_metadata: {
  //     full_name: "updated",
  //   },
  //   user_metadata:{
  //     role:"test-admin"
  //   }
  // });

  // const { data, error } = await supabase.auth.signUp({
  //   email: values.email,
  //   password: values.password,
  //   options: {
  //     data: {
  //       role: values.role,
  //       full_name: values.full_name,
  //       username: values.username,
  //     },
  //   },
  // });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Register New User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Register new user</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when youre done.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
           <div className=" grid sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name*</FormLabel>
                    <Input
                      placeholder="John Doe"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username*</FormLabel>
                    <Input
                      placeholder="johndoe"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <Input
                      placeholder="johndoe@gmail.com"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password*</FormLabel>
                    <Input
                      placeholder="*******"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role </FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        onValueChange={field.onChange}
                        defaultValue={field.name}
                        value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Roles</SelectLabel>
                            {roles.map((item) => (
                              <SelectItem
                                key={item.id}
                                value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className=" flex justify-end mt-8">
                <Button
                  type="submit"
                  disabled={isCreating}>
                  {isCreating && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                  {isCreating ? " Please wait" : "Register user"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

const roles = [
  // {
  //   id: 1,
  //   label: "Admin",
  //   value: "admin",
  // },

  {
    id: 2,
    label: "Team",
    value: "team",
  },
];
