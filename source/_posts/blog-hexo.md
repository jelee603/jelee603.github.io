---
layout: post
title: 'Hexo Blog 만들기'
date: 2021-09-24
categories: git
comments: false
thumbnail: '/images/thumnail/blog-hexo.png'
---

![blog](/images/thumnail/blog-hexo.png)

> hexo 프레임워크를 이용해 블로그를 작성하고, github에 자동 deploy 까지

1. install

```
npm install hexo-cli -g
npm run server
```

https://hexo.io/
https://github.com/ppoffice/hexo-theme-hueman

2. github 연동하기

**Project > Settigns > GitHub Pages**
Branch: main

hexo deploy 를 하면, 마크다운 문서를 파싱하면서 배포파일을 만들어주는데 이 파일이 실제 웹 브라우저에서 보여져야할 파일이므로 이 역할을 기본 브랜치(main)에서 할 수 있도록 main 으로 적용했다.
블로그 작성은 develop 브랜치를 둔다.

**Project > Settings > Secrets > Actions**

HEXO_DEPLOY_TOKEN 이름으로 토큰을 등록한다.
여기서의 토큰은 아래에서 받은 액세스 토큰을 사용한다.

**Account Settings > Developer settings > Personal access tokens**

기간을 설정하면, 새로운 토큰을 발급하는데 이 발급된 토큰을 등록해준다.

![token1](/images/blog-hexo/token1.png)
![token2](/images/blog-hexo/token2.png)

\***\*주기적으로 Actions 토큰을 업데이트 해준다.** <br/> \***\*Mac 에서는 cmd + space > keychain 접근에서 github.com 은 모두 삭제해준 후에 IDE에서 토큰을 재등록해준다.**

3. github deploy 등록하기

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

Actions 실행되는 스크립트는 config 파일의 deploy 변수를 제대로 걸어주지 못하면, 아래와 같은 오류를 만나게 된다.

> **fatal: could not read Password for 'https://jelee603@github.com': No such device or address
> FATAL**

위에서 토큰을 제대로 등록해주고, 아래와 같이 변수를 추가해준다.

```
// _config.yml

deploy:
type: git
repo: https://__GITHUB_TOKEN__@github.com/[user_name]/[user_name].github.io.git
branch: main
```

위와 같이 작성하고, push 를 하게 되면, build 가 시작되고 정상적으로 완료되면, 블로그에 반영이 된다!
