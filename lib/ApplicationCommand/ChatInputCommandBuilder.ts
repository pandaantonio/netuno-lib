import Localizations from "./interfaces/Localizations";
import BooleanOptionBuilder from "./options/BooleanOptionBuilder";
import ChannelOptionBuilder from "./options/ChannelOptionBuilder";
import IntegerOptionBuilder from "./options/IntegerOptionBuilder";
import MentionableOptionBuilder from "./options/MentionableOptionBuilder";
import RoleOptionBuilder from "./options/RoleOptionBuilder";
import StringOptionBuilder from "./options/StringOptionBuilder";
import SubCommandOptionBuilder from "./options/SubCommandOptionBuilder";
import SubCommandGroupOptionBuilder from "./options/SubCommandGroupOptionBuilder";
import UserOptionBuilder from "./options/UserOptionBuilder";
import NumberOptionBuilder from "./options/NumberOptionBuilder";
import AttachmentOptionBuilder from "./options/AttachmenteOptionBuilder";

type Options =
  | SubCommandOptionBuilder
  | SubCommandGroupOptionBuilder
  | IntegerOptionBuilder
  | StringOptionBuilder
  | BooleanOptionBuilder
  | UserOptionBuilder
  | ChannelOptionBuilder
  | RoleOptionBuilder
  | MentionableOptionBuilder
  | NumberOptionBuilder
  | AttachmentOptionBuilder;

export default class ChatInputCommandBuilder {
  type: 1 = 1;
  name: string;
  nsfw: boolean;
  description: string;
  dm_permission: boolean;
  options: Options[] = [];
  default_permission: boolean;
  name_localizations: Localizations;
  default_member_permissions: string;
  description_localizations: Localizations;

  constructor(data?: ChatInputCommandBuilder) {
    if (data?.type) this.type = data.type;
    if (data?.name) this.name = data.name;
    if (data?.nsfw) this.nsfw = data.nsfw;
    if (data?.options) this.options = data.options;
    if (data?.description) this.description = data.description;
    if (data?.dm_permission) this.dm_permission = data.dm_permission;
    if (data?.name_localizations)
      this.name_localizations = data.name_localizations;
    if (data?.default_permission)
      this.default_permission = data.default_permission;
    if (data?.description_localizations)
      this.description_localizations = data.description_localizations;
    if (data?.default_member_permissions)
      this.default_member_permissions = data.default_member_permissions;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setDefaultMemberPermissions(permissions: string) {
    this.default_member_permissions = permissions;
    return this;
  }

  isDmPermission(permission: boolean) {
    this.dm_permission = permission;
    return this;
  }

  isDefaultPermission(permission: boolean) {
    this.default_permission = permission;
    return this;
  }

  isNsfw(nsfw: boolean) {
    this.nsfw = nsfw;
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
    if (!this.options && !this.options[0]) this.options = [];
    this.options.push(input(new SubCommandOptionBuilder()));
    return this;
  }

  addSubCommandGroup(
    input: (
      builder: SubCommandGroupOptionBuilder
    ) => SubCommandGroupOptionBuilder
  ) {
    const result = input(new SubCommandGroupOptionBuilder());
    this.options.push(result);
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
