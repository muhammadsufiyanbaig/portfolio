"use server";

import { validateString, getErrorMessage } from "@/lib/utils";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "send.sufiyan@gmail.com",
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(subject, 500)) {
    return {
      error: "Invalid subject",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const timestamp = new Date().toLocaleString();
  const mailOptions = {
    from: senderEmail,
    to: "send.sufiyan@gmail.com",
    subject: subject,
    html: `
<div style="font-family: Arial, sans-serif; background: #121212; padding: 40px; margin: 0 auto; border-radius: 12px; max-width: 650px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);">
  <!-- Header Section -->
  <div style="text-align: center; margin-bottom: 30px;">
    <h2 style="color: #067775; font-size: 32px; margin: 0 0 10px; font-weight: 600;">New Message from ${senderEmail}</h2>
    <hr style="border-top: 2px solid #067775; width: 50%; margin: 20px auto;">
  </div>
  
  <!-- Content Section -->
  <div style="padding: 30px; background-color: #1c1f22; border-radius: 10px;">
    <p style="font-size: 18px; color: #e0e0e0; line-height: 1.8; margin-bottom: 20px;">
      <strong style="color: #067775;">Subject:</strong> ${subject}
    </p>
    
    <p style="font-size: 18px; color: #067775; line-height: 1.8; margin-bottom: 25px;">
      <strong>Message:</strong>
      <span style="font-size: 18px; color: #e0e0e0; background-color: #2a2f35; padding: 20px; border-radius: 8px; display: block; margin-top: 10px; white-space: pre-wrap;">
        ${message}
      </span>
    </p>

    <p style="font-size: 16px; color: #e0e0e0; margin-bottom: 20px;">
      <strong style="color: #067775;">Sent at:</strong> ${timestamp}
    </p>
  </div>

  <!-- Button Section -->
  <div style="text-align: center; margin-top: 35px;">
    <a href="mailto:${senderEmail}" style="color: #121212; text-decoration: none; font-weight: bold; font-size: 18px; padding: 14px 30px; border-radius: 8px; background: #067775; display: inline-block;">
      Reply to this message
    </a>
  </div>
</div>

    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data: "Email sent successfully!",
  };
};
