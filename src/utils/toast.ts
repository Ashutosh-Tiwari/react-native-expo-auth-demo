import Toast from "react-native-toast-message";

/**
 * Show a success toast
 * @param title - The title of the toast
 * @param message - The message of the toast
 */
export const showSuccessToast = (title: string, message: string): void => {
  Toast.show({
    type: "success",
    text1: title,
    text2: message,
    position: "bottom",
  });
};

/**
 * Show an error toast
 * @param title - The title of the toast
 * @param message - The message of the toast
 */
export const showErrorToast = (title: string, message: string): void => {
  Toast.show({
    type: "error",
    text1: title,
    text2: message,
    position: "bottom",
  });
};

/**
 * Show an info toast
 * @param title - The title of the toast
 * @param message - The message of the toast
 */
export const showInfoToast = (title: string, message: string): void => {
  Toast.show({
    type: "info",
    text1: title,
    text2: message,
    position: "bottom",
  });
};
