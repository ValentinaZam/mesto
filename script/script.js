let buttonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__prof');

buttonEdit.addEventListener('click', () =>{
    popup.classList.add('popup_opened');
    let popupName = document.querySelector('.popup__name');
    popupName.value = profileName.textContent;
    let popupInfo = document.querySelector('.popup__info');
    popupInfo.value = profileInfo.textContent;
});

let popupClose = document.querySelector('.popup__close');
    popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__info');

function handleFormSubmit (evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__prof').textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit); 

