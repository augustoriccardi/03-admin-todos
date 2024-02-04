//Snippet "rag"

import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({
    method: "GET",
    hola: "mundo",
  });
}
export async function POST(request: Request) {
  return NextResponse.json({
    method: "POST",
    hola: "mundo",
  });
}
