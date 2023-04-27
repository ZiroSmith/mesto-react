function App() {
  return (
    <>
    <div className="App">
    <header class="header">
      <img class="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип" />
    </header>
    <main class="content">
      <section class="profile">
          <div class="profile__avatar">
            <button class="profile__avatar-button" type="button" aria-label="Изменить Аватар"></button>
            <img class="profile__avatar-image" src="<%=require('./images/avatar.jpg')%>" alt="Аватар" />
          </div>
          <div class="profile__info">
            <h1 class="profile__name">Леонардо</h1>
            <button class="profile__edit-button" type="button" aria-label="Редактировать"></button>
            <p class="profile__profession">Черепашка-ниндзя</p>
          </div>
        <button class="profile__add-button" type="button" aria-label="Добавить"></button>
      </section>
      <section class="elements"></section>
    </main>
    <footer class="footer">
        <p class="footer__text">&copy; 2023 Mesto Russia</p>
    </footer>

    <div class="popup popup_type_item">
      <div class="popup__container">
        <button class="popup__close-button" type="button" aria-label="Закрыть"></button>
        <form class="form form_edit" name="profile-info" novalidate>
          <h2 class="form__title">Редактировать профиль</h2>
          <input id="name-input" class="form__input form__input_type_name" name="name" type="text" placeholder="Имя" required minlength="2" maxlength="40" />
          <span id="name-input-error" class="form__input-error"></span> 
          <input id="profession-input" class="form__input form__input_type_profession" name="job" type="text" placeholder="Профессия" required minlength="2" maxlength="200" />
          <span id="profession-input-error" class="form__input-error"></span>
          <button class="form__save-button form__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div class="popup popup_type_add">
      <div class="popup__container">
        <button class="popup__close-button" type="button" aria-label="Закрыть"></button>
        <form class="form form_add" name="add-card" novalidate>
          <h2 class="form__title">Новое место</h2>
          <input id="place-input" class="form__input form__input_type_title" name="name" type="text" placeholder="Название" required minlength="2" maxlength="30" />
          <span id="place-input-error" class="form__input-error"></span>
          <input id="url-input" class="form__input form__input_type_link" name="link" placeholder="Ссылка на картинку" required type="url" />
          <span id="url-input-error" class="form__input-error"></span>
          <button class="form__save-button form__save-button_create form__submit" type="submit">Создать</button>
        </form>
      </div>
    </div>

    <div class="popup popup_type_avatar">
      <div class="popup__container">
        <button class="popup__close-button" type="button"></button>
        <form class="form form_avatar" name="avatarUpdateForm" novalidate>
          <h3 class="form__title">Обновить аватар</h3>
            <input id="avatar-input" class="form__input form__input_type_link" name="avatar" type="url" placeholder="Аватар" required />
            <span id="avatar-input-error" class="form__input-error"></span>
            <button class="form__save-button form__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div class="popup popup_type_expand">
      <div class="popup__container popup__container_expand">
        <div class="popup__container-info">
          <button class="popup__close-button popup__close-button_type_expand" type="button" aria-label="Закрыть"></button>
          <img class="popup__image-expand" src="#" alt="" />
          <h2 class="popup__text-expand"></h2>
        </div>
      </div>
    </div>

    <div class="popup popup_type_delete">
      <div class="popup__container">
        <button class="popup__close-button" type="button"></button>
        <form class="form" name="confirmDelForm" novalidate>
          <h3 class="form__title">Вы уверены?</h3>
          <button class="form__save-button form__save-button_delete form__submit" type="submit">Да</button>
        </form>
      </div>
    </div>
    <template id="card-template">
      <article class="card">
        <button class="card__del-button" type="button" aria-label="Удалить"></button>
        <img class="card__image" src="#" alt="" />
        <div class="card__info">
          <h2 class="card__text"></h2>
          <div class="card__like-container">
            <button class="card__like-button" type="button" aria-label="Нравится"></button>
            <p class="card__like-number"></p>
          </div>
        </div>
      </article>
    </template>
    </div>
    </>
  );
}

export default App;
