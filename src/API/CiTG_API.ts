import {SynteticAPI} from "../SynteticData/SynteticAPI";

import {ProjectInfo} from "../SynteticData/Syntetic.data.type";

export class CiTG_API {
    public static async getProjectById(id:string): Promise<ProjectInfo> {
        if(id.includes('synt')) {
            return SynteticAPI.getProject();
        }

        return SynteticAPI.getProject();
    }
}