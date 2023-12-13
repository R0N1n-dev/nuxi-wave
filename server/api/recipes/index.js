import prisma from "~/lib/prisma.mjs";
export default defineEventHandler(async (event) => {
  if (event.node.req.method === "POST") {
    const body = await readBody(event);
    const newRecipe = await prisma.recipe.create({
      data: {
        name: body.name,
        origin: body.origin,
        description: body.description,
        categories: body.categories,
        ingredients: body.ingredients,
        steps: body.steps,
        image: body.image,
      },
    });
    console.log("New Recipe added", `${newRecipe.name}`);
    return { success: true };
  }

  if (event.node.req.method === "GET") {
    const recipes = await prisma.recipe.findMany();
    return recipes;
  }
});
