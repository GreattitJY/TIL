# 1주차-9월 1일(GitHub)

- 오늘 강의는 인프런에도 있음 ([https://www.inflearn.com/course/30분-시즌4-깃허브](https://www.inflearn.com/course/30%EB%B6%84-%EC%8B%9C%EC%A6%8C4-%EA%B9%83%ED%97%88%EB%B8%8C))
- 웹개발 30분 요약 강의 : [https://www.inflearn.com/course/제주코딩-웹개발-30분요약](https://www.inflearn.com/course/%EC%A0%9C%EC%A3%BC%EC%BD%94%EB%94%A9-%EC%9B%B9%EA%B0%9C%EB%B0%9C-30%EB%B6%84%EC%9A%94%EC%95%BD)

## 강의

- 깃 클론 하는 법 : 해당하는 레퍼토리지에 들어가서 깃 클론 링크를 복사하고 생성하고자 하는 위치에 마우스 우클릭을 통해서 git bash한다. → 복사는 shift + insert → 뒤에 .하나를 입력해야 하위 폴더가 생성이 안 된다.
  - git clone repo .→ git pull → git add . → git commit -m ‘수정 메시지’ → git push
- 커밋 메시지는 한글로 자세하게 적어준다.
- GitHub 이모티콘은 검색하면 나온다.
- GUI는 그래픽유저인터페이스
- CLI는 코드라인인터페이스 → 회사 서버는 90% 이상이 리눅스 환경
- 깃허브에서 react 기여자들의 레퍼토리지를 들어가서 프로젝트를 보고 공부할 수 있다.
- 리눅스 명령어
  $ ls
  $ mkdir JY
  $ cd ..  
   $ cd test  
   $ cd leehojun
  $ touch test.html  
   $ vi test.html
  i
  ESC
  :wq!
  $ cat test.html
  $ cd ..
  $ rmdir JY
  ***
  $ git --version
  $ git config --global [user.name]
  $ git config --global user.email [email@example.com]
  $ git config --list
  $ git clone(.git폴더까지 다 가져옵니다.)
  $ git pull(내가 이미 .git 폴더를 가지고 있고, 작업하고 있는 파일도 있는 상태)
- git ignore 한 번에 처리하는 사이트 : [https://www.toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore)
- 도메인 관리에서 A레코는 ip 관리를 의미
- 웹 서비스 만들 때

1.  (기획자) 서비스 기획
2.  (백엔드) URL 구조
3.  (백엔드) model 설계 : 게시판..게시물 제목, 내용, 사진 등....
4.  (디자이너) 디자인
5.  (프론트엔드) templates 작성(HTML)
