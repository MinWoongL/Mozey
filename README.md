# SSAFY 9기 특화프로젝트

# A510 TenTen

![메인베너](./assets/images/Logo2.png)

## **0️⃣ 프로젝트 개요**

🎈 프로젝트명 : **Mozey**❓

📌 프로젝트 컨셉 : 타인에 대한 호기심을 활용한 경제 지식 습득 서비스

🛠 개발 기간 : 23.08.28 ~ 23.10.06 (6주)

🧑🏻 팀원 : 이민웅, 송채은, 임병국, 조윤상, 지한얼, 황상미

💻 사용 기술스택 : SpringBoot, React, AWS + (4. 시스템 아키텍처 참고)



## **1️⃣ 팀원 정보 및 업무 분담 내역**

<table>
  <tr>
    <td align="center"><a href="https://github.com/MinWoongL"><img src="https://avatars.githubusercontent.com/u/65647667?v=4" width="100px;" alt=""/><br /><sub><b>이민웅</b></sub></a><br /><sub><b>팀장</b><br>ENFJ</br></sub></td>
    <td align="center"><a href="https://github.com/SongChaee"><img src="https://avatars.githubusercontent.com/u/122426072?v=4" width="100px;" alt=""/><br /><sub><b>송채은</b></sub></a><br /><sub><b>서기</b><br>ENFP</br></sub></td>
    <td align="center"><a href="https://github.com/bbangkku"><img src="https://avatars.githubusercontent.com/u/122846143?v=4" width="100px;" alt=""/><br /><sub><b>임병국</b></sub></a><br /><sub><b>서기</b><br>ENFP</br></sub></td>      
    <td align="center"><a href="https://github.com/YOUNPRIZE"><img src="https://avatars.githubusercontent.com/u/76830587?v=4" width="100px;" alt=""/><br /><sub><b>조윤상</b></sub></a><br /><sub><b>컨텐츠(산출물)</b><br>ISFJ</br></sub></td>  
	<td align="center"><a href="https://github.com/jihaneol"><img src="https://avatars.githubusercontent.com/u/104291422?v=4" width="100px;" alt=""/><br /><sub><b>지한얼</b></sub></a><br /><sub><b>컨텐츠(영상)</b><br>ENTJ</br></sub></td>      
	<td align="center"><a href="https://github.com/sangmihwang"><img src="https://avatars.githubusercontent.com/u/102012985?v=4" width="100px;" alt=""/><br /><sub><b>황상미</b></sub></a><br /><sub><b>컨텐츠(PPT)</b><br>ENTP</br></sub></td>  
  </tr>
</table>

| 이름                      | 역할       | 설명                                                         |
| ------------------------- | ---------- | ------------------------------------------------------------ |
| 이민웅 (팀장)             | Full Stack | [FrontEnd] 메시지 확인기능구현 및 api 연결<br/>[FrontEnd] 뉴스, 퀴즈 기능구현 및 api 연결<br/>[BackEnd] Quiz API 설계, 구현<br/>[BackEnd] 뉴스, 퀴즈 크롤링 및 AI 퀴즈생성 자동화<br/>[Infra] CI/CD 구축 및 nginx 웹 서버 연결 |
| 송채은                    | Full Stack | [FrontEnd] 마이페이지, 질문 신청 페이지 생성 및 api 연결<br/>[FrontEnd] 친구 추가 및 투표 시에 사용되는 친구 검색 모달창 생성 및 api 연결<br/>[BackEnd] 코인 시세 정보 크롤링 및 관련 API 설계, 구현 |
| 임병국                    | Full Stack | [FrontEnd] Firebase 푸시 알림 기능 구현 및 API 연결<br/>[FrontEnd] 코인 환전 기능 구현 및 API 연결<br/>[FrontEnd] 코인 환율 적용 및 데이터 시각화<br/>[BackEnd] Firebase Cloud Messaging (FCM) 연동, API 설계 및 구현 |
| 조윤상                    | Full Stack | [FrontEnd] User 관련 정보 설계 및 구현<br/>[FrontEnd] Zustand를 이용한 UserInfoStore 구현<br/>[BackEnd] User API 설계 및 구현 |
| 지한얼<br/>BackEnd Leader | Full Stack | [BackEnd] 투표, 질문 관련 API 설계 및 구현<br/>[Infra] NGINX, 도커 설정 |
| 황상미                    | Full Stack | [FrontEnd] Yarn, React 활용 PWA 구조 설계 및 전체 페이지 HTML, CSS 구조화<br/>[FrontEnd] 투표 및 메시지함 페이지 생성 및 api 연결<br/>[BackEnd] 뉴스 기사 크롤링  및 뉴스 관련 API 설계, 구현 |



