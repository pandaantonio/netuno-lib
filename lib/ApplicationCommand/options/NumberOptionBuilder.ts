import Localizations from "../interfaces/Localizations";

export default class NumberOptionBuilder {
  type: 10 = 10;
  name: string;
  description: string;
  required: boolean;
  min_value: number;
  max_value: number;
  name_localizations: Localizations;
  description_localizations: Localizations;

  constructor(data?: NumberOptionBuilder) {
    if (data?.type) this.type = data.type;
    if (data?.name) this.name = data.name;
    if (data?.min_value) this.min_value = data.min_value;
    if (data?.max_value) this.max_value = data.max_value;
    if (data?.description) this.description = data.description;
    if (data?.required) this.required = data.required;
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

  setMinValue(min_value: number) {
    this.min_value = min_value;
    return this;
  }

  setMaxValue(max_value: number) {
    this.max_value = max_value;
    return this;
  }
}
