---
title: 코드스피츠 객체지향 자바스크립트
tags:
thumbnail: '/images/thumbnail/codespitz.png'
categories: 'JavaScript'
comments: false
---

[코드스피츠 86 - 객체지향 자바스크립트](https://www.youtube.com/watch?v=E9NZ0YEZrYU&list=PLBNdLLaRx_rIRXCp9tKsg7qDQmAX19ocw) 강의를 보면서 정리한 내용을 적습니다.

5회차 강의고, 1회차부터 순차적으로 정리해봅니다.

### DAY1

Value Context: 메모리 주소에 관계없이 값이 같다고 보면 같은 것이라 보는 관점 (값 기반)

- 할당하거나 가져올 때, 값을 사용한 경우는 끝없이 복사본을 만든다.
- 상태가 관리되서 안전한게 아니라, 계속 불변하는 값들을 만들어내서 안전해 보이는 것일뿐
- 연산을 기반으로 로직을 전개

identifier Context: 힙 메모리에 있는 주소로 보는 관점 (식별 기반)

하나의 컨텍스트만 쓰는 것을 권장.

```
// 오브젝트 객체의 리터럴로 값을 만듦
const a = {
 a: 3,
 b: 5
}

const b = {
 a: 3,
 b: 5
}

console.log(a === b) // false (indentify context 기준으로 메모리의 주소를 보면 다른 값이다)
console.log(JSON.stringify(a) === JSON.stringify(b)) // true (문자열로 환원하면, 값으로 보는것이라 같다)
```

#### 객체지향 세계

- 하나의 원본

- 내부의 상태관리를 책임지는 객체
- 메시지를 통해서 위임해서 로직을 전개

- 객체 지향은 value context 를 쓰지 않는다.

> 업계에서 사용하는 고유명사를 외운다.

#### polymorphism

1. substitution (대체 가능성)

   - 확장된 객체는 원본으로 대체 가능 (자식은 부모를 대신할 수 있다.)

2. internal identity (내적일관성)
   - 생성 시점의 타입이 내부에 일관성있게 참조된다. (어느시점에서든 만들어질 때 상태를 유지한다)

ex) 오버라이딩: 부모함수를 덮어서 없애고 자식함수로 대체하는 것

```js
const Worker = class {
  run() {
    console.log('working');
  }
  print() {
    this.run();
  }
};

const HardWorker = class extends Worker {
  // 하드워커의 부분집합이 워커, 확장될 클래스는 확장할 대상을 대체할 수 있다.
  run() {
    console.log('hardWorking');
  }
};

const worker = new HardWorker(); // 워커의 인스턴스로 하드워커를 만듬
console.log(worker instanceof Worker); // substitution
worker.print(); // internal identity
```

> ES6 (2015) , ES2020 새로운 문법..

#### object essentials (객체의 본질)

1. Maintenance of State (데이터를 은닉) : 객체의 속성이 모두 프라이빗이면서 내 데이터를 관리한다.
2. Encapsulation of Functionality (기능의 캡슐화) : 메소드를 감춘다. 외부에 캡슐화해서 제공한다.
3. Isolation of change (격리) : 변화의 여파를 막고 격리시킨다. 오염시켰을 때, 전역 처리기를 걸어둔다.

```
const EssentialObject = class {
	#name = ""; // hide state
	#screen = null;
	constructor(name) {
		this.#name = name;
	}
	camouflage() {
		this.#screen = (Math.random() * 10).toString(16).replace(".", "")
	}
	get name() {
		return this.#screen || this.#name;
	}
}
```

> 연역적 사고와 귀납적 사고를 추론하는 연습을 하고, 감성적인 코드가 들어갈 필요가 없는 분야다. 개인을 개입하면 계속 어려우니, 훈련을 하자.
> 연역적 추리(몇가지만 다르다는 것만 찾으면 된다)로 케이스로부터 원리를 도출하는 것을 의미한다.

#### 알려진 기본 설계요령