## **2️⃣ 서비스 대표 기능**

<h4>Web</h4>

| 기능               | 세부기능                                                     |
| ------------------ | ------------------------------------------------------------ |
| 회원 기능          | - 회원가입 / 로그인 / 로그아웃 - 회원정보 변경 및 탈퇴       |
| 프로필             | - 사용자 정보 조회 - 파충류 정보 조회                        |
| 케이지 상태 조회   | - 케이지 온도 / 습도 / UV 등 표시 - 실시간 영상 송출 - 카메라 위치 조종 |
| 케이지 상태 조절   | - 케이지 온도 / 습도 / UV 등 환경 설정                       |
| 파충류별 정보 등록 | - 동물의 종류 등록 - 종류별 가이드라인 제공                  |
| 먹이 주기 알림     | - 먹이를 제공하는 시간에 맞춰 알림 - 먹이 주기 입력          |
| 물품 판매처 제공   | - 판매처 연결                                                |



## 3️⃣ 서비스 화면

<h2>카카오 소셜 로그인 및 회원가입</h2>

* 카카오 로그인

![회원가입](./assets/images/kakao.gif)

<h2>마이페이지</h2>

* 마이페이지에서 친구 추가

![친구추가](./assets/images/mypage addfriend.gif)

* 질문 신청

![질문신청](./assets/images/registques.gif)

* 질문 신청 내역

![질문신청내역](./assets/images/applyquestion.gif)

* 구독

![구독](./assets/images/sub.gif)

<h2>투표</h2>

* 질문에 해당하는 친구 투표 및 포인트 획득

![투표](./assets/images/vote.gif)

* 투표 횟수 제한

![투표제한](./assets/images/time.gif)

<h2>교환소</h2>

* 주가 확인

![주가확인](./assets/images/kospi.gif)

* 재화 환전

![재화환전](./assets/images/exchange.gif)

<h2>뉴스</h2>

* 뉴스를 읽고, 퀴즈 풀이

![재화환전](./assets/images/newsandquiz.gif)

<h2>칭찬 메시지함 및 알림 기능</h2>

* 투표 받은 칭찬 메시지함 확인

![재화환전](./assets/images/message.gif)

* 재화 부족

![재화부족](./assets/images/short.gif)

* 투표자 확인

![투표자확인](./assets/images/check.gif)



## 4️⃣ 시스템 아키텍처 및 개발 환경

<h4>🌐 공통</h4>

| 상세               |       내용        |
| ------------------ | :---------------: |
| GitLab             |     형상 관리     |
| Jira               | 일정 및 이슈 관리 |
| Mattermost         |   커뮤니케이션    |
| Notion             | 일정 및 문서 관리 |
| IntelliJ           |   IDE (2022.02)   |
| Visual Studio Code |        IDE        |

</br>

<h4>📱 FrontEnd</h4>

| 상세             |  버전   |
| ---------------- | :-----: |
| React            |  5.0.1  |
| zustand          |  4.3.9  |
| react-router-dom | 6.14.2  |
| Node.js          | 18.17.0 |
| yarn             |  9.6.7  |

</br>

<h4>💾 BackEnd</h4>

| 상세           |    버전     |
| :------------- | :---------: |
| JDK (Zulu)     |   11.0.19   |
| SpringBoot     |   2.7.13    |
| MySQL          |   8.0.26    |
| Ubuntu         | 20.04.6 LTS |
| Nginx          |   1.18.0    |
| Docker         |   24.0.5    |
| Docker-compose |   2.20.2    |

</br>

<h4>System Architecture</h4>

![System Architecture](./assets/images/Architecture.png)



## 5️⃣ 컴포넌트 구조 및 프로토타입

<h4>📱 FrontEnd</h4>

