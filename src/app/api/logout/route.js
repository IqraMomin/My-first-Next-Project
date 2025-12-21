import { NextResponse } from "next/server";

export function POST() {
  const res = NextResponse.json({ message: "Logged out" });

  res.cookies.delete("token");

  return res;
}
