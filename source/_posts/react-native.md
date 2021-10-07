---
layout: source/_posts
title: react-native
date: 2021-09-29 10:15:57
comments: false
tags:
---

> <b>Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. <br/>
> Check the render method of `App`.</b>

import 한 경우 export 가 잘 되었는지 확인한다. 책에선 `import { AppLoading } from 'expo'` 로 사용했던 것이 그 후로 버전이 바뀌면서 expo-app-loading 모듈 설치 방법으로 변경되었다.그래서 위와 같이 import 는 했는데, 올바른 모듈이 없을 경우에 발생한다.
https://docs.expo.dev/versions/latest/sdk/app-loading/

> <b>Error: Problem validating fields in app.json. See https://docs.expo.io/workflow/configuration/
> • should NOT have additional property 'nodeModulesPath'. </b>