```markdown
📂 crawling
  ㄴ📄 AI_quiz_create.py
  ㄴ📄 news_crawling.py
📂 functions
	ㄴ📄 index.js
    ㄴ📄 package-lock.json
    ㄴ📄 package.json
📂 node_modules
📂 public
  ㄴ📂 images
  ㄴ📄 favicon.ico
  ㄴ📄 firebase-messaging-sw.js
  ㄴ📄 index.html
  ㄴ📄 manifest.json
📂 src
  ㄴ📂 api
  	ㄴ📄 coinPriceAPI.js
  	ㄴ📄 index.js
  	ㄴ📄 notificationAPI.js
  	ㄴ📄 voteAPI.js
  ㄴ📂 assets
  ㄴ📂 component
  	ㄴ📂 common
  	ㄴ📂 exchange
  	ㄴ📂 main
  	ㄴ📂 message
  	ㄴ📂 mypage
  	ㄴ📂 news
  	ㄴ📂 vote
  	ㄴ📄 AddBook.js
  	ㄴ📄 AddVote.jsx
  	ㄴ📄 auth.js
  	ㄴ📄 index.js
  	ㄴ📄 Notification.js
  ㄴ📂 config
  	ㄴ📄 firebase.js
  ㄴ📂 hooks
  	ㄴ📄 index.js
  	ㄴ📄 useCookie.js
  	ㄴ📄 useStore.js
  ㄴ📂 pages
  	ㄴ📂 exchange
  		ㄴ📄 Exchange.jsx
  	ㄴ📂 login
  		ㄴ📂 signup
  			ㄴ📄 SignUpForm.jsx
  			ㄴ📄 SignUpSuccess.jsx
  		ㄴ📄 AuthProcess.jsx
  		ㄴ📄 LoginPage.jsx
  		ㄴ📄 LoginSuccess.jsx
  	ㄴ📂 main
  		ㄴ📄 Main.jsx
  	ㄴ📂 message
  		ㄴ📄 Message.jsx
  	ㄴ📂 mypage
  		ㄴ📄 Mypage.jsx
  	ㄴ📂 news
  		ㄴ📄 NewsPage.jsx
  	ㄴ📂 vote
  		ㄴ📄 vote.jsx
  	ㄴ📄 index.js
  ㄴ📂 services
 	ㄴ📄 vote_services.js
  ㄴ📂 store
  	ㄴ📄 userInfoStore.jsx
  ㄴ📂 style
  	ㄴ📄 Globalstyles.js
  	ㄴ📄 index.js
  	ㄴ📄 Theme.js
  ㄴ📂 utils
  	ㄴ📄 index.js
  	ㄴ📄 utilsApi.js
  	ㄴ📄 utilsConstant.js
  	ㄴ📄 utilsFunction.js
  ㄴ📄 App.css
  ㄴ📄 App.js
  ㄴ📄 App.test.js
  ㄴ📄 index.css
  ㄴ📄 index.js
  ㄴ📄 logo.svg
  ㄴ📄 reportWebVitals.js
  ㄴ📄 Router.jsx
  ㄴ📄 service-worker.js
  ㄴ📄 serviceWorkerRegistration.js
  ㄴ📄 setupTests.js
  ㄴ📄 store.js
📄 .babelrc
📄 .env
📄 .env.dev
📄 .env.prd
📄 .firebaserc
📄 .gitignore
🐳 Dockerfile.nginx
📄 firebase.json
📄 jsconfig.json
📄 nginx.conf
📄 package.json
📄 webpack.config.js
📄 yarn.lock
```

<h4>💾 BackEnd</h4>

