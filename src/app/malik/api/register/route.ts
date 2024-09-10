import prisma from "../../_lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const create = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password
      }
    });
    return new Response(
      JSON.stringify({
        success: true,
        data: create
      })
    );
  } catch (error) {
    return new Response("Error: " + error, { status: 500 });
  }
}
