import {MemberInfo, MiniInfo, ProjectInfo} from "./Syntetic.data.type";

import { awards } from './Syntetic.data/awards'
import { games } from './Syntetic.data/games'
import { project } from './Syntetic.data/project'
import {member} from "./Syntetic.data/member";

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
  static getMemberInfo(): MemberInfo {
    return member
  }
}
