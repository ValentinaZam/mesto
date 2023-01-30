let buttonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__prof');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_prof');

buttonEdit.addEventListener('click', () =>{
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
});

let popupClose = document.querySelector('.popup__close');
    popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

let formElement = document.querySelector('.popup__container');

function handleFormSubmit (evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__prof').textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 