import prisma from "~~/lib/prisma.mjs";
export default defineEventHandler(async (event) => {
  if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const newStudent = await prisma.student.create({
      data: {
        name: body.name,
        program: body.program,
      },
    });
    console.log("New Student added", `${newStudent.name}`);
    return { success: true };
  }

  if (event.node.req.method === "GET") {
    const students = await prisma.student.findMany();
    return students;
  }
});
