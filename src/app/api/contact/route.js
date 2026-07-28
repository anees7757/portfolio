import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL,
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
