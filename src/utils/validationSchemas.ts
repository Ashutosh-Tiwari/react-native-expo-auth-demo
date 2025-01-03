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
  .required(ERRORS.REQUIRED_PHONE_NUMBER_FIELD)
  .test("valid_number", ERRORS.INVALID_PHONE_NUMBER, testValidNumber);
