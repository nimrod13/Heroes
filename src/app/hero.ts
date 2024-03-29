export class Hero {
  id: number;
  name: string;
  series: { available?: number, items?: [{ resourceURI: string, name: string }] };
  stories: { available?: number, items?: [{ resourceURI: string, name: string }] };
  thumbnail: { path?: string, extension?: string };
  resourceURI?: string;
  nickname?: string;
  description?: string;
  comics?: {};
  events?: {};
  modified?: string;
  urls?: [];
}
