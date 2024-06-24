import Localizations from "../interfaces/Localizations";
import { Constants } from "eris";

type ChannelTypes = "GUILD_TEXT" | "DM" | "GUILD_VOICE" | "GROUP_DM" | "GUILD_CATEGORY" | "GUILD_ANNOUNCEMENT" | "ANNOUNCEMENT_THREAD" | "PUBLIC_THREAD" | "PRIVATE_THREAD" | "GUILD_STAGE_VOICE" | "GUILD_DIRECTORY" | "GUILD_FORUM" | "GUILD_MEDIA";


export default class ChannelOptionBuilder {
  type: 8 = 8;
  name: string;
  required: boolean;
  description: string;
  channelTypes: number[] = [];
  name_localizations: Localizations;
  description_localizations: Localizations;

  constructor(data?: ChannelOptionBuilder) {
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

  addChannelTypes(...channel_types: (keyof ChannelTypes)[]){
    //@ts-ignore
    this.channelTypes.push(...channel_types.map((c) => Constants.ChannelTypes[c]));
    return this;
  }
}
