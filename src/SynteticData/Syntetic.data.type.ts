export type MiniInfo = {
  id: string;
  imgSrc: string;
};

export type Img = {
  id: string
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

export type MemberInfo = {
  id: string,
  photo: Img
  full_name:string,
  skills: string[],
  software: Img[]
  social_links: Link[]
  achievement_n_awards: Img[]
  participation_in_projects: MiniInfo[]
  my_works: MiniInfo[],
  pdf_portfolio_link: string,
}
