import initMiddleware, { runMiddleware } from "../../lib/middleware";

import validator from "validator";
import Cors from "cors";

import axios from "axios";

import siteMetadata from '@/data/siteMetadata'

const cors = initMiddleware(
  Cors({
    methods: ['POST'],
  })
)

export default async function handler(req, res) {
  // Middlewares
  await cors(req,res);

  // Extract form data
  let {email, reason, description} = req.body;

  // Validate form data
  email = validator.escape(email);
  reason = validator.escape(reason);
  description = validator.escape(description);

  if (!reason || !description) return res.status(400);

  // Send to hooks
  await axios.post(process.env.DISCORD_HOOK, {
    content: null,
    embeds: [
      {
        title: '**' + reason + '**',
        description: description,
        color: 678399,
        fields: [
          {
            name: 'Email',
            value: email || "Not specified",
          },
        ],
        author: {
          name: 'RIP Web Contact Form',
          icon_url: 'https://www.ripsquad.de/static/images/avatar.png',
        },
        footer: {
          text: 'Was submitted on https://ripsquad.de/contact',
        },
        timestamp: new Date().toISOString(),
        username: siteMetadata.discordUsername || 'RIP WEB BOT',
        avatar_url:
          siteMetadata.discordAvatar || 'https://www.ripsquad.de/static/images/avatar.png',
      },
    ],
  })

  // End api call
  return res.status(200).json({email, reason, description});
}
