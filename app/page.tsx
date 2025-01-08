"use client";
import React from "react";
import { Link, Button } from "@nextui-org/react";
export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 h-screen">
      <Link href="/home">
        <Button color="primary"> Start</Button>
      </Link>

    </section>
  );
}