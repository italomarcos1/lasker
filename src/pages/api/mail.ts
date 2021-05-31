import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === "POST") {
    try {
      const { name, contact } = request.body;

      const transporter = nodemailer.createTransport({
        host: "email-smtp.us-east-1.amazonaws.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_ADDRESS,
          pass: process.env.MAIL_PASS,
        },
      });

      const mailData = {
        from: "suporte@ghould.com.br",
        to: "italomarcos0010@gmail.com",
        subject: `Novo cliente pelo Site`,
        text: "Compra",
        html: `<div>
                Nome: ${name} <br/>
                Contato: ${contact} <br/>
              </div>`,
      };

      // console.log(checkoutSession);

      // por enquanto o email vai ser enviado pra minha caixa pessoal, eu vou fazer a compra então fodase
      const callback = (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      };

      transporter.sendMail(mailData, callback);

      return response.status(200).json({
        ok: "mail sent",
      });
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  } else {
    response.setHeader("Allow", "POST");
    response.status(405).end("Method not allowed");
  }
};
