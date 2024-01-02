"use server";

export const contactAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  //server actions are an easier way to communicate to the database
  console.log(`name: ${name}, email: ${email}, message: ${message}`);
};
