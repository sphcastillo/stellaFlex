import { defineField, defineType } from "sanity";
import { MailPlus } from "lucide-react";

export default defineType({
  name: "message",
  title: "Elite Messages",
  type: "document",
  icon: MailPlus,
  description: "Messages sent by Elevate Elite users to the creator",
  preview: {
    select: {
      message: "messageBody",
      sender: "senderName",
      date: "_createdAt",
    },
    prepare({ message, sender, date }) {
      return {
        title: message,
        subtitle: `From: ${sender || "Unknown"} - ${date ? new Date(date).toLocaleDateString() : "Unknown date"}`,
      };
    },
  },
  fields: [
    defineField({
      name: "senderName",
      title: "Sender Name",
      type: "string",
      description: "The name of the VIP user sending the message",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "senderEmail",
      title: "Sender Email",
      type: "string",
      description: "The email address of the VIP user",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "messageBody",
      title: "Message",
      type: "text",
      description: "The content of the message",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isRead",
      title: "Read",
      type: "boolean",
      description: "Whether the message has been read",
    }),
  ],
});