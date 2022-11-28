const LOCALSTORAGE_KEY = "inputData";

const input = document.querySelector(".data-field__input");
const saveBtn = document.querySelector(".data-field__btn");
const list = document.querySelector(".tasks-field__list");

input.addEventListener("input", onInputValue);
saveBtn.addEventListener("click", onClickSaveBtn);

// Зробити так, щоб зберігалось декілька значень в сховищі

function onInputValue(e) {
  let dataBase = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (!dataBase) {
    dataBase = [];
  }

  dataBase.push({ value: e.target.value });

  console.log(dataBase);

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataBase));
}

function onClickSaveBtn() {
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  setMarkUp(data);
}

function setMarkUp(data) {
  const markUp = `<li class="task-field__item">${data}
            <button class="task-field__btn doneBtn">Done</button
            ><button class="task-field__btn deleteBtn">Delete</button>
          </li>`;

  list.insertAdjacentHTML("afterbegin", markUp);
}
