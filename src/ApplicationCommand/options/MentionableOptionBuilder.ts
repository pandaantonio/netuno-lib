import Localizations from "../interfaces/Localizations";

export default class MentionableOptionBuilder {
  type: 9 = 9;
  name: string;
  required: boolean;
  description: string;
  name_localizations: Localizations;
  description_localizations: Localizations;

  constructor(data?: MentionableOptionBuilder) {
    if (data?.type) this.type = data.type;
    if (data?.name) this.name = data.name;
    if (data?.required) this.required = data.required;
    if (data?.description) this.description = data.description;
    if (data?.name_localizations)
      this.name_localizations = data.name_localizations;
    if (data?.description_localizations)
      this.description_localizations = data.description_localizations;
  }

  isRequired(required?: boolean) {
    this.required = required ?? true;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setNameLocalizations(localizations: Localizations) {
    this.name_localizations = localizations;
    return this;
  }

  setDescriptionLocalizations(localizations: Localizations) {
    this.description_localizations = localizations;
    return this;
  }
}
