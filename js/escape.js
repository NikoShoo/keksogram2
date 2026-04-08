const windows = [];
let listener = null;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    windows[windows.length - 1]();
    windows.pop();
    if (!windows.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const registerWindows = (closeWindow) => {
  windows.push(closeWindow);
  if (!listener) {
    document.addEventListener('keydown', onDocumentKeydown);
    listener = 'yes';
  }
};

export const unregisterWindows = () => {
  windows.pop();
  if (!windows.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};
