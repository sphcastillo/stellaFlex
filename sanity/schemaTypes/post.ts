import { defineField, defineType } from "sanity";
import { FileTextIcon } from "lucide-react";

export default defineType({
  name: "post",
  title: "Posts",
  type: "document",
  icon: FileTextIcon,
  description: "Content posts that can be restricted by tier access level",
  preview: {
    select: {
      title: "title",
      tierAccess: "tierAccess",
      media: "mainImage",
    },
    prepare({ title, tierAccess, media }) {
      return {
        title,
        subtitle: `Access: ${tierAccess || "None"}`,
        media,
      };
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The main title of your post",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: "tierAccess",
      title: "Tier Access",
      type: "string",
      description: "Select which membership tiers can access this post",
      options: {
        list: [
          { title: "Start Strong", value: "startStrong" },
          { title: "Power Pulse", value: "powerPulse" },
          { title: "Elevate Elite", value: "elevateElite" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});