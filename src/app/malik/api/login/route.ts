
import prisma from "../../_lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    });

    if (user && user.password === body.password) {
      return new Response(
        JSON.stringify({
          success: true,
          data: user
        })
      );
    }

    return new Response("Error: Invalid credentials", { status: 401 });
  } catch (error) {
    console.log(error);
    return new Response("Error: " + error, { status: 500 });
  }
}
