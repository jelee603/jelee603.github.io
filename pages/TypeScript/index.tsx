import { PostCategory, PostType } from '@/interfaces/post';
import { getAllPosts } from '@/lib/api';
import PostList from '@/components/PostList';

interface SubMenuType {
  posts: PostType[];
  category: PostCategory;
}
const category = 'TypeScript';
const SubMenu = ({ posts, category }: SubMenuType) => {
  return <PostList posts={posts} category={category} />;
};

export async function getStaticProps() {
  const posts = getAllPosts([
    'slug',
    'title',
    'date',
    'coverImage',
    'category',
  ]);

  return {
    props: {
      posts,
      category,
    },
  };
}

export default SubMenu;
