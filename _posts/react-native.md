---
title: 'React Native'
toc: true
comments: false
category: React
coverImage: /images/cover/react-native.png
date: "2022-03-17 14:00:00"
slug: react-native
---

리액트 네이티브 앱은 [Expo CLI](https://docs.expo.dev/get-started/create-a-new-app)를 설치해서 시작합니다. 

<!-- more -->
## 설치하기

```js
$ expo init my-app
$ cd my-app
$ expo start
```

핸드폰에 Expo 앱이 설치하고 `expo start` 실행 후 생성된 QR 코드를 핸드폰 카메라로 인식해서 링크로 이동합니다. 
와이파이로 같은 네트워크에 있다면, 화면을 확인할 수 있습니다. 

## Async Storage 적용하기

[공식 문서](https://reactnative.dev/docs/asyncstorage)에 `react-native`패키지에서 사용하던 방법이 현재는 `react-native-async-storage`에서 사용하는 방법으로 권장됩니다. 

[유튜브 영상](https://www.youtube.com/watch?v=aCe0h50hyCc)을 보면서 예제를 해봤습니다.

```js
// App.js

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  let index = 0;
  const saveData = async () => {
    try {
      let user = `Jelee ${index++}`;
      AsyncStorage.setItem('user', user);
    } catch (error) {
      // Error saving data
    }
  };

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      alert(user);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={saveData}>
        <Text>Click me to save data</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={displayData}>
        <Text>Click me to display data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
버튼을 클릭하면, 카운트를 계속 증가시켜 스토리지에 추가해보고 `Click me to display data`버튼을 클릭하면 증가한 숫자가 팝업창에 뜹니다.

## 리액트 개발 툴
애뮬레이터를 실행했을 때, 개발 툴 명령어를 설치하면 개발자 도구로 UI 컴포넌트 트리를 확인할 수 있습니다. 
[참고](https://jeffgukang.github.io/react-native-tutorial/docs/basic-tutorial/basic-functions/02-debugging/debugging-kr.html)

## 리액트 네이티브 버그 해결방안 

> Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. <br/>
> Check the render method of `App`. <br/>
> 해결 방법:
> import 한 경우 export 가 잘 되었는지 확인한다. 책에선 `import { AppLoading } from 'expo'` 로 사용했던 것이 그 후로 버전이 바뀌면서 [expo-app-loading](https://docs.expo.dev/versions/latest/sdk/app-loading/) 모듈 설치 방법으로 변경되었다.그래서 위와 같이 import 는 했는데, 올바른 모듈이 없을 경우에 발생한다.

----
##### XDLError: ValidationError: "scheme" is not allowed

> XDLError: ValidationError: "scheme" is not allowed <br/>
> 해결 방법: 
> $ rm -rf .expo  //디렉토리를 삭제하고 실행해본다. [[자세히]](https://github.com/expo/expo-cli/issues/2951)


##### React Native `RuntimeError: abort(Error: xcrun exited with non-zero code: 2` on iOS simulator

https://github.com/expo/expo-cli/issues/2413