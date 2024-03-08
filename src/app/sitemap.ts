import { NAV_LINKS, categories } from '@/config/site-links';
import { getPostsByCategory } from '@/lib/gql/post';
import getUrl from '@/lib/utils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const pages = NAV_LINKS.map((page) => ({
    url: getUrl(page.path).replace(/\/$/, ''),
    lastModified: now,
  }));

  const allCategories = categories.map((category) => ({
    url: getUrl(`/categories${category.path}`),
    lastModified: now,
  }));

  const posts = (
    await Promise.all(
      categories.map(async (category) => await getPostsByCategory(category.path.replace('/', '')))
    )
  )
    .flat()
    .map((post) => ({
      url: getUrl(`/categories/${post.category}/${post.slug}`),
      lastModified: new Date(post.updatedAt),
    }));

  return [...pages, ...allCategories, ...posts];
}
