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

const buttonEdit = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.popup_profile');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__prof');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_prof');
const popupTitle = popup.querySelector('.popup__title');

buttonEdit.addEventListener('click', () => {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
});

const popupClose = document.querySelector('.popup__close_edit');
popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
})

const formElement = document.querySelector('.popup__container_profile-edit');

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
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
    contentElements.append(elementCreateCard);
});

const popupAdd = document.querySelector('.popup__add_image');
const buttonAdd = document.querySelector('.profile__button-add');

buttonAdd.addEventListener('click', () => {
    popupAdd.classList.add('popup_opened');
});

const popupCloseAdd = document.querySelector('.popup__add_image');

popupCloseAdd.addEventListener('click', () => {
    popupAdd.classList.remove('popup_opened');
})

const nameImage = document.querySelector('.popup__input_type_mesto');
const linkImage = document.querySelector('.popup__input_type_link');
const formAddImage = document.querySelector('.popup__container_image-add');

function handleFormSubmitImage(evt) {
    evt.preventDefault();
    const elementArrayImage = addCards(linkImage.value, nameImage.value);
    contentElements.prepend(elementArrayImage);
    popupAdd.classList.remove('popup_opened');
}
formAddImage.addEventListener('submit', handleFormSubmitImage);

const buttonLike = document.querySelector('.element__button-like');

const handleClickElement = (evt) => {
    const { target } = evt;
    if (target.closest('.element__button-like')) {
        target.classList.toggle('element__button-like_active');
    } else if (target.closest('.element__button-delete')) {
        target.closest('.element').remove();
    }
};

contentElements.addEventListener('click', (evt) => handleClickElement(evt));

const elementPhotoAll = document.querySelectorAll('.element__photo');
const popupOpenImage = document.querySelector('.popup__open_image');
const elementPopupImageOpen = document.querySelector('.element__photo_popup');
const popupImageText = document.querySelector('.popup__text');

elementPhotoAll.forEach((image) => {
    image.addEventListener('click', (evt) => {
        popupOpenImage.classList.add('popup_opened');
        console.log(image.src);
        const imageHTML = evt.target;
        elementPopupImageOpen.src = image.src;
        popupImageText.textContent = image.alt;
    });
})


const popupCloseImage = document.querySelector('.popup__close-image');

popupCloseImage.addEventListener('click', () => {
    popupOpenImage.classList.remove('popup_opened');
})

