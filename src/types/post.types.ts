export type Post = {
  id: string;
  isDownloadable: boolean;
  isFeatured: boolean;
  publishDate: string;
  category: string[];
  tag: string[];
  slug: string;
  title: string;
  excerpt: {
    text: string;
  };
  coverImg: {
    url: string;
  };
  content: {
    markdown: string;
  };
  author: string;
};

export type FeaturedPost = Omit<Post, 'content'>;

export type TrendingPost = Omit<Post, 'content'>;

export type SearchResult = Omit<Post, 'content' | 'isDownloadable' | 'author'>;
