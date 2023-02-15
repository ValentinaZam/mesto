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

const buttonEditProfile = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.popup_profile');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__prof');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_prof');
const popupTitle = document.querySelector('.popup__title');
const formPopupEditProfile = document.querySelector('.popup__container_profile-edit');
const cardsTemplate = document.querySelector('.template').content.querySelector('.element');
const cardsContainer = document.querySelector('.content');
const buttonPopupCloseEditProfile = document.querySelector('.popup__close_edit');
const popupAddCard = document.querySelector('.popup_add');
const buttonAddCard = document.querySelector('.profile__button-add');
const popupCloseFormAddCard = document.querySelector('.popup__close_add');
const nameImage = document.querySelector('.popup__input_type_mesto');
const linkImage = document.querySelector('.popup__input_type_link');
const formAddImage = document.querySelector('.popup__container_image-add');
const popupOpenImage = document.querySelector('.popup_image');
const elementPopupImageOpen = document.querySelector('.popup__photo');
const popupImageText = document.querySelector('.popup__text');
const popupCloseImage = document.querySelector('.popup__close-image');


function openPopup(element) {
    element.classList.add('popup_opened');
}

function closePopup(element) {
    element.classList.remove('popup_opened');
}

buttonEditProfile.addEventListener('click', () => {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
});

buttonPopupCloseEditProfile.addEventListener('click', closePopup);

function handleFormEditProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    closePopup(popupProfile);
}
formPopupEditProfile.addEventListener('submit', handleFormEditProfile);

const createCard = (link, name) => {
    const cardElement = cardsTemplate.cloneNode(true);
    const elementPhotoCard = cardElement.querySelector('.element__photo');
    elementPhotoCard.src = link;
    elementPhotoCard.alt = name;
    cardElement.querySelector('.element__text').textContent = name;
    cardElement.querySelector('.element__photo').addEventListener('click', (evt) => {
        openPopup(popupOpenImage);

        elementPopupImageOpen.src = evt.target.src;
        elementPopupImageOpen.alt = evt.target.alt;
        popupImageText.textContent = evt.target.alt;
    });

    const handleClickElement = (evt) => {
        const { target } = evt;
        if (target.closest('.element__button-like')) {
            target.classList.toggle('element__button-like_active');
        } else if (target.closest('.element__button-delete')) {
            target.closest('.element').remove();
        }
    };
    cardElement.addEventListener('click', (evt) => handleClickElement(evt));

    return cardElement;
}

initialCards.forEach((item) => {
    const elementCreateCard = createCard(item.link, item.name);
    cardsContainer.append(elementCreateCard);
});

buttonAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
});

popupCloseFormAddCard.addEventListener('click', () => {
    closePopup(popupAddCard);
})

function handleFormSubmitImage(evt) {
    evt.preventDefault();
    const elementArrayImage = createCard(linkImage.value, nameImage.value);
    cardsContainer.prepend(elementArrayImage);
    closePopup(popupAddCard);
}

formAddImage.addEventListener('submit', handleFormSubmitImage);

popupCloseImage.addEventListener('click', () => {
    closePopup(popupOpenImage);
})