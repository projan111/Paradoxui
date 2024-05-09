"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/utils/supabase/clientRepository";
import { z } from "zod";
import LoaderIcon from "./LoaderIcon";

const formSchema = z.object({
  email: z.string().min(10, {
    message: "Email be at least 10 characters.",
  }),

  password: z.string().min(5, {
    message: "Password be at least 5 characters.",
  }),
});

export default function LoginSection() {
  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Define a submit handler
  const [isLoging, setIsLoging] = useState<boolean>(false);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoging(true);
    const { data, error } = await supabase.auth.signInWithPassword(values);

    if (error) {
      console.error("Login failed:", error.message);
      toast.error(error.message || "Something went wrong. Please try again.");
      setIsLoging(false);
      return;
    }

    if (data) {
      form.reset();
      setIsLoging(false);
      toast.success("Login successful.");
      return;
    }
  };

  const loginWithGoogle = async () => {
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: "google",
    //   options: {
    //     redirectTo: "http://localhost:3000/dashboard",
    //   },

    //   // options: {
    //   //   queryParams: {
    //   //     access_type: "offline",
    //   //     prompt: "consent",
    //   //   },
    //   // },
    // });

    //  Register super admin
    const { data, error } = await supabase.auth.signUp({
      email: "lokichaulagain@gmail.com",
      password: "Password",
      options: {
        data: {
          role: "super-admin",
          full_name: "Loki Chaulagain",
          username: "lokichaulagain",
        },
      },
    });
  };

  // //  Register super admin
  // const registerSuperAdmin = async () => {
  //   const { data, error } = await supabase.auth.signUp({
  //     email: "lokichaulagain@gmail.com",
  //     password: "Password",
  //     options: {
  //       data: {
  //         role: "super-admin",
  //         full_name: "Loki Chaulagain",
  //         username: "lokichaulagain",
  //       },
  //       emailRedirectTo: "http://localhost:3000/dashboard",
  //     },
  //   });
  // };

  useEffect(() => {
    const fetchAllUsers = async () => {
      const { data, error } = await supabase.from("auth.users").select("*");
      console.log(data);
    };
    fetchAllUsers();
  }, []);

  return (
    <section className=" h-screen flex items-center justify-center px-2  ">
      <Card className=" p-8 bg-primary-900/90 w-[350px] md:w-[420px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" ">
            <div className=" space-y-4 ">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">Enter your credentials to login to your account</p>
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className=" w-full">
                    <FormLabel>Email </FormLabel>
                    <Input
                      {...field}
                      placeholder="johndoe@gmail.com"
                    />
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormLabel>Password</FormLabel>
                      {/* <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline">
                        Forgot your password?
                      </Link> */}
                    </div>
                    <Input
                      {...field}
                      placeholder="*******"
                    />
                    <FormMessage {...field} />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full">
                {isLoging && <LoaderIcon />}
                Login
              </Button>

              {/* <Button
                onClick={loginWithGoogle}
                variant="outline"
                className="w-full">
                Login with Google
              </Button> */}

              {/* <Button
                onClick={registerSuperAdmin}
                variant="outline"
                className="w-full">
                Register Super Admin
              </Button> */}

              {/* <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="#"
                  className="underline">
                  Sign up
                </Link>
              </div> */}
            </div>
          </form>
        </Form>
      </Card>
    </section>
  );
}
