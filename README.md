# **My-Rss-Feed Blog**

![Yarn Version][yarn-image]
![Next Version][next-image]
![React Version][react-image]
[![Build Status][travis-image]][travis-url]

## 링크 : <https://my-rss-feed.vercel.app/rss>

### 개인적으로 흥미롭고 유익한 블로그들을 RSS 방식으로 한 곳에 모아서 보는 개인 개발 구독 사이트입니다.

## **실행 방법**

### Terminal:

```sh
- yarn install

- yarn dev
```

### Blogs:

```sh
src -> constants 폴더 -> BlogList.ts에 원하는 블로그 추가
```

## **기술 스택**

```
1. Next.js
2. React.js
3. Styled-Components
4. Typescript
5. React-Query
6. Axios
7. sentry
```

## **구현화면**

### 메인페이지

<img src="https://user-images.githubusercontent.com/66737450/200107571-2a289373-c2fc-4e57-a020-2411c9b40bde.gif"
width="100%" />

`최근에 나온 글 순으로 최대한 깔끔하게 카드 컴포넌트로 구현했습니다.`
<br/>
<br/>

### 구글검색

<img src="https://user-images.githubusercontent.com/66737450/200107952-bdbfc98f-1eb1-4395-bb98-2e813792144b.gif"
width="100%" />

`디바운스로 입력후 일정시간 후에 구글 추천 검색어를 보여줍니다. 클릭 혹은 엔터키로 구글 검색으로 넘어갑니다`
<br/>
<br/>

### 다크모드

<img src="https://user-images.githubusercontent.com/66737450/200108103-52cf3011-b1e3-45c6-91bc-3e1ace2de2b9.gif"
width="100%" />

`처음 렌더링 될때 사용자 선호 테마를 파악 후 다크모드를 선호하면 다크모드 아니면 라이트 모드로 렌더링이 됩니다. 토글 버튼으로 테마를 바꿀 수 있게 구현했습니다.`
<br/>
<br/>

## 마무리

3시간 단위로 자동으로 업데이트 되기 때문에 매번 deploy할 필요가 없습니다. 저는 브라우저 첫 화면으로 세팅해둬서 새로운 글 나오면 바로바로 볼 수 있게 세팅했습니다. 다양한 기능을 추가적으로 넣어볼려고 합니다!
<br/>
<br/>

## 정보

최규성 – [@깃허브](https://github.com/cks612)

[https://github.com/cks612](https://github.com/cks612)

<!-- Markdown link & img dfn's -->

[yarn-image]: https://img.shields.io/badge/yarn-v1.22.19-blue
[next-image]: https://img.shields.io/badge/Next-v12.3.1-white
[react-image]: https://img.shields.io/badge/React-v18.2.0-lightblue
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
