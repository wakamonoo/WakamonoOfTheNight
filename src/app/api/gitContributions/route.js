import { NextResponse } from "next/server";
import { getTodaysContributions } from "@/lib/github";

export async function GET() {
  const contributions = await getTodaysContributions();
  return NextResponse.json({ contributions });
}
