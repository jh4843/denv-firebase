# denv-firebase

# install

- npm install -g firebase-tools

# Commands

- Comamnds 확인
  - firebase --help
- Login
  - firebase login / firebase loout
- Project 리스트 확인
  - firebase projects:list
- Proejct 생성
  - firebase projects:create (project-name)


# Storage
 - rules 변경
   - 인증된 사용자만: allow read, write: if request.auth != null;

# Database
 - rules 변경
   - 인증된 사용자만: allow read, write: if request.auth != null;