"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase/clientRepository";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../context/SessionContext";

export default function Page() {
  const [component, setComponent] = useState<any>();
  useEffect(() => {
    const fetch = async () => {
      const { data, error, status } = await supabase.from("Component").select().eq("id", 67).single();
    //   const { data, error, status } = await supabase
    //     .from("Component")
    //     .select(
    //       `
      
    //   user_id(*)
      
      
    //   `
    //     )
    //     .eq("id", 66)
    //     .single();

      //       let { data, error, status } = await supabase.from("Component").select(`
      //   some_column,
      //   other_table (
      //     foreign_key
      //   )
      // `);

      if (error) {
        console.error("Failed to fetch component:", error.message);
        return;
      }

      if (status === 200 && data) {
        setComponent(data);
      }
    };

    fetch();
  }, []);
  console.log(component);

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "lokichaulagain1@gmail.com",
      password: "Password",
      options: {
        data: {
          key: "value",
          role: "adminhai",
        },
      },
    });
    // console.log(data);
    // console.log(error);
  };

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "lokichaulagain@gmail.com",
      password: "Password",
    });
    // console.log(data);
    // console.log(error);
  };

  const { loki, session } = useContext(SessionContext);
//   console.log(loki);
//   console.log(session);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  };

  return (
    <div>
      <div className=" h-screen flex items-center justify-center">
        <Button onClick={handleRegister}>Register</Button>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
}
