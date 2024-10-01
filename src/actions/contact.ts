"use server";
import {Resend} from "resend";

export const contactAction = async (formData: FormData) => {

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  //server actions are an easier way to communicate to the database /such a nice comment harman /
  console.log(`name: ${name}, email: ${email}, message: ${message}`);



 try {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: email,
    to: 'harmanmalova@gmail.com',
    subject: 'Hello World',
    html: `<p>Congrats ${name}  on sending your <strong>first email</strong> this creates new opportunities going forward. </p>`
  });
  
 } catch (error) {
  console.log(error, 'Something went wrong');
  
 }
console.log('Email sent successfully');
  return {success: true};
};





// await resend.emails.send({
//   from: 'Acme <onboarding@resend.dev>',
//   to: ['delivered@resend.dev'],
//   subject: 'hello world',
//   text: 'it works!',
  
