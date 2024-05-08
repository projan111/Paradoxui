"use client";
import { supabase } from "@/utils/supabase/clientRepository";
import App from "next/app";
import React, { useEffect, useState } from "react";

export const SessionContext = React.createContext<any>(null);

// Working

export const SessionContextProvider = ({ children }: any) => {
  const loki = "chaulagain";
  const [session, setSession] = React.useState<any>(null);

  React.useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });
    return () => {
      // subscription.unsubscribe();
      subscription.data.subscription.unsubscribe();
    };
  }, []);

  const [currentUser, setCurrentUser] = useState<any>();
  const [currentUserRole, setcurrentUserRole] = useState<string>("");
  useEffect(() => {
    const fetch = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrentUser(user);
      setcurrentUserRole(user?.user_metadata.role);
    };

    fetch();
  }, []);

  return <SessionContext.Provider value={{ loki, session, currentUser, currentUserRole }}>{children}</SessionContext.Provider>;
};
