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