```markdown
📂 src/main/java
  ㄴ📦 com.ssafy.tenten
  	ㄴ📄 TentenApplication.java
  	ㄴ📄 FcmMessage.java
  	ㄴ📦 api
  		ㄴ📦 controller
        	ㄴ📄 CoinInfoController.java
            ㄴ📄 FCMNotificationApiController.java
            ㄴ📄 FollowController.java
            ㄴ📄 ImageController.java
            ㄴ📄 MessageController.java
            ㄴ📄 MoneyController.java
            ㄴ📄 NewsController.java
            ㄴ📄 NewsReadController.java
            ㄴ📄 QuestionController.java
            ㄴ📄 QuizController.java
            ㄴ📄 QuizSolveController.java
            ㄴ📄 UserController.java
            ㄴ📄 VoteController.java
        ㄴ📦 repository
        	ㄴ📦 querydsl
        		ㄴ📄 QuestionRepositoryCustom
        		ㄴ📄 QuestionRepositoryCustomImpl.java
        		ㄴ📄 VoteRepositoryCustom
        		ㄴ📄 VoteRepositoryCustomImpl.java
        	ㄴ📄 CoinInfoRepository.java
        	ㄴ📄 FollowRepository.java
        	ㄴ📄 MoneyHistoryRepository.java
        	ㄴ📄 NewsReadRepository.java
        	ㄴ📄 NewsRepository.java
        	ㄴ📄 QuestionRepoRepository.java
        	ㄴ📄 QuizRepository.java
        	ㄴ📄 QuizSolveRepository.java
        	ㄴ📄 UserRepository.java
        	ㄴ📄 VoteCntRepository.java
        	ㄴ📄 VoteHistoryRepository.java
        ㄴ📦 service
			ㄴ📄 CoinInfoService
            ㄴ📄 CoinInfoServiceImpl.java
			ㄴ📄 FCMNotificationService.java
			ㄴ📄 FollowService
            ㄴ📄 FollowServiceImpl.java
			ㄴ📄 ImageService
            ㄴ📄 ImageServiceImpl.java
			ㄴ📄 MoneyHistoryService
		    ㄴ📄 MoneyHistoryServiceImpl.java
			ㄴ📄 NewsReadService
            ㄴ📄 NewsReadServiceImpl.java
			ㄴ📄 NewsService
            ㄴ📄 NewsServiceImpl.java
			ㄴ📄 QuestionService
            ㄴ📄 QuestionServiceImpl.java
			ㄴ📄 QuizService
            ㄴ📄 QuizServiceImpl.java
			ㄴ📄 QuizSolveService
            ㄴ📄 QuizSolveServiceImpl.java
			ㄴ📄 UserService
            ㄴ📄 UserServiceImpl.java
			ㄴ📄 VoteService
            ㄴ📄 VoteServiceImpl.java	
  	ㄴ📦 config
        ㄴ📦 auth
        	ㄴ📄 PrincipalDetails.java
        ㄴ📦 jwt
        	ㄴ📄 JwtFilter.java
        	ㄴ📄 JwtService.java
        ㄴ📦 oauth
        	ㄴ📦 handler
        		ㄴ📄 LoginFailureHandler.java
        		ㄴ📄 LoginSuccessHandler.java
        	ㄴ📦 provider
        		ㄴ📄 KakaoUserInfo.java
        		ㄴ📄 OAuth2UserInfo
        	ㄴ📄 PrincipalOauth2UserService.java
        ㄴ📄 FCMConfig.java
        ㄴ📄 RedisConfig.java
        ㄴ📄 SecurityConfig.java
        ㄴ📄 SwaggerConfig.java
    ㄴ📦 constant
    	ㄴ📄 CoinTransactionType
    	ㄴ📄 CoinType
    ㄴ📦 domain
    	ㄴ📦 embedded
    		ㄴ📄 MultipleChoice.java
    	ㄴ📄 CoinInfo.java
    	ㄴ📄 Follow.java
    	ㄴ📄 MoneyHistory.java
    	ㄴ📄 News.java
    	ㄴ📄 NewsRead.java
    	ㄴ📄 Question.java
    	ㄴ📄 Quiz.java
    	ㄴ📄 QuizSolve.java
    	ㄴ📄 User.java
    	ㄴ📄 VoteCount.java
    	ㄴ📄 VoteHistory.java
    ㄴ📦 dto
    	ㄴ📄 CoinInfoDto.java
    	ㄴ📄 FCMNotificationRequestDto.java
    	ㄴ📄 FollowDto.java
    	ㄴ📄 MoneyHistoryDto.java
    	ㄴ📄 NewsDto.java
    	ㄴ📄 NewsReadDto.java
    	ㄴ📄 QuestionDto.java
    	ㄴ📄 QuizDto.java
    	ㄴ📄 QuizSolveDto.java
    	ㄴ📄 TokenDto.java
    	ㄴ📄 UserDto.java
    	ㄴ📄 VoteDto.java
    ㄴ📦 exception
    	ㄴ📄 CustomException.java
    	ㄴ📄 CustomExceptionHandler.java
    	ㄴ📄 ErrorCode.java
    	ㄴ📄 ErrorResponseEntity.java
    	ㄴ📄 SuccessResponseEntity.java
    ㄴ📦 vo
    	ㄴ📦 Request
    		ㄴ📄 CoinInfoRequest.java
    		ㄴ📄 FollowRequest.java
    		ㄴ📄 MoneyHistoryRequest.java
    		ㄴ📄 NewsReadRequest.java
    		ㄴ📄 NewsRequest.java
    		ㄴ📄 QuestionRequest.java
    		ㄴ📄 QuizRequest.java
    		ㄴ📄 QuizSolveRequest.java
    		ㄴ📄 UserJoinRequest.java
    		ㄴ📄 UserRequest.java
    		ㄴ📄 UserUpdateRequest.java
    		ㄴ📄 VoteRequest.java
    	ㄴ📦 Response
    		ㄴ📄 CoinInfoResponse.java
    		ㄴ📄 FollowResponse.java
    		ㄴ📄 MessageResponse.java
    		ㄴ📄 MoneyHistoryResponse.java
    		ㄴ📄 NewsReadResponse.java
    		ㄴ📄 NewsResponse.java
    		ㄴ📄 PageResponse.java
    		ㄴ📄 QuestionResponse.java
    		ㄴ📄 QuizResponse.java
    		ㄴ📄 QuizSolveResponse.java
    		ㄴ📄 RecommendUserResponse.java
    		ㄴ📄 UserHintResponse.java
    		ㄴ📄 UserHintSelectedDataResponse.java
    		ㄴ📄 UserResponse.java
    		ㄴ📄 VoteResponse.java
📂 src/main/resources
    ㄴ📂 static
    ㄴ📂 templates
    ㄴ📄 application.yml
    ㄴ📄 application-oauth.yml
📄 .gitignore
📄 .gitkeep
🐳 Dockerfile.spring
🐘 build.gradle
🐘 gradlew
🐘 gradlew.bat
🐘 settings.gradle

```



