import * as React from "react";

interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	email,
	message,
}) => (
	<div>
		<h1>Name: {name}</h1>
		<h3>Email: {email}</h3>
		<p>Message: {message}</p>
	</div>
);
