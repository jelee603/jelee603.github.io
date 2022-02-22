---
layout: post
title: 'Graphql 적용기'
date: 2019-10-16
categories:
  - Lab
toc: true
comments: false
thumbnail: '/images/graphql.png'
---

[GraphQL](https://graphql-kr.github.io/) 은 상당히 뜨고 있어서 항상 진행해보자.. 싶었던 방법인데 DB도 설치해야하고 복잡할거 같아서 진행을 못하고 있었다.
찾아보니 Node.js Express 로 구현한 [yuddomack][yuddomack] 님의 블로그를 보고 진행을 해볼 수 있었다.
<!-- more -->
공식문서([GraphQL][graphql])에서는 저렇게 쓰면 되겠구나 싶었던 방법이 구체적인 웹으로도 쉽게 조회를 할 수 있게 제공된다.
구현부를 express 에 작성하고, 간단한 조회를 하는 방법이 있고, 실제 DB와 연결해서 하는 방법을 계속 진행해볼까 한다.
DB는 서버에 설치해야하는 번거로움이 있으니.. [kamang][kamang] 님의 블로그처럼 SqlLite로 프로젝트에 저장될 수 있게 만들어 볼 예정이다.

[graphql]: https://graphql.org/learn/
[express]: https://expressjs.com/ko/
[yuddomack]: https://yuddomack.tistory.com/entry/expressgraphql-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0Hello-World-Guide
[kamang]: https://kamang-it.tistory.com/entry/NodeJSExpressSQLiteNodejs-express%EC%83%81%EC%97%90%EC%84%9C-SQLite%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EC%9D%84-%EC%98%88%EC%A0%9C%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0