## 6️⃣ 데이터베이스 모델링 (ERD)

![System Architecture](./assets/images/erd.png)



## 7️⃣ Convention

### Commit Convention

### 1. 커밋 유형 지정

- 커밋 유형은 영어 대문자로 작성하기

  | 커밋 유형 | 아이콘 | 코드                        | 의미                                                         |
  | --------- | ------ | --------------------------- | ------------------------------------------------------------ |
  | Feat      | ➕      | :heavy_plus_sign:           | 새로운 기능 추가                                             |
  | Fix       | 🐛      | :bug:                       | 버그 수정                                                    |
  | Docs      | 📝      | :memo:                      | 문서 수정 ex) .gitignore, swagger, README                    |
  | Style     | ✨      | :sparkles:                  | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
  | Test      | ✅      | :white_check_mark:          | 테스트 코드, 리팩토링 테스트 코드 추가                       |
  | Design    | 🎨      | :art:                       | CSS 등 사용자 UI 디자인 변경                                 |
  | !HOTFIX   | 🔥      | :fire:                      | 급하게 치명적인 버그를 고쳐야 하는 경우                      |
  | Merge     | 🔀      | :twisted_rightwards_arrows: | 브랜치 합병하는 경우                                         |
  | Infra     | 🌐      | :globe_with_meridians:      | 배포                                                         |

### 2. 제목과 본문을 빈행으로 분리

