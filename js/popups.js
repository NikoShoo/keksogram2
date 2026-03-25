import { Popups } from "./constants";

const body = document.body;
const successTemplate = body.querySelector('#success').content.querySelector('.success');
const errorTemplate = body.querySelector('#error').content.querySelector('.error');

const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate,
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);

  body.append(popup);
};
