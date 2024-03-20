"use server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

export const sendEmail = async ({
	name,
	email,
	subject,
	message,
}: {
	name: string;
	email: string;
	subject: string;
	message: string;
}) => {
	const resend = new Resend(process.env.RESEND_API_KEY);

	const { error } = await resend.emails.send({
		from: `CONTACT <contact@cwilson.fun>`,
		to: "cwilsonfun@gmail.com",
		subject: subject,
		html: "<div><h1>Name: {name}</h1><h3>Email: {email}</h3><p>Message: {message}</p></div>",
	});

	if (error) return { error: error };
};
