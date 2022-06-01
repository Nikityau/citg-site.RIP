import plug from "../assets/images/plug.png";
import { dataArr } from "./Syntetic.data.type";

import { nanoid } from "nanoid";

export interface IGame {
  gameImg: string;
  id: string;
}

export class SynteticAPI {
  static getAwards(): dataArr[] {
    return [
      {
        imgSrc: plug,
        id: nanoid(),
      },
      {
        imgSrc: plug,
        id: nanoid(),
      },
      {
        imgSrc: plug,
        id: nanoid(),
      },
      {
        imgSrc: plug,
        id: nanoid(),
      },
      {
        imgSrc: plug,
        id: nanoid(),
      },
      {
        imgSrc: plug,
        id: nanoid(),
      },
    ];
  }

  static getGames(): IGame[] {
    return [
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
      {
        gameImg: plug,
        id: nanoid(),
      },
    ];
  }
}
