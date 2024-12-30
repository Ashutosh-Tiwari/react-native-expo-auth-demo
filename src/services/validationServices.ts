export const validatePhone = async (phone: string) => {
    // TODO: replace with actual validation API
    const response = await fetch(`https://dummyapi.com/validate-phone?phone=${phone}`);
    const data = await response.json();
    return data.valid && !data.voip;
  };

  export const validateEmail = async (email: string) => {
    // TODO: replace with actual validation API
    const response = await fetch(`https://dummyapi.com/validate-email?email=${email}`);
    const data = await response.json();
    return data.valid && !data.inUse;
  };