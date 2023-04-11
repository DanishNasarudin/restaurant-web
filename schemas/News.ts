import { Rule, SchemaTypeDefinition } from "sanity";

export const News: SchemaTypeDefinition = {
  title: "News",
  name: "news",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (rule: Rule) => [rule.required()],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (rule: Rule) => [rule.required()],
    },
    {
      title: "Thumbnail",
      name: "thumbnail",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (rule: Rule) => [rule.required()],
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (rule: Rule) => [
        rule.required().max(150).warning("Description too long."),
      ],
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
      validation: (rule: Rule) => [rule.required()],
    },
  ],
};

export default News;
