---
title: 썸네일 이미지 생성
date: 2021-11-10 17:55:44
categories:
- Lab
comments: false
thumbnail: '/images/thumbnail/create-thumbnail.png'
---

블로그엔 썸네일(thumbnail) 이미지도 같이 추가해야하는데 매번 그림을 찾는것도 그 그림의 픽셀이 깨지는 것도 번거로워서 글자와 배경만 바뀌는 심플한 이미지로 대체해봤습니다.

아래는 그 썸네일 이미지를 생성할 수 있는 페이지입니다.
텍스트를 입력하고, 색상을 선택하면 이미지를 다운 받을 수 있고, 색상값은 미리 대중화 된 걸로 설정해두었습니다.

<iframe src="https://jelee603.github.io/code/create-thumbnail.html" style="width: 100vh; height: 30vh"></iframe>

코드는 배경과 텍스트 정렬이 된, 캔버스를 그려두고 저장했을 때, [toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) 이용해서 png 파일를 만들고, 임시로 `<a link>` 만들었다가 지우는 방법으로 다운로드 할 수 있게 만들었습니다. 

컬러값 부분은 [이벤트 버블링](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events#:~:text=%EB%8B%BF%EC%9D%84%20%EB%95%8C%EA%B9%8C%EC%A7%80%20%EA%B3%84%EC%86%8D%ED%95%A9%EB%8B%88%EB%8B%A4.-,%EB%B2%84%EB%B8%94%EB%A7%81,-%EB%8B%A8%EA%B3%84%EC%97%90%EC%84%9C%EB%8A%94%2C%20%EC%A0%95%ED%99%95%ED%9E%88%20%EB%B0%98%EB%8C%80%EC%9D%98)이 되니 부모 div 에 클릭 이벤트를 걸어두고 버튼마다 [데이터 속성](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes)값으로 버튼을 눌렸을 때, 색상이 바뀔 수 있도록 처리했습니다. 


