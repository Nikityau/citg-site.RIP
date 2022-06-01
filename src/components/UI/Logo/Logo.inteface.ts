export enum DeviceType {
  MOBILE = "mobile",
  DESKTOP = "desktop",
}

export interface ILogo {
  link: string;
  text: string;
  version: DeviceType;
}
