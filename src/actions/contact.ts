"use server";
import {Resend} from "resend";
import { sanityClient } from "@/lib/sanity";

export const contactAction = async (formData: FormData) => {

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const date = new Date().toISOString();

  //server actions are an easier way to communicate to the database /such a nice comment harman /
  console.log(`name: ${name}, email: ${email}, message: ${message}`);



 try {


  // Create a new client document in Sanity
  const sanityResponse = await sanityClient.create({
    _type: 'client',
    name,
    email,
    message,
    status: 'new',
    createdAt: date
  }).catch((err) => {
    console.error('Failed to create Sanity document:', err);
    throw new Error('Failed to save contact information');
  });

  console.log('Sanity document created:', sanityResponse);

  
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'harmanmalova@gmail.com',
    subject: 'New Contact Form Submission',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              font-family: Arial, sans-serif;
              padding: 20px;
              background-color: #f9fafb;
            }
            .header {
              background-color: #4f46e5;
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background-color: white;
              padding: 20px;
              border-radius: 0 0 8px 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .field {
              margin-bottom: 16px;
              padding: 12px;
              background-color: #f3f4f6;
              border-radius: 6px;
            }
            .label {
              color: #6b7280;
              font-size: 14px;
              margin-bottom: 4px;
            }
            .value {
              color: #111827;
              font-size: 16px;
              margin: 0;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #6b7280;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <p class="value">${name}</p>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <p class="value">${email}</p>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <p class="value">${message}</p>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your portfolio contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `
  });
  
  console.log('Email sent successfully');
  return { success: true, message: "Thank you! Your message has been sent successfully." };
  
 } catch (error) {
  console.error('Failed to send email:', error);
  return { success: false, message: "Sorry, something went wrong. Please try again later." };
 }
}


export const getClients = async () => {
  // Adding a high limit to ensure we get all clients
  const query = `*[_type == "client"] | order(createdAt desc)[0...100]`;
  try {
    const clients = await sanityClient.fetch(query);
    console.log('Total clients fetched:', clients.length);
    return clients;
  } catch (error) {
    console.error('Failed to fetch clients:', error);
    return [];
  }
}

// await resend.emails.send({
//   from: 'Acme <onboarding@resend.dev>',
//   to: ['delivered@resend.dev'],
//   subject: 'hello world',
//   text: 'it works!',
  
