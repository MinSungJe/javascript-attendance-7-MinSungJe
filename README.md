# javascript-attendance-precourse

## ⛳ 구현할 기능 목록

### 시간 검증 함수 구현

- 시간은 00:00에서 23:59 까지 입력을 받을 수 있다.
- 이상하게 입력을 한 경우 오류를 낸다.

### 날짜 객체 구현

- 기본적으로 날짜 객체에는 월, 일, 요일 정보를 담아야 한다.
- 시간 정보를 설정할 수 있다.
- 시간 정보를 읽고, 출석/결석/지각 여부를 파악한다.
  - 만약 시간 정보가 아직 없다면, 결석으로 처리한다.
  - 해당 요일의 시작 시간으로부터 얼마나 지났는 지 확인하여 파악한다.
- 날짜를 출력 형식에 표시할 수 있도록 가공할 수 있다.
  - 예시 - 12월 02일 월요일 13:00 (출석)

### 출석 객체 구현

- nickname 정보가 들어오면 출석 객체를 생성한다.
- 출석 객체에는 nickname과 날짜 객체 리스트를 담는다.
- 현재 날짜에 맞춰 적당한 양의 날짜 객체를 생성한다.

### csv 정보 읽어오기

- csv로 주어진 정보를 읽어온다.
- 주어진 정보를 바탕으로 출석 객체를 생성한다.

### 출석 확인

- 닉네임과 시간을 입력하면 해당 일에 해당하는 날짜 객체에 출석 정보를 담는다.
  - 형식에 맞추지 않은 경우 에러 메세지를 출력한다. (09:59)
  - 이미 출석 정보가 있을 경우 에러 메세지를 출력 후 종료한다.

### 출석 수정

- 닉네임, 날짜, 시간을 입력하면 출석을 수정한다.
  - 없는 닉네임일 경우 에러 메세지를 출력 후 종료한다.
  - 미래 날짜를 입력한 경우 에러 메세지를 출력 후 종료한다.
  - 주말이나 공휴일에 출석한 경우 에러 메세지를 출력 후 종료한다.
  - 형식에 맞추지 않은 경우 에러 메세지를 출력 후 종료한다.
  - 캠퍼스 운영 시간이 아닌 경우 에러 메세지를 출력 후 종료한다.

### 출석 기록 확인

- 닉네임을 입력하면 오늘까지의 출석 정보를 확인한다.
  - 없는 닉네임일 경우 에러 메세지를 출력 후 종료한다.

### 사용자 입력부 구현

- Q를 입력할 때까지 서비스를 이용할 수 있는 입력부를 구현한다.

### 출력부 구현

- 계산한 정보를 출력할 수 있는 출력부를 구현한다.

### 제적 위험자 확인

- 모든 출석 객체에서 제적(제적/면담/경고) 위험자를 확인할 수 있다.
  - 경고: 결석 2회 이상 / 면담: 결석 3회 이상 / 제적: 결석 5회 초과
- 제적 위험자 목록을 출력한다.
  - 제적 -> 면담 -> 경고 순으로 출력한다.
  - 지각+결석 내림차순 -> 닉네임 오름차순으로 정렬한다.
