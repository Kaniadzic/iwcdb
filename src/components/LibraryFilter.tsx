import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { LibraryFilterProps } from "../interfaces/LibraryFilterProps";

export const LibraryFilter = (props: LibraryFilterProps) => {
  const [displayFilter, setDisplayFilter] = useState<boolean>(false);

  const [flamePurity, setFlamePurity] = useState<number>(-1);
  const [verorePurity, setVerorePurity] = useState<number>(-1);
  const [dodPurity, setDodPurity] = useState<number>(-1);
  const [warpathPurity, setWarpathPurity] = useState<number>(-1);
  const [genesisPurity, setGenesisPurity] = useState<number>(-1);
  const [sleepersPurity, setSleepersPurity] = useState<number>(-1);
  const [exilesPurity, setExilesPurity] = useState<number>(-1);
  const [solacePurity, setSolacePurity] = useState<number>(-1);

  const purityStates = [
    flamePurity,
    verorePurity,
    dodPurity,
    warpathPurity,
    genesisPurity,
    sleepersPurity,
    exilesPurity,
    solacePurity,
  ];

  const purityStateFunctions = [
    setFlamePurity,
    setVerorePurity,
    setDodPurity,
    setWarpathPurity,
    setGenesisPurity,
    setSleepersPurity,
    setExilesPurity,
    setSolacePurity,
  ];

  /**
   * Filter form validation schema
   */
  const filterSchema = yup.object().shape({
    cardCost0: yup.boolean(),
    cardCost1: yup.boolean(),
    cardCost2: yup.boolean(),
    cardCost3: yup.boolean(),
    cardCost4: yup.boolean(),
    cardCost5: yup.boolean(),
    cardCost6: yup.boolean(),
    cardCost7: yup.boolean(),
    cardCost8: yup.boolean(),
    cardCost9: yup.boolean(),
    cardAttack0: yup.boolean(),
    cardAttack1: yup.boolean(),
    cardAttack2: yup.boolean(),
    cardAttack3: yup.boolean(),
    cardAttack4: yup.boolean(),
    cardAttack5: yup.boolean(),
    cardAttack6: yup.boolean(),
    cardAttack7: yup.boolean(),
    cardAttack8: yup.boolean(),
    cardAttack9: yup.boolean(),
    cardHealth1: yup.boolean(),
    cardHealth2: yup.boolean(),
    cardHealth3: yup.boolean(),
    cardHealth4: yup.boolean(),
    cardHealth5: yup.boolean(),
    cardHealth6: yup.boolean(),
    cardHealth7: yup.boolean(),
    cardHealth8: yup.boolean(),
    cardHealth9: yup.boolean(),
    moraleCost0: yup.boolean(),
    moraleCost1: yup.boolean(),
    moraleCost2: yup.boolean(),
    moraleCost3: yup.boolean(),
    moraleCost4: yup.boolean(),
    moraleCost5: yup.boolean(),
    moraleCost6: yup.boolean(),
    moraleCost7: yup.boolean(),
    moraleCost8: yup.boolean(),
    moraleCost9: yup.boolean(),
    rarityCommon: yup.boolean(),
    rarityUncommon: yup.boolean(),
    rarityRare: yup.boolean(),
    rarityEpic: yup.boolean(),
    rarityLegendary: yup.boolean(),
    typeCharacter: yup.boolean(),
    typeAbility: yup.boolean(),
    typeLocation: yup.boolean(),
    typeArtifact: yup.boolean(),
    typeMission: yup.boolean(),
    setCore2013: yup.boolean(),
    setRise: yup.boolean(),
    setInfestation: yup.boolean(),
    setAscension: yup.boolean(),
    setOrder: yup.boolean(),
    setOppression: yup.boolean(),
    setRebellion: yup.boolean(),
    setIntrigue: yup.boolean(),
    superType: yup.string().required().oneOf(["All", "Unique", "Unlimited"]),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(filterSchema),
  });

  /**
   * Handling change of purity value in filter
   * @param faction number of faction to change purity
   */
  const handlePurityChange = (faction: number) => {
    if (purityStates[faction] == -1) {
      purityStateFunctions[faction](0);
    } else if (purityStates[faction] >= 0 && purityStates[faction] < 3) {
      purityStateFunctions[faction](purityStates[faction] + 1);
    } else {
      purityStateFunctions[faction](-1);
    }
  };

  /**
   * Reseting form controls & purity selection
   */
  const resetForm = () => {
    reset();

    purityStateFunctions.forEach((purity) => {
      purity(-1);
    });

    props.clearFunction();
  };

  /**
   * Handling form submit
   */
  const onCardsFilter = (data: any) => {
    console.log(data);
    console.log(purityStates);
    props.filterFunction();
  };

  return (
    <>
      <div className="flex wrapper-buttons-display-filters">
        <button
          className="button-main button-display-filters"
          onClick={() => {
            setDisplayFilter(!displayFilter);
          }}
        >
          {displayFilter ? "Hide filters" : "Show filters"}
        </button>
      </div>

      <div
        className={
          displayFilter ? "flex column container-filters" : "display-none"
        }
      >
        <form className="flex column">
          {/* Resource Cost & Purity */}
          <div className="flex">
            {/* Resource Cost */}
            <div className="flex column category-filter">
              <p>Resource Cost</p>
              <div className="flex row-filter">
                <input
                  type="checkbox"
                  {...register("cardCost0")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost1")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost2")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost3")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost4")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost5")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost6")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost7")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost8")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardCost9")}
                  className="checkbox-value9 checkbox-resource-cost"
                />
              </div>
            </div>

            {/* Purity */}
            <div className="flex column category-filter">
              <p>Purity</p>
              <div className="flex row-filter">
                <div
                  className={
                    flamePurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(0);
                  }}
                >
                  <img src="/icons/Flame.png" className="purity-filter-icon" />
                  <p>{flamePurity > 0 ? flamePurity : ""}</p>
                  <input type="hidden" />
                </div>

                <div
                  className={
                    verorePurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(1);
                  }}
                >
                  <img src="/icons/Verore.png" className="purity-filter-icon" />
                  <p>{verorePurity > 0 ? verorePurity : ""}</p>
                  <input type="hidden" />
                </div>

                <div
                  className={
                    dodPurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(2);
                  }}
                >
                  <img src="/icons/DoD.png" className="purity-filter-icon" />
                  <p>{dodPurity > 0 ? dodPurity : ""}</p>
                  <input type="hidden" />
                </div>

                <div
                  className={
                    warpathPurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(3);
                  }}
                >
                  <img
                    src="/icons/Warpath.png"
                    className="purity-filter-icon"
                  />
                  <p>{warpathPurity > 0 ? warpathPurity : ""}</p>
                  <input type="hidden" />
                </div>

                <div
                  className={
                    genesisPurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(4);
                  }}
                >
                  <img
                    src="/icons/Genesis.png"
                    className="purity-filter-icon"
                  />
                  <p>{genesisPurity > 0 ? genesisPurity : ""}</p>
                  <input type="hidden" />
                </div>

                <div
                  className={
                    sleepersPurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(5);
                  }}
                >
                  <img
                    src="/icons/Sleepers.png"
                    className="purity-filter-icon"
                  />
                  <p>{sleepersPurity > 0 ? sleepersPurity : ""}</p>
                  <input type="hidden" />
                </div>

                <div
                  className={
                    exilesPurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(6);
                  }}
                >
                  <img src="/icons/Exiles.png" className="purity-filter-icon" />
                  <p>{exilesPurity > 0 ? exilesPurity : ""}</p>
                  <input type="hidden" />
                </div>

                <div
                  className={
                    solacePurity > -1
                      ? "flex container-purity purity-selected"
                      : "flex container-purity"
                  }
                  onClick={() => {
                    handlePurityChange(7);
                  }}
                >
                  <img src="/icons/Solace.png" className="purity-filter-icon" />
                  <p>{solacePurity > 0 ? solacePurity : ""}</p>
                  <input type="hidden" />
                </div>
              </div>
            </div>
          </div>

          {/* Attack & Health */}
          <div className="flex">
            {/* Attack */}
            <div className="flex column category-filter">
              <p>Attack</p>
              <div className="flex row-filter">
                <input
                  type="checkbox"
                  {...register("cardAttack0")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack1")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack2")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack3")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack4")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack5")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack6")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack7")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack8")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardAttack9")}
                  className="checkbox-value9 checkbox-resource-cost"
                />
              </div>
            </div>

            {/* Health */}
            <div className="flex column category-filter">
              <p>Health</p>
              <div className="flex row-filter">
                <input
                  type="checkbox"
                  {...register("cardHealth1")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth2")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth3")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth4")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth5")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth6")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth7")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth8")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("cardHealth9")}
                  className="checkbox-value9 checkbox-resource-cost"
                />
              </div>
            </div>
          </div>

          {/* SuperType & Morale Cost */}
          <div className="flex">
            {/* Morale Cost */}
            <div className="flex column category-filter">
              <p>Morale Cost</p>
              <div className="flex row-filter">
                <input
                  type="checkbox"
                  {...register("moraleCost0")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost1")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost2")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost3")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost4")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost5")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost6")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost7")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost8")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  {...register("moraleCost9")}
                  className="checkbox-value9 checkbox-resource-cost"
                />
              </div>
            </div>

            {/* SuperType */}
            <div className="flex column category-filter">
              <p>SuperType</p>
              <div className="flex select-row-filter">
                <select {...register("superType")} className="select-input">
                  <option value="All">All</option>
                  <option value="Unique">Unique</option>
                  <option value="Unlimited">Unlimited</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rarity, Type, Set */}
          <div className="flex align-start">
            {/* Rarity */}
            <div className="flex column category-filter">
              <p>Rarity</p>
              <div className="flex column column-filter">
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityCommon"
                    {...register("rarityCommon")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityCommon">Common</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityUncommon"
                    {...register("rarityUncommon")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityUncommon">Uncommon</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityRare"
                    {...register("rarityRare")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityRare">Rare</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityEpic"
                    {...register("rarityEpic")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityEpic">Epic</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityLegendary"
                    {...register("rarityLegendary")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityLegendary">Legendary</label>
                </div>
              </div>
            </div>
            {/* Type */}
            <div className="flex column category-filter">
              <p>Type</p>
              <div className="flex column column-filter">
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeCharacter"
                    {...register("typeCharacter")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeCharacter">Character</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeAbility"
                    {...register("typeAbility")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeAbility">Ability</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeLocation"
                    {...register("typeLocation")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeLocation">Location</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeArtifact"
                    {...register("typeArtifact")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeArtifact">Artifact</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeMission"
                    {...register("typeMission")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeMission">Mission</label>
                </div>
              </div>
            </div>
            {/* Set */}
            <div className="flex column category-filter">
              <p>Set</p>
              <div className="flex column column-filter">
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setCore2013"
                    {...register("setCore2013")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setCore2013">Core 2013</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setRise"
                    {...register("setRise")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setRise">Rise</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setInfestation"
                    {...register("setInfestation")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setInfestation">Infestation</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setAscension"
                    {...register("setAscension")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setAscension">Ascension</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setOrder"
                    {...register("setOrder")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setOrder">Order</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setOppression"
                    {...register("setOppression")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setOppression">Oppression</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setRebellion"
                    {...register("setRebellion")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setRebellion">Rebellion</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setIntrigue"
                    {...register("setIntrigue")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setIntrigue">Intrigue</label>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="flex">
          <button
            className="button-main"
            onClick={() => {
              resetForm();
            }}
          >
            Clear
          </button>
          <button className="button-main" onClick={handleSubmit(onCardsFilter)}>
            Apply Filter
          </button>
        </div>
      </div>
    </>
  );
};
