import {
  EmbedAuthor,
  EmbedField,
  EmbedFooter,
  EmbedImage,
  EmbedVideo,
} from "eris";
import EmbedColors, { ColorType } from "./EmbedColors";

export default class EmbedBuilder {
  url?: string;
  title?: string;
  description?: string;
  color?: number;
  fields?: EmbedField[];
  footer?: EmbedFooter;
  image?: EmbedImage;
  video?: EmbedVideo;
  thumbnail?: EmbedImage;
  author?: EmbedAuthor;
  timestamp?: Date;

  constructor(data?: EmbedBuilder) {
    this.url = data?.url;
    this.title = data?.title;
    this.description = data?.description;
    this.color = data?.color || 0;
    this.fields = data?.fields;
    this.footer = data?.footer;
    this.image = data?.image;
    this.video = data?.video;
    this.thumbnail = data?.thumbnail;
    this.author = data?.author;
    this.timestamp = data?.timestamp;
  }

  setURL(url: string) {
    this.url = url;
    return this;
  }

  setColor(color: number | ColorType | string) {
    if (typeof color === "string") {
      if (color === "Random")
        this.color = Math.floor(Math.random() * (0xffffff + 1));
      //@ts-ignore
      else if (EmbedColors[color]) this.color = EmbedColors[color];
      else this.color = parseInt(color.replace("#", ""), 16);
    } else {
      this.color = color;
    }
    return this;
  }

  setTitle(title: string) {
    this.title = title;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setThumbnail(url: string) {
    this.thumbnail = { url };
    return this;
  }

  setVideo(url: string) {
    this.video = { url };
    return this;
  }

  setImage(url: string) {
    this.image = { url };
    return this;
  }

  setFooter(text: string, icon_url?: string) {
    this.footer = { text, icon_url };
    return this;
  }

  setAuthor(name: string, icon_url?: string, url?: string) {
    this.author = { name, icon_url, url };
    return this;
  }

  addField(name: string, value: string, inline?: boolean) {
    if (!this.fields) this.fields = [];

    this.fields.push({ name, value, inline });

    return this;
  }

  addFields(...fields: EmbedField[]) {
    if (!this.fields) this.fields = [];

    this.fields.push(...fields);

    return this;
  }

  setTimestamp(timestamp = new Date()) {
    this.timestamp = timestamp;
    return this;
  }
}
