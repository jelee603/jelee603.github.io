---
title: React VAC Pattern
date: "2021-11-01 16:57:17"
tags:
category: React
toc: true
comments: false
coverImage: /images/cover/react-vac.png
slug: react-vac
---

#### VAC Pattern 이란?

[View Asset Component](https://github.com/coxcore/react-vac) 라 하며, jsx 파일 내에서 state 와 render 부분을 별도로 구분해서 보다 쉽게 관리하기 위한 패턴방식이다.

<!-- more -->
마크업, UI, 기능구현으로 이뤄지는 프론트개발에서 업무에 따라 프로젝트 충돌을 피하기 위해 사용한다.

디자인이 필요한 작업 관련 부분은 모두 props 로 넘겨주고, 비지니스 로직이 필요한 기능 구현 부분은 다른 컴포넌트에서 상태관리를 통해 처리해주는 방법이다.
역할 구분을 확실하게 해서 의존적이지 않아 상당히 편한 패턴이란 생각이 든다.
