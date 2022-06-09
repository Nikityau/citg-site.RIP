export type MiniInfo = {
  id: string;
  imgSrc: string;
};

export type Img = {
  imgSrc: string
}

export type Link = {
  img: string,
  link: string
}

export type Device = {
  logo:string,
  os:string,
  version: string
}

export type ProjectInfo = {
  id: string,
  logo:string,
  title:string,
  background_logo:string,
  description: string,
  img_arr: Img[],
  links: Link[],
  supported_devices: Device[]
}
