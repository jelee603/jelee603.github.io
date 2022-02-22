---
layout: post
title: 'Hexo를 이용한 github 블로그 생성하기'
date: 2021-09-24
categories:
  - Lab
toc: true
comments: false
thumbnail: '/images/blog-hexo.png'
---

> Hexo 프레임워크를 이용해 블로그를 작성하고, github에 자동 deploy 까지
<!-- more -->
## 설치하기

```
npm install hexo-cli -g
npm run server
```

https://hexo.io/
https://github.com/ppoffice/hexo-theme-hueman

### github 연동하기

**Project > Settigns > GitHub Pages**
Branch: main

hexo deploy 를 하면, 마크다운 문서를 파싱하면서 배포파일을 만들어주는데 이 파일이 실제 웹 브라우저에서 보여져야할 파일이므로 이 역할을 기본 브랜치(main)에서 할 수 있도록 main 으로 적용했다.
블로그 작성은 develop 브랜치를 둔다.

**Project > Settings > Secrets > Actions**

HEXO_DEPLOY_TOKEN 이름으로 토큰을 등록한다.
여기서의 토큰은 아래에서 받은 액세스 토큰을 사용한다.

**Account Settings > Developer settings > Personal access tokens**

기간을 설정하면, 새로운 토큰을 발급하는데 이 발급된 토큰을 등록해준다.

![토큰 생성(1)](token1.png)

![토큰 생성(2)](token2.png)

참고: https://hyeo-noo.tistory.com/184

\***\*주기적으로 Actions 토큰을 업데이트 해준다.** <br/> \***\*Mac 에서는 cmd + space > keychain 접근에서 github.com 은 모두 삭제해준 후에 IDE에서 토큰을 재등록해준다.**

### github deploy 등록하기

**Project > Actions**
workflow 를 자동으로 생성할 수 있게 많이 제공하지만, 일단 'and set up a workflow yourself' 를 클릭해서 개별 스크립트를 작성해준다.

develop 디렉토리에 push 되었을 때, deploy 할 수 있게 만든다.
`GITHUB_TOKEN`은 위에서 만든 HEXO_DEPLOY_TOKEN 변수를 적용해준다.

```
// develop.yml

    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - name: Checkout source
        uses: actions/checkout@v2
      - name: Use Node.js 16
        uses: actions/setup-node@v2
        with:
          node-version: 16
          cache: 'npm'
      - name: Before install
        run: npm i -g hexo
      - name: Before script
        env:
          GITHUB_TOKEN: ${{ secrets.HEXO_DEPLOY_TOKEN  }}
        run: |
          git config --global user.email [user_email]
          git config --global user.name [user_name]]
          sed -i "s/__GITHUB_TOKEN__/${GITHUB_TOKEN}/" _config.yml
      - name: NPM install
        run: |
          npm install
      - name: Hexo deploy
        run: |
          hexo clean
          hexo generate
          hexo deploy
```

참고: https://blog.hodory.dev/2019/08/23/deploy-hexo-blog-with-github-actions/

Actions 실행되는 스크립트는 config 파일의 deploy 변수를 제대로 걸어주지 못하면, 아래와 같은 오류를 만나게 된다.

> fatal: could not read Password for 'https://jelee603@github.com': No such device or address
>
> 해결 방법:
> 등록된 토큰을 확인하고, 아래와 같이 변수를 추가해준다.
>
> ```js
> // _config.yml
> deploy: type: git;
> //__GITHUB_TOKEN__@github.com/[user_name]/[user_name].github.io.git
> repo: https: branch: main;
> ```

위와 같이 작성하고, push 를 하게 되면, build 가 시작되고 정상적으로 완료되면, 블로그에 반영이 된다!

### Generate 포매터 변경

`scaffolds > post.md`에 필요한 포맷을 넣어두면 파일이 생성될 때, 자동으로 들어간다. 

기본 포맷은 날짜형태가 중괄호 문법으로 들어가 있는데, 자동완성으로 코드가 변경되면 이 포맷이 깨지게 된다. 
```
// 원본 
title: {{ title }}
date: {{ date }}

// 자동 변경
title: { { title } }
date: { { date } }
```

이렇게 저장되는 것을 방지하려면, 마크다운 파일의 경우에만 자동저장 기능을 꺼준다. 

```
//settings.json

"[markdown]": {
    "editor.formatOnSave": false,
}
```
## 글쓰기 (마크다운)

- post 파일 생성 방법
```
// new post
hexo new [layout] <title>
hexo server
ex) hexo new <title>

// draft
hexo new draft <title>
hexo server --draft
```

- 마크다운 하이퍼링크 연결
알파벳은 반드시 소문자만 가능
띄어쓰기는 -(하이픈)으로 구분

#### Reference

- https://hexo.io/ko/docs/writing.html
- https://www.w3schools.io/file/markdown-cheatsheet
- https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4#%EB%AC%B8%EB%B2%95
- https://young-cow.tistory.com/21
