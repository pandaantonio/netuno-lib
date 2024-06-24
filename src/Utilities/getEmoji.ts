import { Base } from "eris";

interface Emoji {
  createdAt: number;
  animated: boolean;
  name: string;
  id: string;
  url: string;
  mention: string;
}

export default function getEmoji(text: string): Emoji | undefined {
  if (text.includes("%")) text = decodeURIComponent(text);
  if (!text.includes(":")) return undefined;

  const m = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);

  if (!m) return undefined;

  return {
    createdAt: Base.getCreatedAt(`${m[3]}`),
    animated: Boolean(m[1]),
    name: m[2],
    id: m[3],
    mention: `<${Boolean(m[1]) ? "a" : ""}:${m[2]}:${m[3]}>`,
    url: `https://cdn.discordapp.com/emojis/${m[3]}.${
      Boolean(m[1]) ? "gif" : "png"
    }?quality=lossless`,
  };
}
