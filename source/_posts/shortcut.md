---
layout: post
title: 'VSCode 단축키 모음'
date: 2020-01-09
categories:
- Setting
comments: false
thumbnail: '/images/thumbnail/vscode.png'
---
![image](/images/thumbnail/vscode.png)

IDE 에서 사용할만한 단축키를 모아두자.

### HTML5 doctype

- html:5 followed by tab

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

### Mac 단축키 / Window 단축키

`cmd` + `d` / `ctrl` + `d` : 같은 파일내 단어 찾기
`option + cmd + i` / `F12` : 크롬 디버그
`ctrl + space` : 파일에서 프로퍼티 자동완성
`cmd` + `shift` + `p` : 명령어 실행창 표시

> 설정 json 파일 열기
> `>` open settings (json)

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

> 프롬프트 창에서 `code .` 으로 실행
> `>` Shell Command
> 프로젝트 매니저에서 바로가기 등록
> `>` Project Manager: Save Project
