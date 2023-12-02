---
title: 'iTerms2 + ZSH 사용하기'
date: 2023.12.02
category: Tip
coverImage: 'images/cover/default.png'
slug: 'what-zsh'
---

맥 OS에서 가상 터미널을 기본적으로 제공하지만, 터미널이 너무 투박해서 iTerms2를 사용하고 있습니다. iTerms2는 현재 오픈소스로 개발되고 있습니다. 

zsh은 bash의 확장팩이라고 볼 수 있습니다. 
기능으로 경로 자동추론과 타이핑 교정이 있습니다. 

zsh을 더 쉽게 사용하기 위해 'Oh My ZSH'을 플러그인을 설치해서 사용하고 있는데, 테마를 설정하면 무엇보다도 이쁩니다. 


## 설정방법
1. [Homebrew](https://brew.sh) 설치합니다. 
2. zsh 설치 

    ```js
    brew install zsh
    ```
    
3. [oh-my-zsh](https://ohmyz.sh/#install) 플러그인 설치
4. [iTerms2](https://iterm2.com) 설치



## 테마 설정방법
1. agnoster 테마 설치하기 

    설정파일을 열어줍니다.
    ```js
    vi ~/.zshrc 
    ```
    'agnoster' 테마로 변경해줍니다. 
    ```js
    // zshrc
    - ZSH_THEME="robyrussell"
    + ZSH_THEME="agnoster"
    ```

2. 폰트 설치하기

    한글은 깨짐현상이 있어, powerline 폰트나 [d2Coding](https://github.com/naver/d2codingfont) 폰트를 사용합니다. 

    - iTerms2-Preferences-Text
    - 터미널-설정-프로파일-텍스트

## 편리한 단축키 설정

```js
// zshrc
# alias
alias dev="/Users/[사용자 폴더]/Desktop/dev"
```

이렇게 써두면, dev 별칭으로 이동이 가능합니다.

![터미널](/images/post/result-zsh.png)