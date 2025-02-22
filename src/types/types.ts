export interface Project {
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  _createdAt: string;
  _rev: string;
  link: string;
  description: string;
  _updatedAt: string;
  date: string;
  _type: "project";
  name: string;
  _id: string;
  slug: {
    _type: "slug";
    current: string;
  };
}


export interface Client {
  name: 'client',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
        ],
      },
      initialValue: 'new',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
}
