"use client"

import { Header } from "@/components/Header";
import { CountProvider } from "@/contexts/CountContext";
import { useState } from "react";

const Page = () => {
  return (
    <div className="mx-auto max-w-lg ">
      <CountProvider>
        <Header />
      </CountProvider>

    </div>
  )
}
export default Page;     