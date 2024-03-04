import { FactionIconsProps } from "../interfaces/FactionIconsProps";

export const FactionIcons = (props: FactionIconsProps) => {
  return (
    <div className="flex">
      {props.factionsArray?.map((faction) => {
        switch (faction) {
          case "FlameDawn":
            return <img src="/icons/Flame.png" className="card-purity-icon" />;
            break;
          case "CultofVerore":
            return <img src="/icons/Verore.png" className="card-purity-icon" />;
            break;
          case "Warpath":
            return <img src="/icons/Warpath.png" className="card-purity-icon" />;
            break;
          case "GenesisIndustries":
            return <img src="/icons/Genesis.png" className="card-purity-icon" />;
            break;
          case "SleepersofAvarrach":
            return <img src="/icons/Sleepers.png" className="card-purity-icon" />;
            break;
          case "DescendantsoftheDragon":
            return <img src="/icons/DoD.png" className="card-purity-icon" />;
            break;
          case "Exiles":
            return <img src="/icons/Exiles.png" className="card-purity-icon" />;
            break;
          case "OverseersofSolace":
            return <img src="/icons/Solace.png" className="card-purity-icon" />;
            break;
        }
      })}
    </div>
  );
};
