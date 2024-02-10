import LocalizedStrings from "react-localization";
import en from "./en/en.json";
import fa from "./fa/fa.json";

const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
export const Strings = new LocalizedStrings({
  en: en,
  fa: fa,
});
Strings.setLanguage(preferredLanguage);

export default Strings;
