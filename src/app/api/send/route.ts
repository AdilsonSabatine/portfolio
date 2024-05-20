import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request, res: Response) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
        if (!fromEmail) {
            throw new Error('fromMail not defined');
        }

        const data = await resend.emails.send({
            from: fromEmail,
            to: ["adilsonsabatinejunior@gmail.com", email],
            subject: subject,
            react: `New message submitted: ${message}`,
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}