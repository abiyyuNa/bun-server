import nodemailer, { Transporter } from 'nodemailer';
import fs from 'fs';

// Fungsi untuk mengirim email
export const sendEmail = async (email: any, message: any, pdfFilePath: string) => {
    // Buat transporter untuk mengirim email
    let transporter: Transporter = nodemailer.createTransport({
        host: "m006.dapurhosting.com",
        port: 465,
        secure: true,
        auth: {
            user: "halo@fatmawatihospital.com",
            pass: "Inter@1908",
        },
    });

    // Buat opsi email
    let mailOptions: nodemailer.SendMailOptions = {
        from: 'no-replay@fatmawatihospital.com',
        to: `${email}`,
        subject: 'FMP Klinik',
        text: `${message}`,
        html: `<b>${message}</b>`
    };

    // cek apakah ada file
    if (fs.existsSync(pdfFilePath)) {
        // Baca isi file PDF
        const pdfFile = fs.readFileSync(pdfFilePath);
        
        // Tambahkan lampiran jika file PDF ada
        mailOptions.attachments = [
            {
                filename: 'suratsehat.pdf', // nama file lampiran
                content: pdfFile, // isi file lampiran
                contentType: 'application/pdf' // tipe konten file lampiran
            }
        ];
    }

    // Kirim email
    try {
        const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (!emailFormat.test(email)) {
            return {
                status: 400,
                message: "Email tidak boleh kosong atau tidak valid",
            };
        } else if (!message) {
            return {
                status: 400,
                message: "Message tidak boleh kosong",
            };
        }

        const info = await transporter.sendMail(mailOptions);

        if (info.accepted.length > 0) {
            return {
                status: 200,
                message: "Email berhasil dikirim",
            };
        }
    } catch (error: any) {
        return {
            status: 400,
            message: error.message,
        };
    }

}
