import Localizations from "../interfaces/Localizations";
import AttachmentOptionBuilder from "./AttachmenteOptionBuilder";
import BooleanOptionBuilder from "./BooleanOptionBuilder";
import ChannelOptionBuilder from "./ChannelOptionBuilder";
import IntegerOptionBuilder from "./IntegerOptionBuilder";
import MentionableOptionBuilder from "./MentionableOptionBuilder";
import NumberOptionBuilder from "./NumberOptionBuilder";
import RoleOptionBuilder from "./RoleOptionBuilder";
import StringOptionBuilder from "./StringOptionBuilder";
import UserOptionBuilder from "./UserOptionBuilder";

type Options =
  | IntegerOptionBuilder
  | StringOptionBuilder
  | BooleanOptionBuilder
  | UserOptionBuilder
  | ChannelOptionBuilder
  | RoleOptionBuilder
  | MentionableOptionBuilder
  | NumberOptionBuilder
  | AttachmentOptionBuilder;

export default class SubCommandOptionBuilder {
  type: 1 = 1;
  name: string;
  description: string;
  options: Options[] = [];
  name_localizations: Localizations;
  description_localizations: Localizations;

  constructor(data?: SubCommandOptionBuilder) {
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

  addInteger(input: (builder: IntegerOptionBuilder) => IntegerOptionBuilder) {
    const result = input(new IntegerOptionBuilder());
    this.options.push(result);
    return this;
  }

  addString(input: (builder: StringOptionBuilder) => StringOptionBuilder) {
    const result = input(new StringOptionBuilder());
    this.options.push(result);
    return this;
  }

  addBoolean(input: (builder: BooleanOptionBuilder) => BooleanOptionBuilder) {
    const result = input(new BooleanOptionBuilder());
    this.options.push(result);
    return this;
  }

  addUser(input: (builder: UserOptionBuilder) => UserOptionBuilder) {
    const result = input(new UserOptionBuilder());
    this.options.push(result);
    return this;
  }

  addChannel(input: (builder: ChannelOptionBuilder) => ChannelOptionBuilder) {
    const result = input(new ChannelOptionBuilder());
    this.options.push(result);
    return this;
  }

  addRole(input: (builder: RoleOptionBuilder) => RoleOptionBuilder) {
    const result = input(new RoleOptionBuilder());
    this.options.push();
    return this;
  }

  addMentionable(
    input: (builder: MentionableOptionBuilder) => MentionableOptionBuilder
  ) {
    const result = input(new MentionableOptionBuilder());
    this.options.push(result);
    return this;
  }

  addNumber(input: (builder: NumberOptionBuilder) => NumberOptionBuilder) {
    const result = input(new NumberOptionBuilder());
    this.options.push(result);
    return this;
  }

  addAttachment(
    input: (builder: AttachmentOptionBuilder) => AttachmentOptionBuilder
  ) {
    const result = input(new AttachmentOptionBuilder());
    this.options.push(result);
    return this;
  }
}
