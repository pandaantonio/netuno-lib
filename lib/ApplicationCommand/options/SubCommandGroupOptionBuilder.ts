import Localizations from "../interfaces/Localizations";
import SubCommandOptionBuilder from "./SubCommandOptionBuilder";

export default class SubCommandGroupOptionBuilder {
  type: 2 = 2;
  name: string;
  description: string;
  name_localizations: Localizations;
  options: SubCommandOptionBuilder[] = [];
  description_localizations: Localizations;

  constructor(data?: SubCommandGroupOptionBuilder) {
    if (data?.type) this.type = data.type;
    if (data?.name) this.name = data.name;
    if (data?.description) this.description = data.description;
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

  addSubCommand(
    input: (builder: SubCommandOptionBuilder) => SubCommandOptionBuilder
  ) {
    const result = input(new SubCommandOptionBuilder());
    this.options.push(result);
    return this;
  }
}
