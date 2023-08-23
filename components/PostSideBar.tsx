import { PostCategory, PostType } from '@/interfaces/post';
import Link from 'next/link';
import styled from 'styled-components';

interface PostSideBarType {
  posts: PostType[];
  category: PostCategory;
}
const PostSideBar = ({ posts, category }: PostSideBarType) => {
  return (
    <Items>
      {posts
        .filter((v) => v.category == category)
        .map((post, index) => (
          <Item key={index}>
            <Link href={`/${category}/${post.slug}`}>{post.title}</Link>
          </Item>
        ))}
    </Items>
  );
};

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  min-width: 30rem;
`;

const Item = styled.li`
  display: list-item;
  list-style-type: none;
  line-height: 1.5;
  padding: 0.8rem;
  a {
    text-decoration: none;
    font-weight: 200;
  }
`;

export default PostSideBar;
