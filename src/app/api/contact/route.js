import fs from 'fs';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

const envPath = fs.existsSync('.env.local') ? '.env.local' : '.env';
dotenv.config({ path: envPath });

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        const user = process.env.EMAIL_USER;
        const pass = process.env.EMAIL_PASS;
        const receiver = process.env.RECEIVER_EMAIL;

        if (!user || !pass || !receiver) {
            console.error('Missing email credentials', { user, pass: Boolean(pass), receiver });
            return NextResponse.json(
                {
                    message:
                        'Email sending is not configured. Set EMAIL_USER, EMAIL_PASS, and RECEIVER_EMAIL in your environment.'
                },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass
            }
        });
        const mailOptions = {
            from: user,
            replyTo: email,
            to: receiver,
            subject: `Contact form submission from ${name} <${email}>`,
            text: message
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}

export function OPTIONS() {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
