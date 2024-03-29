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
    logo: string,
    os: string,
    version: string
}

export type ProjectInfo = {
    id: string,
    logo: string,
    title: string,
    background_logo: string,
    description: string,
    img_arr: Img[],
    links: Link[],
    supported_devices: Device[]
}
export type Software = {
    id: string
    title: string
    imgSrc: string
}
export type MemberMiniInfo = {
    id: string,
    full_name: string,
    skills: string[],
    img: string
}
export type MemberInfo = {
    id: string,
    photo: Img
    full_name: string,
    skills: string[],
    software: Software[]
    social_links: Link[]
    achievement_n_awards: Img[]
    participation_in_projects: MiniInfo[]
    my_works: MiniInfo[],
    pdf_portfolio_link: string,
}
export type Work = {
    id: string,
    name: string,
    description: string,
    img: string,
    software_used: Software[],
    development_stages: Img[]
}
export type MemberWorksInfo = {
    man_id: string,
    work_id: string,
    work_name: string,
    all_works_by_name: Work[]
}
export type ProjectsMiniInfo = {
    id: string,
    title: string,
    description: string,
    main_img: string
}
export type Projects = {
    released_projects: ProjectsMiniInfo[],
    concourse_projects: ProjectsMiniInfo[],
    projects_in_developing: ProjectsMiniInfo[]
}

