---
layout: post
title: '단축키 모음'
date: "2020-01-09"
category: Tip
toc: true
comments: false
coverImage: /images/cover/vscode.png
slug: shortcut
---

유용한 단축키를 정리합니다.

## 이모지 단축키
1. 편집 > 이모티콘 
2. Control-Command-스페이스


## VSCode 단축키 (Mac 단축키)

<!-- more -->

- `cmd + d` (`ctrl` + `d`) : 같은 파일내 단어 찾기
- `option + cmd + i` (`F12`) : 크롬 디버그
- `ctrl + space` : 파일에서 프로퍼티 자동완성
- `cmd + shift + p` : [페이지 셋업](#3.페이지-셋업에서-설정하기)
- `cmd + p` : 파일 찾기
- `cmd + j` : 터미널 창 열기

## Snippets 활용
:`html:5` html 자동완성

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

  :`rfc` 리액트 템플릿 자동완성

![자동완성 템플릿](/images/post/react-snippets.png)

## 페이지 셋업에서 설정하기
: json 파일열기 => open settings (json)

```
// settings.json
{
 // set prettier
 "editor.formatOnSave": true,
 "[javascript]": {
   "editor.formatOnSave": true
 },
 "editor.codeActionsOnSave": {
   // For ESLint
   "source.fixAll.eslint": false
 },
 "files.autoSave": "onFocusChange",
 "editor.fontSize": 13,

 // set eslint
 "eslint.alwaysShowStatus": true,
 "eslint.workingDirectories": [{ "mode": "auto" }],
 "eslint.validate": ["javascript", "typescript"]
}
```

- 터미널에서 `code .` 로 프로젝트를 열기 => Shell Command
- 프로젝트 매니저에 추가하기 => Project Manager: Save Project

