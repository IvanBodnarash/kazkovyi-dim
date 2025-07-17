import { defineField, defineType } from 'sanity'

export const servicesItems = defineType({
    name: 'servicesItems',
    title: 'Services Items',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
        }),
    ],
})