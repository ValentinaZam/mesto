const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

let buttonEdit = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileInfo = document.querySelector('.profile__prof');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_prof');

buttonEdit.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
});

let popupClose = document.querySelector('.popup__close');
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

let formElement = document.querySelector('.popup__container');

function handleFormSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__prof').textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

const cardsTemplate = document.querySelector('.template').content;
const contentElements = document.querySelector('.content');

const addCards = (link, name) => {        
    const cardElement = cardsTemplate.querySelector('.element').cloneNode(true);
        cardElement.querySelector('.element__photo').src = link;
        cardElement.querySelector('.element__photo').alt = name;
        cardElement.querySelector('.element__text').textContent = name;

        return cardElement;
}

initialCards.forEach((item) => {
    let elementCreateCard = addCards(item.link, item.name); 
    contentElements.append(elementCreateCard);})
