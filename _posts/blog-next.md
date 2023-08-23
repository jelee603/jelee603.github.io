---
title: Next.js로 마크다운 블로그 만들기
date: "2023-08-22"
category: ToyProject
tags:
coverImage: /images/cover/blog_next.png
slug: blog-next
---

## github 블로그를 또 바꾸는 이유

이전 블로그까지는 hexo 디자인을 적용해서 이쁘게 구성했었습니다. 하지만, Jeklly을 사용한 블로그는 레이아웃을 수정하거나 새 기능을 추가하는 건 가이드 문서를 참고하지 않으면 안되었구요. 내가 아는 언어로 마크다운 문서만 파싱할 수 있으면 새 기능도 넣고, 디자인도 커스텀하게 만들 수 있을텐데..😞 그러던 중 작년 글이지만, [마크다운 블로그 만드는 법](https://velog.io/@ctdlog/Next.js%EB%A1%9C-%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0)이라는 글을 읽게 되었습니다. 같은 고민으로 시작된 그 글은 마크다운 파싱하는 방법을  간단하게 알려줬고, Next.js를 사용했던 내 경험과 이번엔 내가 만들고 싶은 블로그를 만들 수 있을 거 같다는 큰 기대감을 안고 개발을 시작하게 되었습니다.

## 환경설정과 프로젝트 구조

1. next.js를 설치
2. styled-components 사용

프로젝트 구조는 [공식문서](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)의 구조를 그대로 착안해서 만들게 되었습니다. 이전 블로그도 _posts 폴더에 마크다운을 넣어두기도 했었구요. _posts, pages, lib 폴더를 만들어서 마크다운 문서를 파싱할 유틸리티를 모아두었습니다.


## 주요 기능 

- _post 폴더 내 파일 문서를 읽어와서 파싱 후에 보여준다.
- 모바일에서도 지원하는 블로그를 만든다. 
```
// lib/api.ts
getPostSlugs() {
    // fs 모듈을 이용해 _posts 안에 있는 파일들을 가져온다.
    return fs.readdirSync(postsDirectory);
}

getPostBySlug() {
    // gray-matter 라이브러리를 사용해서 마크다운 파일의 front-matter를 파싱해준다. 
}
```

```
// pages/_app.tsx
getStaticProps() {
    posts = getAllPosts(['slug']);
    return {
        props: {
        posts,
        },
    };
}

// pages/[slug].tsx
export async function getStaticPaths(){
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
          category: post.category,
        },
      };
    }),
    fallback: false,
  }; 
}

export async function getStaticProps({ params,
}: {
  params: {
    slug: string;
    category: string;
  };
}) {
  return {
    props: {
      post: {
        ...post,
        content,
      },
      posts,
    },
  };
}
```

## 기술적인 고민과 해결책
- 카테고리별로 라우팅할 수 있게 만들고 싶었습니다. ex) /React/react-redux
포스트는 기본적으로 [slug].tsx 페이지에서 본문 내용을 파싱해서 보여주고 있습니다. Next.js는 pages 에서 파일을 만들면 자동으로 라우팅 페이지가 만들어집니다. 그렇다면, 앞에 예제대로라면, 카테고리별로 폴더를 만들면 되는 것이 아닐까?🤔 그리고 간단하게 폴더를 구분하는 방법으로 해결했습니다. 

![라우팅](/images/post/blog_next_3.png "20%")

- 하지만, 위에 방법처럼 하는건 상당히 중복 작업이라 공통 레이아웃 페이지를 만들 필요가 생겼습니다.
상세 페이지와 메인 페이지 레이아웃을 시멘틱 태그로 작업했습니다.

```
// PostLayout.tsx

interface PostLayoutProps {
  children: ReactNode;
  posts: PostType[];
  category: PostCategory;
}
const PostLayout = ({ posts, category, children }: PostLayoutProps) => {
  return (
    <Container>
      <Header />
      <Aside>
        <PostSideBar posts={posts} category={category} />
      </Aside>
      <div>ttt</div>
      <Main>{children}</Main>
    </Container>
  );
};
```

## 사용자 경험 개선

![데모1](/images/post/blog_next_1.png)
- 카테고리 별로 다른 레이아웃으로 본문을 보여줍니다. 


## 배포

배포 자동화하는 .github/workflows에 yml 파일을 추가하여 워크플로우를 등록해줍니다.

개발은 develop 브랜치에서 할꺼니까, build 후에 gh-pages 브랜치에 배포 파일이 업데이트 될 수 있게 스크립트를 수정해줬습니다. 그리고 최종적으로 github 사이트에서 호스팅할 브랜치를 변경해줍니다.

github Project > Settings > Pages > Branch 를 변경!

[Next.js 블로그 Github Pages에 자동 배포하기](https://bepyan.github.io/blog/nextjs-blog/4-deploy) 글을 참고했습니다.

## 회고

next.js 에서 기본 사용하는 메서드를 구별 못하고 있는 것을 알았다. 지금의 완성품은 겨우 따라 작성하는 수준밖에 안되고, 수정은 가능하지만 딱 그 수준이다. 모바일을 지원하는 사이트를 만들어 본 경험이 부족했다. 미디어 쿼리를 사용해서 모바일 사이즈를 지원한다는 건 사용자 경험을 상당부분 반영해야한다는 것도 알았다. 지금은 개선해야할 것이 아직 많지만, 블로그는 조금씩 개선할 생각이다.

## 개선 사항

- 모바일 사이즈일 땐, 메뉴 아이콘을 보여주고 클릭 시에만 메뉴 목록을 띄워준다.
- 프로필에 경력기간 차트를 캔버스로 개발해서 모바일에서도 보이도록 지원한다.
- 키워드 검색기능 추가
- 코드블럭 색상과 이미지 사이즈 추가할 수 있도록 마크
