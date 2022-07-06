import {
  MemberInfo,
  MemberMiniInfo,
  MemberWorksInfo,
  MiniInfo,
  ProjectInfo,
  Projects,
  ProjectsMiniInfo
} from "./Syntetic.data.type";
import {nanoid} from 'nanoid'

import {awards} from './Syntetic.data/awards'
import {member} from "./Syntetic.data/member";
import {team} from "./Syntetic.data/team";
import { projects } from "./Syntetic.data/projects";
import {project} from "./Syntetic.data/project";
import { projects_filtered } from "./Syntetic.data/projects_filtered";

import {GetAllWorks} from './utils/getAllWorks'
import {getDataWithDelay} from "./utils/getDataWithDelay";

export class SynteticAPI {
  static getAwards(): Promise<MiniInfo[]> {
    return getDataWithDelay(awards)
  }


  static getAllProjects(): Promise<ProjectsMiniInfo[]> {
    return getDataWithDelay(projects);
  }

  static getProject(): Promise<ProjectInfo> {
    return getDataWithDelay(project);
  }
  static getAllFilteredProjects(): Promise<Projects> {
    return getDataWithDelay(projects_filtered);
  }
  static getTeam(): Promise<MemberMiniInfo[]> {
    return getDataWithDelay(team)
  }
  static getMemberInfo(): Promise<MemberInfo> {
    return getDataWithDelay(member)
  }
  static getMemberWorksInfo(): MemberWorksInfo {
    return {
      man_id: member.id,
      work_id: nanoid(),
      work_name: 'art',
      all_works_by_name: GetAllWorks(member)
    };
  }
}
