import { privateRoutes } from "@app/common/utils/routes";
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const token = req.cookies["@AuthRegisterToken"];
  if (!token) {
    return NextResponse.rewrite("/auth/login");
  }
  const url = String(process.env.NEXT_PUBLIC_API_URL)
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
          query { 
            me {
              role {
                type
              }
            }  
          }
        `,
      }),
    })
    
    const { data, errors } = await response.json()
    if(errors) {
      throw new Error(errors[0].message)
    }

    const route = privateRoutes[req.url]

    if(!route) {
      return
    }
    
    if(!route?.roles?.some((route) => route.includes(`${data?.me?.role?.type}`))){
      return NextResponse.rewrite("/404")
    }
    return NextResponse.next();
    
  } catch (error) {
    return NextResponse.rewrite("/auth/login")
  }
}
