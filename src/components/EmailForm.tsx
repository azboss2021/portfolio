"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaAngleRight, FaPaperPlane } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Resend } from "resend";

const EmailForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		let error = false;
		if (name.length < 1) {
			toast.error("Name must not be empty");
			error = true;
		}
		if (email.length < 1) {
			toast.error("Email must not be empty");
			error = true;
		}
		if (subject.length < 1) {
			toast.error("Subject must not be empty");
			error = true;
		}
		if (message.length < 1) {
			toast.error("Message must not be empty");
			error = true;
		}
		if (error) return;

		const storedDateString = localStorage.getItem("lastEmailSentDate");
		if (storedDateString) {
			const storedDate = new Date(storedDateString);

			const timeDifference = Date.now() - storedDate.getTime();

			if (timeDifference < 86400000) {
				toast.error(
					"Can only send 1 email per 24 hours. Email me directly via cwilsonfun@gmail.com",
					{ duration: 5000 }
				);
				return;
			}
		}

		try {
			const resend = new Resend(process.env.RESEND_API_KEY);

			const emailResponse = await resend.emails.send({
				from: `CONTACT ${email}`,
				to: "cwilsonfun@gmail.com",
				subject: subject,
				react: (
					<>
						<div>Name: {name}</div>
						<div>Email: {email}</div>
						<div>Message: {message}</div>
					</>
				),
			});

			console.log(JSON.stringify(emailResponse));
		} catch (error) {
			// return toast.error(JSON.stringify(error));
			return toast.error("Something went wrong. Please try again");
		}

		const emailDate = new Date();
		const dateString = emailDate.toISOString();
		localStorage.setItem("lastEmailSentDate", dateString);

		setName("");
		setEmail("");
		setSubject("");
		setMessage("");

		toast.success("Email sent");
	};

	return (
		<section className="w-full flex flex-col md:flex-row gap-4 border-t pt-16">
			<div className="flex flex-col items-center md:items-start basis-1/3">
				<span className="text-center sm:text-left flex items-center gap-1 justify-center">
					<FaAngleRight size={14} /> open for work in Vegas or remote
				</span>
				<span className="text-center sm:text-left flex items-center gap-1 justify-center">
					<FaAngleRight size={14} /> frontend/backend/full stack
				</span>
			</div>

			<form onSubmit={onSubmit} className="flex flex-col gap-3 basis-2/3">
				<Label htmlFor="name" className="flex flex-col gap-1.5">
					<span className="font-semibold">Name</span>
					<Input
						type="name"
						id="name"
						name="name"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Label>

				<Label htmlFor="email" className="flex flex-col gap-1.5">
					<span className="font-semibold">Email</span>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Label>

				<Label htmlFor="subject" className="flex flex-col gap-1.5">
					<span className="font-semibold">Subject</span>
					<Input
						type="text"
						id="subject"
						name="subject"
						placeholder="Subject"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
					/>
				</Label>

				<Label htmlFor="message" className="flex flex-col gap-1.5">
					<span className="font-semibold">Message</span>
					<Textarea
						name="message"
						id="message"
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Label>

				<Button type="submit" className="flex items-center gap-2">
					Send Message <FaPaperPlane />
				</Button>
			</form>
		</section>
	);
};
export default EmailForm;
