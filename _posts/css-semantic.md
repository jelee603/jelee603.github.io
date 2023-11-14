---
title: 시맨틱 태그 (Semantic Tag)
date: "2023-08-24"
category: HTML_CSS
tags:
coverImage: /images/cover/default.png
slug: css-semantic
---


시맨틱 태그, 나온지 꽤 오래된 용어지만 "의미를 부여한 태그"라는 것 이외에는 제대로 사용해보지 못한 거 같아 이번 기회에 제대로 정리를 해볼까 합니다. 

## 시맨틱 태그는 왜 사용할까?

시맨틱 태그는 웹 문서 내에서 의미를 부여하는 HTML 태그를 말합니다. 콘텐츠를 의미적으로 표현할 수 있어 웹 개발자들이 쉽게 의미를 파악할 수 있게 되었습니다. div, span과 같은 비의미적인 요소로 코드를 작성하던 시절을 떠올려보면, 조금만 중첩된 태그에서도 스타일 수정하는데 5분이면 될 것을 2-30분을 찾아야할 때도 있었던 거 같습니다. 그런면에서 이 의미 부여는 웹 접근성을 향상시키고, 게다가 검색 엔진이 사이트를 크롤링하는데도 도움이 됩니다. 

## 시맨틱 태그의 예시 

![html5_w3schools](https://www.w3schools.com/html/img_sem_elements.gif)

먼저 가장 쉽게 찾을 수 있는 w3schools 의 이미지입니다. 너무 심플하게 정리되어 이대로만 작성하는 건 어렵지 않을 거 같습니다.

1. `<header>` : 웹 페이지나 섹션의 머리말을 나타냅니다. 주로 사이트 로고, 제목, 탐색 메뉴 등을 포함합니다.

2. `<nav>`: 탐색 링크를 그룹화하여 사이트 내에서의 탐색을 나타냅니다.

3. `<main>`: 문서의 주요 콘텐츠를 정의합니다. 한 문서 내에 하나의 main 요소만 사용하는 것이 좋습니다.
보통은 article 을 묶어주는 용도로 사용합니다.
![semrush](https://static.semrush.com/blog/uploads/media/cc/85/cc85d452a743e27f68d426df35e4da7d/EN-Semantic-Search-Non-Semantic.webp)

4. `<article>`: 독립적인 콘텐츠 조각을 나타냅니다. 뉴스 기사, 블로그 포스트, 포럼 글 등이 이에 해당합니다.

5. `<section>`: 문서의 구획을 나타내며, 주제에 관련된 콘텐츠 그룹을 정의합니다.

6. `<aside>`: 주 콘텐츠와 관련성이 낮은 사이드 콘텐츠를 나타냅니다. 주로 사이드바나 광고 등을 배치할 때 사용됩니다.

7. `<footer>`: 웹 페이지나 섹션의 푸터(마지막 부분)를 나타냅니다. 연락처 정보, 저작권 정보 등이 여기에 포함될 수 있습니다.

8. `<figure>`과 `<figcaption>`: 이미지나 도표와 그림 설명을 그룹화하여 나타냅니다. figure는 미디어 자체를, figcaption은 설명을 포함합니다.

9. `<details>`과 `<summary>`: 세부 정보를 접을 수 있는 위젯을 생성합니다. 사용자가 summary를 클릭하면 details 내용이 펼쳐집니다.



## 과연 이것만 알아도 될까?

[HTML 요소 참고서](https://developer.mozilla.org/ko/docs/Web/HTML/Element)를 찾아보면, 다양한 요소에 관련된 세부사항들이 있습니다. 시멘틱은 문서 콘텐츠를 나누기 위한 레이아웃에 의미를 부여한 것이고, 실제로는 HTML 요소들의 의미대로 사용해야한다고 생각합니다. 양식이나 텍스트 관련된 form, ul, ol 태그 등 자주 사용하는 태그들은 사용하다보면 외워지겠지만 한번쯤은 의미를 짚어보고 사용하려는 노력이 필요하다고 생각합니다.