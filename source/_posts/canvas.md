---
layout: post
title: 'Canvas로 그래프 그리기'
date: 2019-06-10
categories:
  - HTML/CSS
comments: false
thumbnail: '/images/canvas.png'
---

Grid 내부에 그래프를 그려야하는데 캔버스와 SVG, DIV 방법이 있을 수 있는데 어느 것을 골라야할지 망설여졌다.
분명 성능 이슈가 있겠지? 그래서 성능면에서 어떤 차이가 있는지부터 먼저 찾아보기로 했다.

---

#### SVG 와 Canvas의 장단점

**SVG**

- 복잡하지 않게 사용자 인터렉션이 가능합니다. (클릭, 마우스오버 이벤트 포함)
- 모든 엘리먼트는 DOM에 부착되어 자바스크립트와 CSS 통해 변형이 가능하며 텍스트를 지원한다.
- DOM 방식보다는 시간이 오래걸립니다.
- 성능은 화면이 크거나, 픽셀 수가 적을 경우(<10k) 에 좋습니다.
- 고품질 문서 작업이나 정적 이미지의 조작 작업 등에 어울립니다.
- 스크립트와 CSS를 통해서도 수정할 수 있음

**Canvas**

- 단순한 그래픽 API로 픽셀 이상을 나타내기 어렵습니다.
- 화면상 다른 동작을 할때도 전혀 부담이 없습니다.
- 빠른 응답속도와 메모리 과부하가 가장 적습니다.
- 성능은 화면이 작거나, 픽셀 수가 많을 경우(>10k) 에 좋습니다.
- 고성능의 애니메니션 작업이나 동영상 조작 등의 작업에 어울립니다.
- 스크립트를 통해서만 수정할 수 있음

캔버스는 그래픽이 잘 동작하고 성능이 저하되지 않도록 엘리먼트 사용을 최적화할 수 있는 방법이다.

---

#### 성능 비교

1px dom 25만개를 그렸을때 걸리는 시간에 대한 [idchoi2][idchoi2-blog]
님의 글을 읽어보고 나니.. 렌더링 시간이 확연히 차이가 있었다.

|          | 렌더링 시간          | 메모리 사용량 |
| -------- | -------------------- | ------------- |
| HTML DOM | 4356.28ms (3~4초)    | 796.3M        |
| SVG      | 7799.06ms (6~7초)    | 1.7G          |
| Canvas   | 430.71ms (0.3~0.4초) | 217.6M        |

---

#### 결론

그래서 렌더링 속도가 빠른 캔버스로 그려봤다.

```js
const draw = (curr) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const tot = 1000;
  const percent = Math.floor((curr / tot) * 100);
  const height = 25;

  if (this.width === null) {
    this.width = document.querySelectorAll('th')[2].clientWidth;
  }
  const width = this.width * (percent / 100);

  canvas.width = width + 50;
  canvas.height = height;
  ctx.fillStyle = 'green';
  ctx.font = '10px Aria';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = 'white';

  // 퍼센트값
  ctx.fillText(`${percent}%`, 8, height - 10);
  ctx.textAlign = 'right';

  // 실제값
  ctx.fillText(curr, width + 30, height - 10);
  ctx.textAlign = 'left';

  return canvas;
};
```

**결과**
![canvas](/img/post-2019-06-10-1.png){:width="100%" height="50%"}

[idchoi2-blog]: https://medium.com/@idchoi2/javascript-%EB%8F%84%ED%98%95-%EA%B7%B8%EB%A6%AC%EA%B8%B0-html-vs-svg-vs-canvas-%EC%84%B1%EB%8A%A5-%EB%B9%84%EA%B5%90-9e1ce2396fcd
