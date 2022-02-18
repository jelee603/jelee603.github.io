---
layout: _posts
title: Port
date: 2021-10-10 23:31:07
categories:
  - Option
toc: true
thumbnail: '/images/port.png'
comments: false
---

#### 점유중인 Port 종료하는 방법:

```js
// for Mac
$ lsof -i :{PORT}

$ kill -9 {PID}
```

점유하고 있는 포트번호의 PID(Porcess ID) 를 찾아서 kill 로직을 써준다.
<!-- more -->

```js
lsof -i :19000

COMMAND  PID  USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    6284 jieun   39u  IPv6 0x18419eaeae92a123      0t0  TCP *:igrid (LISTEN)

kill -9 6284
```
