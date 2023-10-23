import { KeyboardEvent, useState } from 'react';
import { PostCategory, PostType } from '@/interfaces/post';
import Link from 'next/link';
import styled from 'styled-components';
import Search from '@mui/icons-material/Search';
import DefaultLayout from '@/layout/DefaultLayout';
import { getAllPosts } from '@/lib/api';
import { TagButton } from '@/components/TagButton';

interface PostListProps {
  posts: PostType[];
  category: PostCategory;
}

const PostList = ({ posts, category }: PostListProps) => {
  const [keyword, setKeyword] = useState('');
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setKeyword(e.currentTarget.value);
    }
  };
  return (
    <DefaultLayout>
      <Section>
        <SearchInput>
          <div>
            <Search fontSize="large" />
          </div>
          <input
            type="string"
            onKeyDown={handleKeyDown}
            placeholder="Search..."
          />
        </SearchInput>
        <Items>
          {keyword !== '' &&
            posts
              .filter((v) => v.content.includes(keyword))
              .map((post, index) => (
                <Item key={index}>
                  <Link href={`/${post.category}/${post.slug}`}>
                    {post.title}
                    &nbsp;
                    <TagButton children={post.category} onClick={() => {}} />
                  </Link>
                </Item>
              ))}
        </Items>
      </Section>
    </DefaultLayout>
  );
};

const Section = styled.section`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const SearchInput = styled.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: 25rem;
  border-radius: 50px;
  border: 1px solid #dadce0;
  background-color: #dadce0;

  div {
    padding: 4px 4px 4px 8px;
    line-height: 0;
    pointer-events: auto;
    position: relative;
    z-index: 1;
  }

  input {
    background: transparent;
    border: 1px solid #dadada;
    width: 20rem;
  }
  input:focus {
    outline: none;
  }
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  padding: 0 20%;
  /* min-width: 30rem; */
`;

const Item = styled.li`
  display: list-item;
  list-style-type: none;
  line-height: 2.5;
  padding: 0.8rem;
  border-bottom: 1px solid #dadada;
  /* width: 40rem; */
  a {
    text-decoration: none;
    font-weight: 200;
  }
`;

export async function getStaticProps() {
  const posts = getAllPosts([
    'slug',
    'title',
    'date',
    'coverImage',
    'category',
    'content',
  ]);

  return {
    props: {
      posts,
    },
  };
}

export default PostList;
