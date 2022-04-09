import { Address } from "../Models"

export const getAddressStr = ({suite, street, city}: Address) => `${suite} - ${street}, ${city}`