* [[Git] 커밋 메시지  규약 정리](https://velog.io/@outstandingboy/Git-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%8B%9C%EC%A7%80-%EA%B7%9C%EC%95%BD-%EC%A0%95%EB%A6%AC-the-AngularJS-commit-conventions)

```
❓유형(도메인/기능): 간단한 설명 ~~(#이슈번호)~~
<blank>
자세한 설명

🔀Merge(frombranch->tobranch): 간단한 설명 ~~(#이슈번호)~~
<blank>
frombranch에 포함된 전체적인 설명

- front
	중분류: design / publish / document / fix / styling / function / deploy

ex) ==========================

➕Feat(user/join): 회원가입 api 개발 ~~(#~~)~~

- 회원가입 api controller 추가
- 회원가입 api service 추가
- 회원가입 api repository 추가

ex2 - merge) ==============================

🔀Merge(feat/join->develop): 회원가입 기능 병합 ~~(#~~)~~

- 전체적인 내용 기입 (너무 detail x)
- 회원가입 api controller 추가
- 회원가입 api service 추가
- 회원가입 api repository 추가
```

- 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것
- 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

### 3. 제목 첫 글자는 대문자로, 끝에는 `.` 금지

### 4. 제목은 영문 기준 50자 이내로 할 것

### 5. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

### 6. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기

```
- 변경 내용 1
- 변경 내용 2
- 변경 내용 3
```



## 8️⃣ Git Flow

![System Architecture](./assets/images/gitflow.png)

- <h3>master : 제품으로 출시될 수 있는 브랜치</h3>

- <h3>develop : 다음 출시 버전을 개발하는 브랜치</h3>

- <h3>feature : 기능을 개발하는 브랜치</h3>

- <h3>release : 이번 출시 버전을 준비하는 브랜치</h3>

* <h3>hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치</h3>

  

## **9️⃣ 회고**

| 이름   | 내용                                                         |
| ------ | ------------------------------------------------------------ |
| 이민웅 | Springboot를 활용한 백엔드 설계 경험과 Infra 개념을 이해하고 Jenkins, Docker를 활용하여 CI/CD 구축을 경험해본점이 좋았다. 기능과 API를 명세서를 기준으로 문서화하여 관리한 부분이 잘 되었다고 생각하지만, ERD 설계에 있어서 DB 를 설계단계에서 고안했던 부분과 실제로 구현할 때, 데이터 타입과 field들에서 수정할 부분이 많이 생겼었다. 다음 프로젝트에서는 인증/인가 부분을 깊게 이해하고, Infra를 좀 더 효율적으로 설계해보고 싶다는 아쉬움이 남았다. |
| 송채은 | JPA를 활용한 백엔드 개발을 경험할 수 있는 기회였다. 이전 프로젝트와 유사한 기능을 다른 방식으로 구현해보며 백엔드와 프론트엔드의 협업의 중요성을 또다시 느낄 수 있는 값진 경험이었다고 생각한다. 무엇보다 적극적으로 의견을 제시하고 형상 관리 프로그램(Git, Jira, Notion)을 잘 활용해준 팀원분들께 감사하다. 다만 코드 리뷰, 리팩토링 과정을 많이 가지지 못한 점과 redis와 같은 기술을 적용해보지 못했다는 점에서는 아쉬움이 많이 남는다. |
| 임병국 | Java Springboot를 활용하여 Controller, DTO, Service를 구축하여 푸시알림 기능을 구현하였다. 사용자가 버튼을 클릭했을 때, 다른 사용자에게 알림을 보내는 기능을 구현했으나, Cron을 활용하여 정해진 시간에 알림을 보내는 기능을 구현하지 못해 아쉬움이 남는다. 코인 시세 데이터를 시각화하여 차트 UI/UX 디자인을 설계했고, 적극적인 팀원들 덕에 전체 기능들을 완성할 수 있었던 것 같다. 다음에는 기능 구현이 완료되면 팀원이 구현한 코드의 리뷰, 리팩토링 과정에 시간을 할애하고 싶다. |
| 조윤상 | 우선 불협화음없이 좋은 팀워크로 성공적인 프로젝트를 할 수 있게 해준 조원들에게 너무나 감사하고, 편안한 분위기에서 재밌게 마무리할 수 있어서 너무나 좋았다. 하지만, 발표 하루 전 제약 조건 설정을 건드리다가 큰 오류가 발생해 구현됐던 기능들이 제대로 작동하지 않아서 큰 문제가 발생했던 것에 대해 팀원들에게 너무 죄송했다. 기술적으로는 백엔드 개발자로서 크게 발전된 것이 없었던 것 같아서 아쉬움이 많이 남는다. 자율 프로젝트 때는 스스로 기술 스택을 향상시키도록 할 것이다. |
| 지한얼 | 공통때와 다르게 NGINX를 설정하면서 CLI 환경에 익숙해지고 REST API를 설계 개발 하면서 SPRING과 JPA를 더욱 깊이 있게 학습 하게 되었다. 다음에는 기능 구현이 완료되면 팀원이 구현한 코드의 리뷰, 리팩토링 과정에 시간을 할애하고 싶다. |
| 황상미 | Backend와 Frontend를 모두 경험해볼 수 있었던 좋은 기회였습니다. ERD 설계부터 UX/UI 디자인에까지 이르는 서비스 개발의 전과정에 참여함으로써 웹 서비스 개발 흐름을 이해할 수 있었고 좋은 팀원들을 만나 해당 과정에서 함께 학습하고 고민하며 성장할 수 있는 값진 경험을 쌓을 수 있었습니다. 앱 출시를 목표로 MoZey 서비스를 더욱 발전시킬 수 있는 기회가 있길 바랍니다. |

