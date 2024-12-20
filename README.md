# JavaScript로 시작화면 만들기

![image](https://github.com/user-attachments/assets/9be47d3a-ca23-4d86-9025-645a0da236b4)


### JavaScript만을 활용하여 만들어본 크롬 초기화면 프로젝트

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

## 5. 북마크 아이템 추가 
- 북마크 추가버튼에 토글기능을 추가하기 위해 현재 상태를 나타내는 변수를 하나 만들어서 false를 담고 토글 함수안에서 해당 변수앞에 !(느낌표)를 사용해서 클릭할 때마다 상태가 바뀌도록 만들어서 토글 기능구현
- 입력폼에 값들을 작성하고 추가 버튼을 누르면 로컬 스토리지에 저장되도록 구현완료. 이때 `const createAt = Date.now();` 을 넣어서 해당 값의 id를 넣어줘서 고유성을 부여함. 나중에 수정이나 삭제할 때 해당 값을 이용.

![next](https://github.com/user-attachments/assets/ada3a110-e7df-45e7-aa6b-1991b7777e64)

---

## 6. 북마크 데이터 렌더링 및 삭제하기
- 로컬 스토리지에 저장된 데이터를 가져와서 화면에 렌더링 시키는데 이때 index.html 파일에 임시로 데이터를 만들어서 미리 스타일을 다 지정한 뒤 데이터를 추가하는 코드를 작성하면 좀 더 쉽게 작성할 수 있다.
```
/* 이런식으로 index.html에 추가될 요소들을 미리 틀을 작성한뒤 */

  <div class="bookmark_item">
    <a href="/">
      <img src="/" />
      <div class="bookmark_name">네이버</div>
    </a>
    <div class="delete_btn" id="delete_btn">삭제</div>
  </div>
```
```
/* 새로운 요소를 추가하는 함수안에 코드들을 index.html에 미리 작성해놓은 태그들을 바탕으로 작성하면 쉽게 작성가능하다. */

const setBookmarkItem = (item) => {
  const bookmarkItem = document.createElement("div");
  bookmarkItem.classList.add("bookmark_item");
  bookmarkItem.id = `bookmark-item-${item.createAt}`;

  const bookmarkUrl = document.createElement("a");
  bookmarkUrl.href = item.url;

  const bookmarkImg = document.createElement("img");
  bookmarkImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;

  const bookmarkName = document.createElement("div");
  bookmarkName.classList.add("bookmark_name");
  bookmarkName.textContent = item.name;

  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("delete_btn");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", () => {
    deleteItem(item.createAt);
  });

  bookmarkItem.appendChild(bookmarkUrl);
  bookmarkItem.appendChild(deleteBtn);
  bookmarkUrl.appendChild(bookmarkImg);
  bookmarkUrl.appendChild(bookmarkName);
  bookmarkListElement.appendChild(bookmarkItem);
};
```


![next](https://github.com/user-attachments/assets/d6d01602-3ef2-4919-9375-f7298c2f0260)