SOLID 원칙 - 마틴 파울러

- SRP (Single Responsibility) 단일책임

코드를 고쳐야하는 이유는 하나뿐이야라고 만드는 방법, 잘못하게 되면 산탄총 수술이 필요하다.

다른 객체에게 위뢰한다 = 다른 객체에게 메시지를 보내는 것.

- OCP (Open Closed) 개방폐쇄

기존의 객체를 건드리지 않게 설계를 해야한다. 새로운 문제가 일어났으면 새로운 객체를 만들어서 새로운 거에대한 해결책만 내리면된다.

인터페이스나 추상클래스를 상속받아서 처리한다. 그 다음번 문제도 추상화를 받아서 해결한다.

- LSP (Liskov Substitusion, 리스코프 치환) 업캐스팅 안전해야한다.

부모쪽으로 캐스팅해서 형을 변환하는 것.

Ex) 추상층: 생물(숨을 쉰다) 구상층: 사람(생물, 다리로 이동한다), 타조(생물, 다리로 이동한다), 아메바(생물)

- ISP (Interface Substitusion, ISP 치환) 인터페이스 분리

리스코프 치환법칙을 위반하면 인터페이스로 분리한다. 똑같은 위치에서 같은 기능을 하는 경우에 위임이 불가능할 경우.

역할에 맞게 분리해서 만들어야한다. 객체의 변화가 모듈과 모듈에 관련된 인터페이스로만 분산시키는 것.

1. 소유 방법으로 분리한다.
2. 인터페이스를 만들어서 오버라이딩하면 된다.

- DIP (Dependency Inversion) 다운캐스팅 금지

의존성 역전의 법칙, 의존성은 항상 부모에서 자식으로만 상속된다.

폴리모피즘(추상인터페이스) 사용

```js
const Manager = class {
  #workers;
  constructor(...workers) {
    if (workers.every((w) => w instanceof Worker)) this.#workers = workers;
    else throw 'invalid workers';
  }
  doWork() {
    this.#workers.forEach((w) => w.run());
  }
};

const manager = new Manager(new Worker(), new HardWorker());
manager.doWork();
```

---

- DI (Dependency Injection) 의존성 주입
- DRY 중복방지
- Hollywood Principle 의존성 부패방지
  - 물어보지 말고 요청하지 마라. ex) 시간날 때, 나한테 연락을 줘.
- Law of demeter 최소 지식
  - 최소한의 지식만 가지고, 내부에서 객체의 타입, 원래 필드의 타입, 인자로 가져온 객체의 타입만 알게 하자.
  - 너무 많아지면, train wreck (열차전복) 현상이 일어난다.
- Inversion Of Control 제어 역전
  - flow control (흐름 제어) = 역으로 대치하 겠다. 즉, 위임하겠다라는 의미
  - 프로그램 실행 통제 : 어떠한 흐름으로 제어할지 결정하는 것
  - 제어를 추상화하고 제어문을 한번만 작성하면, 일반화한다.
  - 개별 제어의 차이점만 외부에서 주입한다.
  - 실제구현: 전략패턴 & 템플릿 메소드 패턴 < 컴포지트 패턴 < 비지터 패턴

---

#### SRP 준수하는 객체망이 문제를 해결하는 방법은?

다른 객체에게 의뢰한다.

1. 메시지 - 의뢰할 내용
2. 오퍼레이션 - 메시지를 수신할 객체가 제공하는 서비스
3. 메소드 - 오퍼레이션이 연결될 실제 처리기

#### 의존성의 종류

객체의 생명 주기 전체에 걸친 의존성

- 상속(extends)
- 연관(association) : 상속을 소유를 한다.
- 의존성이 높거나 역할을 개개인별로 너무 많이 부여하면 모두 퇴사한다.
- 부모는 방탄이다.
- 필드의 객체 타입을 알고 있다.

각 오퍼레이션 실행 시 임시적인 의존성

- 의존성(dependency) : 연관에서 의존성 함수로 바꾸어라. 의존성을 낮추라.

