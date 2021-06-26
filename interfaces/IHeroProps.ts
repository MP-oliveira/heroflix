import IAppearanceProps from "./IAppearanceProps";
import IBiographyProps from "./IBiographyProps";
import IConnectionsProps from "./IConnectionsProps";
import IImageProps from "./IImageProps";
import IPowerStatsProps from "./IPowerStatsProps";
import IWorkProps from "./IWorkProps";

export default interface IHeroProps {
  id: number;
  name: string;
  slug: string;
  powerstats: IPowerStatsProps;
  appearance: IAppearanceProps;
  biography: IBiographyProps;
  work: IWorkProps;
  connections: IConnectionsProps;
  images: IImageProps;
}
