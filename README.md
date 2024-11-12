![next](https://github.com/user-attachments/assets/4b31ab9f-d3f4-4d51-ba94-51742426723f)# JavaScript로 시작화면 만들기

![image](https://github.com/user-attachments/assets/9be47d3a-ca23-4d86-9025-645a0da236b4)


###JavaScript만을 활용하여 만들어본 크롬 초기화면 프로젝트

---

## 1. 디지털 시계 만들기
- new Date() 함수를 이용해서 오늘의 날짜들을 가져오는 getDate() 함수와 실제 요소에 적용시키는 setDate() 함수를 각자 역활에 맡게 분리시켜서 적용
- new Date() 함수를 이용해서 시간을 가져오는 getTime() 함수와 실제 요소에 적용시키는 setTime() 함수를 각자 역활에 맡게 분리시켜서 적용
- modifyiNumber 함수를 만들어서 만약 날짜가 10보다 낮으면 숫자앞에 0을 붙여준다.
- 일정한 시간 간격으로 특정 작업을 반복 실행하도록 설정하는 setInterval 함수를 사용해서 1초마다 시간을 가져오도록 만들었다.

![next](https://github.com/user-attachments/assets/800536c3-d231-461f-8cfa-2bda6c9f5dc5)


---

## 2. 검색바 만들기
- window.location.href 를 활용하여 input창에 입력되는 요소를 구글로 검색하도록 적용
- input창에 입력된 후 키보드 Enter를 누르면 검색함수가 실행되도록 적용

![next](https://github.com/user-attachments/assets/ebd3ed3a-5029-4065-87cb-530d6dbab837)


---

## 3. 명언 API 데이터 가져오기
- `https://random-quote.hyobb.com/` 주소로 API 요청을 보내서 데이터를 가져옴
- 데이터를 가져와서 로컬스토리지에 오늘 날짜와 명언을 캐싱하여 동일한 데이터를 불필요하게 반복해서 API 요청하지 않도록 하여 성능 최적화 적용.

![next](https://github.com/user-attachments/assets/be3d0e8a-5e3c-4ef5-938d-f480c06c6a79)

---

## 4. 북마크바 만들기
- 로컬스토리지에 현재 북마크 상태를 저장하여 다른 페이지를 다녀와도 로컬에 저장된 상태에 따라 렌더링 여부를 결정하도록 적용.
- 초기에 로컬스토리지에서 가져온 변수(bookmarkItem)를 계속 사용하면, 변수가 로컬스토리지의 최신 상태를 반영하지 않기 때문에 상태가 업데이트되지 않는다. 그래서 토글 함수안에도 bookmarkItem 변수를 선언해서 로컬스토리지에 최신 상태가 업데이튼 된 상태를 가져와서 동작을 수행.

![next](https://github.com/user-attachments/assets/b44a71b1-7d88-4a33-ad22-40d2edf7efd1)

---





