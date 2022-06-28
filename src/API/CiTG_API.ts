import {SynteticAPI} from "../SynteticData/SynteticAPI";

import {MemberInfo, MemberWorksInfo, ProjectInfo, Projects} from "../SynteticData/Syntetic.data.type";

export class CiTG_API {
    public static async getProjectById(id:string): Promise<ProjectInfo> {
        if(id.includes('synt')) {
            return SynteticAPI.getProject();
        }

        return SynteticAPI.getProject();
    }
    public static async getAllProjects(): Promise<Projects> {
        return SynteticAPI.getAllProjects()
    }
    public static async getMemberById(id:string):Promise<MemberInfo> {
        return SynteticAPI.getMemberInfo()
    }
    public static async getMemberAllWorks(member_id:string): Promise<MemberWorksInfo> {
        return SynteticAPI.getMemberWorksInfo()
    }
}