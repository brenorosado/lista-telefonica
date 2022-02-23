export const phoneMask = (phoneNumber) => {
    return `(${phoneNumber.substring(0,2)}) ${phoneNumber.substring(2)}`;
};