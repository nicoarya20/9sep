import prisma from "../../_lib/prisma";

export async function GET() {
  try {
    const user = await prisma.user.findMany();

    return new Response(
      JSON.stringify({
        data: user
      })
    );
  } catch (error) {
    return new Response("Error: " + error, { status: 500 });
  }
}
