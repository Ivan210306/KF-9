Написать в файл style.css следующие свойсва:

.task__action:hover {
  background: #f6f4ff;
  border-color: rgba(30, 10, 60, 0.2);
  box-shadow: 0 6px 12px rgba(126, 102, 205, 0.18);
}
.task__action:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(126, 102, 205, 0.22);
}
.task__action:active {
  transform: translateY(1px);
}
.task__icon {
  width: 14px;
  height: 14px;
  display: block;
}


После написания добавить измененные файлы в репозиторий, закомитить и запушить:

git add .
git commit -m "style(task): кнопки действий — базовые стили и состояния"
git push
