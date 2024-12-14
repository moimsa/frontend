# MOIMSA Frontend

## 기획

    - 정원석
    - 이주희
    - 장진명
    - 전일수
    - 정태양

## 디자인

    이주희
    - https://www.figma.com/design/bOcDENZ8ugPh9Cftzjhg6R/MOIMSA?node-id=13-78&t=nwQ5exdlhgOIJs9r-1

## 레포지토리

    - https://github.com/moimsa/frontend

## 개발

    - 정원석
    - 이주희
    - 장진명
    - 전일수
    - 정태양

## 개발 환경 셋팅

    1. 개발 환경 셋팅
    1-1. git clone https://github.com/moimsa/frontend.git
    1-2. npm i

    2. 서버 실행
    - npm run start 

## API 목록


## 브랜치 전략

    1. git clone
        - 작업할 프로젝트 레포를 클론해줍니다.

    2. branch 생성 (vscode에서 진행)
        - git branch (현재 branch 목록 확인 // 현재위치 juhee)
        - git branch 개발할 branch명 (ex: git branch juhee // juhee branch 생성)
        - git branch (branch 목록에 잘 생성되었는지 확인)
        - git checkout 개발할 branch명 (ex: git checkout seok // seok branch로 이동)

        개발완료후 커밋 진행
        - git add .
        - git commit -m "커밋메시지"
        - git push (해당 branch가 github에 존재하지 않아 에러메세지 발생하며 해당 메세지 복붙하면 편함)
        - git push --set-upstream origin juhee (juhee branch 등록 및 커밋된 파일 저장소로 업로드)

    4. 개발완료된 branch를 juhee로 머지 (github 페이지에서 진행)
        - code 탭에서 등록한 branch 메세지 확인
        - Compare & pull request 클릭
        - description 간략한 내용 작성 (실무에서는 코드리뷰를 위해 아주 상세하게 적는다고 함, 대충 적으면 리젝당함)
        - merge전 코드리뷰가 필요할시 Reviewers에 리뷰어 등록
        - Assignees 본인 선택
        - Labels 본인 라벨 선택
        - Project 현재 프로젝트 선택
        - add a description 내용에 closes #(개발 완료된 이슈 선택) (완료되면 해당 이슈는 프로젝트에서 Done처리됨)
        - Create PR 클릭
        - Merge PR 클릭 (Merge는 코드리뷰어 승인이 끝난후 작업자 본인이 진행함)
        - Confirm Merge 클릭
        - Delete Branch 클릭 (개발 완료된 Branch는 더 이상 필요하지 않으므로 github에서 삭제)
        - Code 탭으로 돌아와 개발한 소스가 juhee로 merge되었는지 확인
        - Branch 목록에 삭제되었는지 확인

    5. Local 저장소에 juhee branch pull 및 개발 완료된 Branch 삭제
        - git branch (branch 리스트 확인)
        - git chekchout juhee (juhee Branch로 이동)
        - git pull (github 저장소와 소스 동기화)
        - git branch -D 삭제할branch명 (ex : git branch -D nav)