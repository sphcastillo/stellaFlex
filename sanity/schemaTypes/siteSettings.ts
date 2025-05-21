import { defineField, defineType, defineArrayMember } from "sanity";
import { SettingsIcon } from "lucide-react";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: SettingsIcon,
  description: "Global settings and configuration for your creator page",
  preview: {
    select: {
      title: "siteTitle",
    },
    prepare({ title }) {
      return {
        title: title || "Site Settings",
      };
    },
  },
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      description: "The name of your creator page",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description:
        "A brief description of your creator page and what you offer",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerLogo",
      title: "Header Logo",
      type: "image",
      description: "The logo in the header of your creator page",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for accessibility and SEO",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainHeroImage",
      title: "Main Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The main banner image displayed at the top of your page",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for accessibility and SEO",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "The logo of your creator page",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          description: "Alternative text for accessibility and SEO",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "socials",
      title: "Social Media Links",
      type: "array",
      description:
        "Add your social media profiles for visitors to connect with you",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              description:
                "The social media platform (e.g., Twitter, Instagram, YouTube)",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "YouTube", value: "youtube" },
                  { title: "Facebook", value: "facebook" },
                  { title: "X", value: "twitter" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "Pinterest", value: "pinterest" },
                  { title: "GitHub", value: "github" },
                  { title: "Discord", value: "discord" },
                  { title: "Twitch", value: "twitch" },
                  { title: "Other", value: "other" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              description: "The full URL to your profile on this platform",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "callToActionText",
      title: "Call-to-Action Text",
      type: "string",
      description: "The main text encouraging visitors to become supporters",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pricingDetails",
      title: "Pricing Details",
      type: "array",
      description: "Define your membership tiers and their benefits",
      of: [
        defineArrayMember({
          type: "object",
          name: "tier",
          fields: [
            defineField({
              name: "tierName",
              title: "Tier Name",
              type: "string",
              description: "The name of this membership tier",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
              description: "The monthly price for this tier",
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              description: "Describe the benefits included in this tier",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});