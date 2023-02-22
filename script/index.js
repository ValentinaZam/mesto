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
const buttonAddElement = document.querySelector('.popup__submit_button_add');
const formAdd = document.querySelector('.popup__form_add');
const buttonSubmitAdd = document.querySelector('.popup__submit_add');


function closeByEscape(evt) {
    if (evt.key === "Escape") {
        const openPopup = document.querySelector(".popup_opened");
        closePopup(openPopup);
    }
}


function openPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

overlayAllPopup = Array.from(document.querySelectorAll('.popup'));
overlayAllPopup.forEach((element) => {
    element.addEventListener('click', (evt) => {
        closePopup(evt.target);
    })
})

function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}


buttonEditProfile.addEventListener('click', () => {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileInfo.textContent;
});

buttonPopupCloseEditProfile.addEventListener('click', () => {
    closePopup(popupProfile);
});

function handleFormEditProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = jobInput.value;
    closePopup(popupProfile);
}

formPopupEditProfile.addEventListener('submit', handleFormEditProfile);

function openZoomImage(evt) {
    elementPopupImageOpen.src = evt.target.src;
    elementPopupImageOpen.alt = evt.target.alt;
    popupImageText.textContent = evt.target.alt;
}

const createCard = (link, name) => {
    const cardElement = cardsTemplate.cloneNode(true);
    const elementPhotoCard = cardElement.querySelector('.element__photo');
    elementPhotoCard.src = link;
    elementPhotoCard.alt = name;
    cardElement.querySelector('.element__text').textContent = name;

    elementPhotoCard.addEventListener('click', (evt) => {
        openPopup(popupOpenImage);
        openZoomImage(evt);
    });

    cardElement.querySelector('.element__button-like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__button-like_active');
    })

    cardElement.querySelector('.element__button-delete').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    })

    return cardElement;
}

initialCards.forEach((item) => {
    const elementCreateCard = createCard(item.link, item.name);
    cardsContainer.append(elementCreateCard);
});

buttonAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
    buttonSubmitAdd.setAttribute('disabled', '');
    buttonSubmitAdd.classList.add('popup__submit_disabled');
});

popupCloseFormAddCard.addEventListener('click', () => {
    closePopup(popupAddCard);
})

function handleFormSubmitImage(evt) {
    evt.preventDefault();
    const elementArrayImage = createCard(linkImage.value, nameImage.value);
    cardsContainer.prepend(elementArrayImage);
    closePopup(popupAddCard);
    formAdd.reset();
}

formAddImage.addEventListener('submit', handleFormSubmitImage);

popupCloseImage.addEventListener('click', () => {
    closePopup(popupOpenImage);
})