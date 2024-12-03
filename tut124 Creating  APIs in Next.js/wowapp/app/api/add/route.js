import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json()
    console.log(data)
    return NextResponse.json({Success: true, data})
}



// export async function GET(request){}
// export async function HEAD(request){}
// export async function PUT(request){}
// export async function DELETE(request){}
// export async function PATECH(request){}

// //  if `OPTION` is not defined, Next.js will automatically implememt `OPTIONS` and set 
// //  the approriate Response `Allow` Header depending on the other mmedhod defined in the route hanlder.
// export async function OPTIONS(request) {}

