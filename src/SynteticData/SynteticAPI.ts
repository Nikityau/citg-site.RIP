import { nanoid } from "nanoid";

import plug from "../assets/images/plug.png";

import {MiniInfo, ProjectInfo} from "./Syntetic.data.type";

import { awards } from './Syntetic.data/awards'
import { games } from './Syntetic.data/games'
import { project } from './Syntetic.data/project'

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
}
