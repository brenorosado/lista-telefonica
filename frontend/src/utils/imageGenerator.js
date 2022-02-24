var xhr = new XMLHttpRequest();

xhr.responseType = "arraybuffer";

export const generateImageSrc = (arr) => {
    return arr.reduce((data, byte) => data + String.fromCharCode(byte), '');
};