수정하기 어려운 구조 생성, if 로 감싸고 모두 분기친다.

수정 여파 규모증가하면서 순환 의존성으로 모두 망가진다.

객체지향 방법론을 배우고 변화에 대한 격리를 하기 위해서 배운다. 다른 건 회귀테스트 돌리면 안전할 수 있다는 걸 보장받기 위해. (5년 공부하면..)

> 코드에는 충분한 의도를 표현할 수 있다.

---

### DAY2

MVVM 실습해보고 점진적으로 수정해가는 과정을 배운다.

#### MVC

Model -> Controller -> View -> Model

뷰가 모델을 알고 있는 것이 문제, 모델은 비지니스 모델인데 화면에 표시되는 이유와 너무 다르다.

서로 의존적이라는게 가장 문제가 있다. 모델의 변화와 뷰의 변화가 매우 밀접.

서버에서는 컨트롤러로 가공하는 방법이라 괜찮은데 클라에서는 양방향이 서로 연동되면 안되서 문제가 된다.

#### 제왕적 컨트롤러 MVC

View -> Controller -> Model -> Controller -> View

뷰가 컨트롤러를 통해 모델을 바꾸고 뷰의 변화나 모델의 변화가 필요할 때, 컨트롤러를 짜게 된다.

#### MVP

View (getter, setter) - Presenter -> Model -> Presenter -> View (getter, setter)

뷰는 프로그래밍이 인터페이스로써 세터와 게터가 있다.

프레젠터 입장에서는 뷰의 게터, 세터를 호출한다. 사실 모델을 모르고 호출하게 된다. 뷰가 모델을 건드릴 수가 없다.

프레젠터는 통제만 한다.

#### MVVM

View <- Binder(옵저버) -> ViewModel -> Model -> ViewModel

뷰모델은 순수한 뷰이다. 뷰의 변화가 있으면 바인더가 뷰모델을 갱신해준다. 진짜 뷰와 뷰모델의 의존성을 바인더가 컨트롤한다.

뷰모 델이 뷰를 완전히 모르게 한다.

#### TypeCheck

자바스크립트는 런타임에 에러가 발견되는 즉시, throw로 멈추게 해야한다.

```
typeof type == 'string' // type 이 string 이 아니면 객체이다.
```

동등 연산자는(==) 강제 형변환을 일으키지 않아서 속도가 빠르다. 그래서 미리 체크하는 함수를 만들어서 사용하면 매번 일치 연산자(===) 로 비교하는 작업을 줄일 수 있다. 일치 연산자는 자료형 검사를 먼저하게 되서 속도가 느리다.

#### View hook & bind

어떤 뷰 모델과 매칭할지 훅이 필요하다.

HTML5 에서는 'data-' 만들지 않는 속성은 유효성 검사에서 모두 깨지게 되어있다.

https://validator.w3.org/#validate_by_uri

bind 는 내부의 훅과 뷰모델을 연결해서 반영해준다.

#### Role Design

바인더는 현재의 뷰모델을 이용해서 스캔했던 뷰를그려주는 역할만 한다.

바인딩에는 2가지 방식있다.

1. 태그를 스캔하게 만들어서 만드는 방식, 뷰와 모델을 분리해서 관리할 수 있다. (앵귤러의 방식)
2. 데이터와 연결되어 있는 뷰를 만들어서 이 뷰를 꽂게하는 컴포넌트 방식, 자기 뷰를 모델과 연결해서 만들어둔다. (리액트의 방식)

#### MVVM Sample

- 1차 개발 - SRP (Single Responsibility) 단일책임

Scanner 를 따로 만들어둔다.

변경주기에 따라 바인더가 HTML을 바꾸는 것보다는 HTML 해석 스캐너를 따로 둔다.

HTML 을 해석했을 때, 변경이 일어나면 바꿀 수 있게 하기위함이다. (객체마다 변화하는 이유를 하나만 만들고 싶어서)
