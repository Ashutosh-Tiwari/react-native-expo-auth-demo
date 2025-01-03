import { ERRORS } from "constants/strings";
import { ParseError, parsePhoneNumberWithError } from "libphonenumber-js";
import * as yup from "yup";

export const testValidNumber = (value?: string) => {
  if (!value) return false;

  try {
    const parsedPhoneNumber = parsePhoneNumberWithError(value, {
      defaultCountry: "US",
    });
    if (!parsedPhoneNumber || !parsedPhoneNumber.country) return false;
    return parsedPhoneNumber.isValid();
  } catch (error) {
    if (error instanceof ParseError) {
      console.log(error.message);
    }
    return false;
  }
};

export const phoneNumberSchema = yup
  .string()
  .min(10, ERRORS.INVALID_PHONE_NUMBER)
  .max(10, ERRORS.INVALID_PHONE_NUMBER)
  .required(ERRORS.PHONE_NUMBER_REQUIRED);
// .test("valid_number", ERRORS.INVALID_PHONE_NUMBER, testValidNumber) TODO: add back the test scenario for valid number checks

export const emailSchema = yup
  .string()
  .required(ERRORS.EMAIL_REQUIRED)
  .min(10, ERRORS.MIN_MAX_CHARS_EMAIL_REQUIRED)
  .max(50, ERRORS.MIN_MAX_CHARS_EMAIL_REQUIRED)
  .email(ERRORS.INVALID_EMAIL)
  .test("valid-tld", ERRORS.INVALID_EMAIL, (value) => {
    const validTLDRegex = /\.[a-zA-Z]{2,}$/; // Check for at least two characters after a dot (.)
    return value ? validTLDRegex.test(value) : false;
  });

export const codeSchema = yup
  .string()
  .required(ERRORS.CODE_REQUIRED)
  .min(6, ERRORS.MIN_MAX_CHAR_CODE);
