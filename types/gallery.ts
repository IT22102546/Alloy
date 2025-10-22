export interface GalleryItem {
  _id: string;
  _type: 'gallery';
  title: string;
  category: 'dining' | 'events' | 'scenic' | 'dishes';
  image: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  description?: string;
  order?: number;
  _createdAt: string;
  _updatedAt: string;
}

export interface SanityImage {
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}