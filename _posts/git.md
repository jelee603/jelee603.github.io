---
layout: post
title: '안 쓰면 잊어버리는 Git 명령어'
date: "2019-08-08"
category: Tip
toc: true
comments: false
coverImage: /images/cover/git.png
slug: git
---

Git은 만들고 나면 크게 문제가 없고, 충돌나지 않으면 별 문제없이 편하지만, 가끔 발생하는 문제에 대해서는 조치 방법을 위해 정리해둘 필요가 있다.
<!-- more -->
**Git First**

```html
// git clone 할때, 레포가 없다하면.. 주소를 변경해주자..
https://깃ID@github.com/레포주소 
git clone XXX 
git init 
git add README.md 
git commit -m 'first commit' 
git push origin main
```

**Git Branch**

```html
git checkout -b develop(브랜치명) 
git add . 
git commit -m 'xxx' 
git push origin develop // hotfix git checkout -b hotfix/YYYYMMDD
```

gitignore 파일을 만들고 추후에 파일들을 삭제하고 싶을땐, 항상 캐시문제로 stage 에 올라간 파일을 삭제하기가 어려웠다.
[hopeless][hopeless-blog] 블로그에서 보면 제외할 폴더나 파일을 cached 된걸 삭제해줘야한다고 한다.

**Git Ignore**

```html
// .gitignore 파일에 제외할 폴더 추가 

git rm -r --cached .
git add .
git commit -m 'ignore 수정'
```

**Git Rebase**

```html
git rebase -i HEAD~2 // (직전 커밋한 갯수 포함) 병합할 갯수를 지정 pick -> s //
pick 을 squash (s) 로 변경 :wq
```

**Git Delete**

```html
git branch -d feature/dev-1
git push origin -d feature/dev-1
```

**Git Conflict**

```html
// 1. IDE 를 활용한 해결 방법 
Webstorm : VCS > Git > Resolve Confilicts
Terminal: git merge --continue :qa 

// 2. 수동 해결 방법 
// HEAD ~ === 영역이 원본이므로 수정하고, 다시 commit 해준다. 

git add . 
git commit -m 'fix: 💥 충돌 해결'
```

**Git Cherry Pick**

```html
git cherry-pick #135bc
```

**Git Merge**

```html
git checkout A 
git merge B (Fast-forward : 합칠때 하나로 만든다.) 
git merge --no-ff B (합칠때 merge 커밋을 만든다) 

// 충돌난 파일 목록을 확인한다. 
git status 
```
git merge 충돌 해결 방법 

`<<<<<< HEAD` 부분과 `>>>>>> B` 부분을 조합해서 수정한다. 
수정 후에 add 와 commit 진행하면 정상적으로 merge commit이 진행된다.

**Git Merge 취소하기**

```html
git merge --abort
```

**Git Reset**
해당 커밋을 push 했지만 되돌리고 싶을때 사용한다. (한번에 점프고하고 싶을때, 사용하지만 가급적이면 사용하지 않는다)

```html
git reset --hard HEAD^
```

**Git Revert**
해당 커밋만 취소하고 싶을 때 사용한다. WebStorm IDE 에서는 Revert 기능을 제공하고 있다. (우클릭 - Git - Revert)

```html
git revert <되돌릴 커밋>
```

**Git Permission denied (Window10)**

```html
// 로컬에 저장된 계정이 있으면, 새 계정으로 다시 로그인을 해줘야한다. 

git config --global user.name 
git config --global user.email
```

**Git 취약점 해결방법**

```html
npm audit fix
```

## 참고
[hopeless-blog](https://brunch.co.kr/@hopeless/9)
