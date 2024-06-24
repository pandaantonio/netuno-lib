import Localizations from "./interfaces/Localizations";

export default class MessageCommandBuilder {
  type: 3 = 3;
  name: string;
  name_localizations: Localizations;

  constructor(data?: MessageCommandBuilder) {
    if (data?.type) this.type = data.type;
    if (data?.name) this.name = data.name;
    if (data?.name_localizations)
      this.name_localizations = data.name_localizations;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setNameLocalizations(localizations: Localizations) {
    this.name_localizations = localizations;
    return this;
  }
}
