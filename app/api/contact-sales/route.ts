import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

import { IFormInput } from "@/types/form";
import ValidationFormSchema from "@/formschema/sales-connect-formschema";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  const fromName = process.env.NEXT_PUBLIC_SENDGRID_FROM_NAME as string
  const fromEmail = process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string

  // this email should be the same with 'from email' because this email will send to our personal email
  const replyTo = process.env.NEXT_PUBLIC_SENDGRID_REPLY_TO_EMAIL as string

  try {
    const data: IFormInput = await request.json();

    // try revalidating form
    await ValidationFormSchema.validate(data, {
      abortEarly: false,
    });

    const msg: sgMail.MailDataRequired = {
      to: replyTo,
      from: {
        email: fromEmail,
        name: fromName
      },
      replyTo: data.work_email,
      subject: `Zanbio: website activity from ${data.work_email}`,
      html: `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Zanbio</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
            </style>
        </head>
        <body>
            <div style="background-color: #EAEBED; font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: auto;">
                <!-- Header -->
                <div style="padding: 16px 0; text-align: center">
                    <h1 style="font-size: 24px; font-weight: bold; color: #1c2433; margin-bottom: 0; color: #0052CC;">Zanbio</h1>
                </div>
                <!-- Content -->
                <div style="background-color: white; padding: 24px; margin: 0 24px; border-radius: 8px;">
                    <p style="font-size: 16px; margin-bottom: 0;">Hi,</p>
                    <p style="font-size: 16px;">There is a new message from user!</p>
                    <div style="margin: 16px 0; color: black;">
                        <div style="border-bottom: 1px solid #acacac36; padding: 8px 0;">
                            <h5 style="font-size: 16px; margin-bottom: 4px;">Full Name</h5>
                            <h6 style="font-size: 14px; font-weight: normal; color: #1c2433;">${data.full_name}</h6>
                        </div>
                        <div style="border-bottom: 1px solid #acacac36; padding: 8px 0;">
                            <h5 style="font-size: 16px; margin-bottom: 4px;">Work Email</h5>
                            <h6 style="font-size: 14px; font-weight: normal; color: #1c2433;">
                                <a href="mailto:${data.work_email}" target="_blank" style="color: black;">${data.work_email}</a>
                            </h6>
                        </div>
                        <div style="border-bottom: 1px solid #acacac36; padding: 8px 0;">
                            <h5 style="font-size: 16px; margin-bottom: 4px;">Phone Number</h5>
                            <h6 style="font-size: 14px; font-weight: normal; color: #1c2433;">
                                <a href="tel:${data.phone_number}" target="_blank" style="color: black;">${data.phone_number}</a>
                            </h6>
                        </div>
                        <div style="border-bottom: 1px solid #acacac36; padding: 8px 0;">
                            <h5 style="font-size: 16px; margin-bottom: 4px;">Company Name</h5>
                            <h6 style="font-size: 14px; font-weight: normal; color: #1c2433;">${data.company_name}</h6>
                        </div>
                        <div style="border-bottom: 1px solid #acacac36; padding-bottom: 8px;">
                            <h5 style="font-size: 20px; margin-bottom: 4px;">Job Title</h5>
                            <h6 style="font-size: 14px; font-weight: normal; color: #1c2433;">${data.job_title}</h6>
                        </div>
                        <div style="border-bottom: 1px solid #acacac36; padding-bottom: 8px;">
                            <h5 style="font-size: 20px; margin-bottom: 4px;">Current ERP / Accounting System</h5>
                            <h6 style="font-size: 14px; font-weight: normal; color: #1c2433;">${data.current_system}</h6>
                        </div>
                    </div>
                </div>
                <!-- Footer -->
                <div style="text-align: center; padding: 24px 0;">
                    <p>© Zanbio. All right reserved</p>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      {
        statusMessage: "Success send form",
        statusCode: 200,
        data: null,
      },
      {
        status: 200,
        statusText: "OK",
      }
    );
  } catch (error: any) {
    if (error.name && error.name === "ValidationError") {
      return NextResponse.json(
        {
          data: null,
          errors: error?.errors || [],
          statusMessage: "unprocessable entity",
          statusCode: 422,
        },
        { status: 422, statusText: "Error" }
      );
    }

    return NextResponse.json(
      {
        statusMessage: "Internal Server Error",
        statusCode: 500,
        data: null,
        error,
      },
      { status: 500, statusText: "Error" }
    );
  }
}
