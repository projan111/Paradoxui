"use client";
import React, { useContext } from 'react'
import { SessionContext } from '../context/SessionContext';

export default function Page() {
  const { loki, session } = useContext(SessionContext);
  console.log(session)
  
  return (
    <div>page</div>
  )
}
