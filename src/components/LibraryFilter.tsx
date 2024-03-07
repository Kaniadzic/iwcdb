import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { LibraryFilterProps } from "../interfaces/LibraryFilterProps";
import { CardsFilter } from "../interfaces/CardsFilter";

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
    cardCost: yup.array(),
    cardAttack: yup.array(),
    cardHealth: yup.array(),
    moraleCost: yup.array(),
    rarity: yup.array(),
    type: yup.array(),
    set: yup.array(),
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
    const filters: CardsFilter = {...data, purity: purityStates}

    props.filterFunction(filters);
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
                  value={0}
                  {...register("cardCost")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={1}
                  {...register("cardCost")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("cardCost")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("cardCost")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("cardCost")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("cardCost")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("cardCost")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("cardCost")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("cardCost")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("cardCost")}
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
                  value={0}
                  {...register("cardAttack")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={1}
                  {...register("cardAttack")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("cardAttack")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("cardAttack")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("cardAttack")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("cardAttack")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("cardAttack")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("cardAttack")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("cardAttack")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("cardAttack")}
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
                  value={1}
                  {...register("cardHealth")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("cardHealth")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("cardHealth")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("cardHealth")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("cardHealth")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("cardHealth")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("cardHealth")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("cardHealth")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("cardHealth")}
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
                  value={0}
                  {...register("moraleCost")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={1}
                  {...register("moraleCost")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("moraleCost")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("moraleCost")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("moraleCost")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("moraleCost")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("moraleCost")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("moraleCost")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("moraleCost")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("moraleCost")}
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
                    value={"Common"}
                    {...register("rarity")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityCommon">Common</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityUncommon"
                    value={"Uncommon"}
                    {...register("rarity")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityUncommon">Uncommon</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityRare"
                    value={"Rare"}
                    {...register("rarity")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityRare">Rare</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityEpic"
                    value={"Epic"}
                    {...register("rarity")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="rarityEpic">Epic</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="rarityLegendary"
                    value={"Legendary"}
                    {...register("rarity")}
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
                    value={"Character"}
                    {...register("type")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeCharacter">Character</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeAbility"
                    value={"Ability"}
                    {...register("type")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeAbility">Ability</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeLocation"
                    value={"Location"}
                    {...register("type")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeLocation">Location</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeArtifact"
                    value={"Artifact"}
                    {...register("type")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeArtifact">Artifact</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeMission"
                    value={"Mission"}
                    {...register("type")}
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
                    value={"Core2013"}
                    {...register("set")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setCore2013">Core 2013</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setRise"
                    value={"Rise"}
                    {...register("set")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setRise">Rise</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setInfestation"
                    value={"Infestation"}
                    {...register("set")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setInfestation">Infestation</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setAscension"
                    value={"Ascension"}
                    {...register("set")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setAscension">Ascension</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setOrder"
                    value={"Order"}
                    {...register("set")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setOrder">Order</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setOppression"
                    value={"Oppression"}
                    {...register("set")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setOppression">Oppression</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setRebellion"
                    value={"Rebellion"}
                    {...register("set")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setRebellion">Rebellion</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setIntrigue"
                    value={"Intrigue"}
                    {...register("set")}
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
