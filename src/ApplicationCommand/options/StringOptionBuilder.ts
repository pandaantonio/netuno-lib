import Localizations from "../interfaces/Localizations";
import Choices from "../interfaces/Choices";

export default class StringOptionBuilder {
  name: string;
  type: 3 = 3;
  description: string;
  required: boolean;
  autocomplete: boolean;
  min_length: number;
  max_length: number;
  choices: Choices[] = [];
  name_localizations: Localizations;
  description_localizations: Localizations;

  constructor(data?: StringOptionBuilder) {
    if (data?.type) this.type = data.type;
    if (data?.name) this.name = data.name;
    if (data?.choices) this.choices = data.choices;
    if (data?.min_length) this.min_length = data.min_length;
    if (data?.max_length) this.max_length = data.max_length;
    if (data?.description) this.description = data.description;
    if (data?.required) this.required = data.required;
    if (data?.autocomplete) this.autocomplete = data.autocomplete;
    if (data?.name_localizations)
      this.name_localizations = data.name_localizations;
    if (data?.description_localizations)
      this.description_localizations = data.description_localizations;
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

  isRequired(required?: boolean) {
    this.required = required ?? true;
    return this;
  }

  isAutocomplete(autocomplete?: boolean) {
    this.autocomplete = autocomplete ?? true;
    return this;
  }

  setMinLength(min_length: number) {
    this.min_length = min_length;
    return this;
  }

  setMaxLength(max_length: number) {
    this.max_length = max_length;
    return this;
  }

  addChoices(...choices: Choices[]){
    this.choices.push(...choices);
    return this;
  }
}
