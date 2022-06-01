export interface INavInterface {
  home: string;
  middle: string;
  end: string;
  isPopUp: boolean;
  isPopUpOpen: boolean;
  openPopUp: () => void;
  closePopUp: () => void;
}
