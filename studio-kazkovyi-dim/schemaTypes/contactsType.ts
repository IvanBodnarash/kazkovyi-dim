import {defineField, defineType} from 'sanity'

export const contactsType = defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',

  fields: [
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),

    defineField({
      name: 'telegram',
      title: 'Telegram',
      type: 'url',
    }),

    defineField({
      name: 'viber',
      title: 'Viber',
      type: 'string',
    }),

    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'url',
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
  ],
})
