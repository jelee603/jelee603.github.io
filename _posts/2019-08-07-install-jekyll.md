---
layout: post
title:  "Jekyll 을 이용한 github 블로그 생성하기"
date:   2019-08-07
categories: install update
background: '/img/bg-index.jpg'
---
#### 환경설정하기 

지킬은 깃 허브 페이지에서 기본으로 제공하는 정적 사이트 생성기로, 소스를 깃허브에 올리면 웹페이지로 서비스해준다.
윈도우에서는 지킬을 설치할땐, RubyInstaller for Windows 를 설치하는데 (Devkit 가 포함된 버전)으로 설치한다. 



```
// 번들 설치
gem install jekyll bundler
// 사이트 생성
jekyll new my-awesome-site 
cd my-awesome-site 

// jekyll 실행 (window)
my-awesome-site $jekyll serve --watch

// jekyll 실행 (mac)
bundle exec jekyll serve --watch

console.log('aa')
```