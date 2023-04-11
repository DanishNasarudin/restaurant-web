export interface News {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  content: Content[];
  description: string;
  slug: Slug;
  thumbnail: Thumbnail;
  title: string;
}

export interface Content {
  _key: string;
  _type: string;
  children?: Child[];
  markDefs?: any[];
  style?: string;
  asset?: Asset;
  crop?: Crop;
  hotspot?: Hotspot;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface Crop {
  _type: string;
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface Hotspot {
  _type: string;
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface Thumbnail {
  _type: string;
  asset: Asset;
}
