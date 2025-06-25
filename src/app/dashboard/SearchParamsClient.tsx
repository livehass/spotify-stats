"use client";

import { useSearchParams } from "next/navigation";

export default function SearchParamsClient() {
  const searchParams = useSearchParams();
  const param = searchParams.get("param") ?? "";

  return <div>Query param: {param}</div>;
}
