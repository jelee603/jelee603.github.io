---
layout: post
title: 'Jekyll을 이용한 github 블로그 생성하기'
date: 2019-08-07
categories:
  - Lab
toc: true
comments: false
thumbnail: '/images/blog-jekyll.png'
---

<img src='/images/blog-jekyll.png' width='300'>

##### Jekyll 프레임워크를 이용해 블로그를 작성하고, github에 자동 deploy 까지
<!-- more -->
#### 환경설정하기

Jekyll은 markdown(\*.md) 파일을 생성하면 웹페이지로 서비스를 할 수 있는 정적 사이트 생성기이다.

Ruby를 환경에서 동작하기 때문에 윈도우에도 Ruby를 설치 해야한다.
RubyInstaller for Windows 를 설치하는데 (Devkit 가 포함된 버전)으로 설치하면 된다.
Ruby+Devkit 2.5.5-1 (x64) 로 설치를 진행했다.

[Ruby Installer](https://rubyinstaller.org/downloads/)

---

#### 사이트 생성하기

[Jekyll 공식사이트(한글 번역)](https://jekyllrb-ko.github.io/docs/windows/)

```js
// jekyll 설치
gem install jekyll bundler

// 사이트 생성
jekyll new my-awesome-site
cd my-awesome-site

// jekyll 실행 (window)
my-awesome-site $jekyll serve --watch

// jekyll 실행 (mac)
bundle exec jekyll serve --watch
```

---

#### 글 작성하기

마크다운 파일명과 상단 텍스트는 규칙대로 만들어주고 저장을 하게 되면 home 에 리스트가 나타난다.

```js
_post / yyyy - mm - dd - title.md;
```

---

#### 테마 적용하기

제공하는 테마 중에서 댓글도 없고, 심플한 디자인인 'jekyll-theme-clean-blog' 가 이 테마를 적용해보았다.

```js
// install
gem "jekyll-theme-clean-blog"

// _config.yml
theme: jekyll-theme-clean-blog
```

새로 적용하면 아주 이쁘게 잘 보이는데.. 영문일 때 폰트만 이뻐서.. 한글 폰트는 다른걸 사용하고 싶어졌다.

---

#### 폰트 적용하기

Jekyll의 수많은 테마는 변경없이 사용할 수 있도록 제공되지만..
블로그 테마를 변경하고 싶지 않고.. 커스텀하게 적용할 방법을 찾게 될 수 밖에 없는거 같다.

그래서 [Clean Blog Jekyll][cleanblog] 사이트에서 소스를 받아 분석을 시작했다.

우선 스타일 관련부분을 모두 가져와서 내 프로젝트에 그대로 덮어씌우고, 빌드를 했더니 \_site 에 로컬 파일들이 들어갔다.

```js
// 개별로 가져온 파일
_sass / styles.scss;
assets / vendor / startbootstrap - clean - blog;
assets / main.css;
```

폰트는 구글에서 기본 제공한다는 폰트 중에 이쁜 나눔고딕체를 import 해서 사용했다.

```js
// _sass/styles.scss
/* Import Google Web Font */
@import url(http://fonts.googleapis.com/css?family=Nanum+Gothic:400,700);

/* Style Blog Font */
h1, h2, h3, h4, h5, h6, p, blockquote, pre, ul, ol, dl, figure {
  margin-bottom: 15px;
  font-family: 'Nanum Gothic', sans-serif;
}
```

---

#### Code Block 스타일 적용하기

폰트를 넣고 보니.. 코드 블럭이 이쁘지가 않았다.
마크다운 문서에 소스코드가 저렇게 안 이쁘다니.. 다시 스타일을 찾기 시작했다.

[OneDarkTheme][onedarktheme]에 `syntax-one-dark.css` 을 가져왔다.
assets/css/syntax.css 에 스타일을 적용하고, import 해서 사용했다.

```js
// _sass/styles.scss
/* Import Highlight */
@import "../assets/css/syntax.css";
```

테마 요소의 다른 부분은 건드리지 않았고, 스타일만 앞으로 계속 커스텀하게 바꿔봐야겠다.

---

#### Git Repository 블로그 적용하기

Repository에 등록하면 프로젝트 명(git_id.github.io) 로 등록을 하면 바로 깃허브에서 확인을 할 수 있다.
기본 jekyll 만 설치하면 바로 확인이 가능하다고 하는데..
공식으로 지정된 테마만 등록이 가능하다고.. 커스텀 테마의 경우엔 404 ERROR 가 발생했다.

결국엔 필요한 파일의 일부가 아니라 전부를 내 프로젝트에 추가했다.
그리고 시작된 jekyll 공부..

jekyll 에서 사용되는 문법은 Ruby로 작성된 Liquid 템플릿 언어이다.<br/>
[goodGid][goodgid] 님의 블로그가 정리되어있고, 이 언어를 사용해서 html을 만들고
layout 탬플릿 파일이 동적 파일들(\*.md)을 로드해서 정적파일로 변환해준다.

[cleanblog]: https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll
[onedarktheme]: https://github.com/eungbean/Atom-OneDarkTheme-4-Jekyll
[goodgid]: https://goodgid.github.io/What-is-Liquid-Grammer/

---

#### git auto build jekyll 무시하기

.nojekyll 빈 파일을 root 에 생성한다.
