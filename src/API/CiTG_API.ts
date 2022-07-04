import {SynteticAPI} from "../SynteticData/SynteticAPI";

import {
    MemberInfo,
    MemberMiniInfo,
    MemberWorksInfo,
    MiniInfo,
    ProjectInfo,
    Projects, ProjectsMiniInfo
} from "../SynteticData/Syntetic.data.type";

export class CiTG_API {
    public static async getProjectById(id:string): Promise<ProjectInfo> {
        return SynteticAPI.getProject()
    }

    public static async getAllFilteredProjects(): Promise<Projects> {
        return SynteticAPI.getAllFilteredProjects()
    }

    public static async getTeam(): Promise<MemberMiniInfo[]> {
        return SynteticAPI.getTeam();
    }
    public static async getMemberById(id:string):Promise<MemberInfo> {
        return SynteticAPI.getMemberInfo()
    }
    public static async getMemberAllWorks(member_id:string): Promise<MemberWorksInfo> {
        return SynteticAPI.getMemberWorksInfo()
    }


    public static async getAllAwards(): Promise<MiniInfo[]> {
        return await SynteticAPI.getAwards()
    }
    public static async getAllProjects(): Promise<ProjectsMiniInfo[]> {
        return await SynteticAPI.getAllProjects()
    }
}