export interface CreatorStats {
  label: string;
  value: string | number;
}

export interface VideoStats {
  id: string | number;
  title: string;
  views: number;
  publishedAt: string;
}

export interface Comments {
  id: string | number;
  author: string;
  text: string;
  createdAt: string;
}