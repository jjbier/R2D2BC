import { I18n } from "i18n-js";
const locale = new Intl.Locale(navigator.language);
const config = {
  defaultLocale: "en",
  locale: locale.language,
  fallbackLocale: "en",
};

const translations = {
  en: {
    chapter_position: "Page %{currentPage} of %{pageCount}",
    current_chapter: "(Current Chapter)",
    nothing_found: "nothing found"
  },
  es: {
    chapter_position: "Página %{currentPage} de %{pageCount}",
    current_chapter: "(Capítulo actual)",
    nothing_found: "no se encontró nada"
  },
  gl: {
    chapter_position: "Páxina %{currentPage} de %{pageCount}",
    current_chapter: "(Capítulo actual)",
    nothing_found: "non se atopou nada"
  }
};

const i18n = new I18n(translations, config);

export default i18n;
