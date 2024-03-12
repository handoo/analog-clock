# Analog clock

made by Jinmyeong.<br />
email: me@handoo.io

## 실행방법

### 개발환경

다음과 같은 환경에서 개발된 프로젝트입니다.<br />
- node v20.3.1<br />
- npm v9.6.1

### 의존성 설치 `npm clean-install`

실행하기 앞서 구동에 필요한 라이브러리를 설치합니다.

```bash
npm clean-install
```

### 개발 모드 실행 `npm start`

로컬 개발 환경에서 프로젝트를 실행합니다.

```bash
npm start
```

### 프로젝트 빌드 `npm build`

배포를 위해 프로젝트를 빌드합니다.

```bash
npm build
```

## 요구사항

- 현재 시간 기반 시침, 분침, 초침 표현
  - 초침의 표시는 선택적으로 할 수 있어야 합니다.
- 시계 마우스 오버 시 툴팁을 통한 현재 시간 표시
  - 툴팁은 마우스 포인터의 우상단에 위치해야 하며, 마우스의 움직임에 따라 위치가 지속적으로 업데이트 되어야 합니다.

## 컴포넌트 사용

```javascript
function App() {
    return (
        <Clock />
    );
}
```

초침이 필요할 경우 다음과 같이 적용할 수 있습니다.

```javascript
function App() {
    return (
        <Clock secondHand />
    );
}
```

## 데모
[여기](http://analog-clock-jm.s3-website.ap-northeast-2.amazonaws.com/)를 눌러 데모를 확인해 보실 수 있습니다.<br />
링크가 연결되지 않는 경우 아래 링크를 복사하고 브라우저에 붙여넣어 확인하실 수 있습니다.<br />
http://analog-clock-jm.s3-website.ap-northeast-2.amazonaws.com/