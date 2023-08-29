---
title: Next.js Portal 만들기
date: "2023-08-29"
category: React
tags:
coverImage: /images/cover/default.png
slug: next-portal
---

## 포탈은 왜 사용할까?

리액트에서 말하는 포탈은 부모 컴포넌트의 DOM 계층 바깥에 있는 DOM 노드로 자식을 렌더링하는 방법입니다.

리액트는 컴포넌트를 만들 때, 트리 구조로 생각해서 만드는데 부모-자식 관계로 된 구조로 만들게 됩니다. 
이 상황에서 모달창과 같은 항상 젤 위에 떠 있어야만 하는 컴포넌트의 경우에 유용하게 사용될 수 있습니다. 
가장 젤 위에 떠 있게 하려면, z-index 값을 엄청 크게 써서 덮어씌워거나 스타일을 변경해주면 가능은 하지만, 예상치 못한 스타일 오류로 부터 편하게 처리할 수 있게 할 수 있는 방법입니다. 

## 고민과 해결

Next.js 에서도 리액트와 같이 포탈 기능을 사용할 수 있었습니다만, 예상치 못한 버그는 여기서도 만나게 되었습니다. 

> Error: Hydration failed because the initial UI does not match what was rendered on the server.

Hydrate는 렌더링된 정적 페이지와 번들 파일을 클라이언트에 보낸 후, HTML DOM 위에 다시 렌더링 되면서 매칭되는 과정입니다. 정적 페이지의 dom 들을 리액트 코드에서 찾을 수 있는 과정이라고 생각하면 될거 같습니다. 그러면, 위와 같은 오류가 발생한 원인은 Next.js에서 생성한 pre-rendering 과 브라우저에서 처음 렌더링되는 리액트 트리가 달랐다고 볼 수 있습니다. 

[공식문서](https://nextjs.org/docs/messages/react-hydration-error)에서의 해결법은 useEffect 에서 초기 클라이언트 렌더링과 동일한 콘텐츠를 렌더링을 하는지 체크하는 방법으로 사용하는 것입니다. 아래와 같이 체크를 하게 되면, 불일치 되는 경우를 처리할 수 있습니다. 


```js
// _app.tsx
<Component {...pageProps} />
<div id="modal"></div>


// ModalPortal.tsx

interface ModalPortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById('modal'));
  }, []);

  if (!element) {
    return <></>;
  }

  return createPortal(children, element);
};
```

아래와 같이 사용처에서 만든 포탈을 호출해서 자식 컴포넌트를 넘겨주게 되면, `<div id="modal"></div>`에 자식 컴포넌트가 생성됩니다. 

```js
// index.tsx
return (<ModalPortal>
  <SideMenu isOpen={modalOpen} onClose={handleModal} />
</ModalPortal>);
```

## 결과 
이렇게 되면, 어느 위치에서든 모달의 컨텐츠만 변경된 모달 팝업 화면을 띄울 수 있습니다.


![포탈 화면](/images/post/next-portal.png)
