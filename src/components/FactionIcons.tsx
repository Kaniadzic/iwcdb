import { FactionIconsProps } from "../interfaces/FactionIconsProps";

export const FactionIcons = (props: FactionIconsProps) => {
  return (
    <div className="flex">
      {props.factionsArray?.map((faction, index) => {
        if (faction == 1) {
          return <Icon factionNumber={index} />;
        } else if (faction == 2) {
          return (
            <>
              <Icon factionNumber={index} />
              <Icon factionNumber={index} />
            </>
          );
        } else if (faction == 3) {
          return (
            <>
              <Icon factionNumber={index} />
              <Icon factionNumber={index} />
              <Icon factionNumber={index} />
            </>
          );
        }
      })}
    </div>
  );
};

interface IconProps {
  factionNumber: number;
}

export const Icon = (props: IconProps) => {
  const getIcon = () => {
    switch (props.factionNumber) {
      case 0:
        return <img src="/icons/Flame.png" className="card-purity-icon" />;
        break;
      case 1:
        return <img src="/icons/Verore.png" className="card-purity-icon" />;
        break;
      case 2:
        return <img src="/icons/Warpath.png" className="card-purity-icon" />;
        break;
      case 3:
        return <img src="/icons/Genesis.png" className="card-purity-icon" />;
        break;
      case 4:
        return <img src="/icons/DoD.png" className="card-purity-icon" />;
        break;
      case 5:
        return <img src="/icons/Sleepers.png" className="card-purity-icon" />;
        break;
      case 6:
        return <img src="/icons/Exiles.png" className="card-purity-icon" />;
        break;
      case 7:
        return <img src="/icons/Solace.png" className="card-purity-icon" />;
        break;
    }
  };

  return <div>
    {
      getIcon()
    }
  </div>;
};
