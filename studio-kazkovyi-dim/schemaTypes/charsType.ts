import { defineField, defineType } from 'sanity'

export const charsType = defineType({
    name: 'characters',
    title: 'Characters',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
})