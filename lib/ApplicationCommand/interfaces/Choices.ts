import Localizations from "./Localizations";

export default interface Choices {
  name: string;
  value: string;
  name_localizations?: Localizations;
}
