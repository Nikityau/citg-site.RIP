import {MemberInfo, MemberMiniInfo, MemberWorksInfo, MiniInfo, ProjectInfo, Projects} from "./Syntetic.data.type";
import {nanoid} from 'nanoid'

import {awards} from './Syntetic.data/awards'
import {games} from './Syntetic.data/games'
import {project} from './Syntetic.data/project'
import {member} from "./Syntetic.data/member";
import { projects } from './Syntetic.data/projects'
import {team} from "./Syntetic.data/team";

import {GetAllWorks} from './utils/getAllWorks'


export class SynteticAPI {
  static getAwards(): MiniInfo[] {
    return awards
  }
  static getGames(): MiniInfo[] {
    return games;
  }
  static getProject(): ProjectInfo {
    return project;
  }
  static getAllProjects(): Projects {
    return projects;
  }
  static getTeam(): MemberMiniInfo[] {
    return team
  }
  static getMemberInfo(): MemberInfo {
    return member
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
