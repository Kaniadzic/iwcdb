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

  const purityStates: any[] = [
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
    cardName: yup.string(),
    costValues: yup.mixed().nullable(),
    attackValues: yup.mixed().nullable(),
    healthValues: yup.mixed().nullable(),
    moraleValues: yup.mixed().nullable(),
    rarities: yup.mixed().nullable(),
    types: yup.mixed().nullable(),
    sets: yup.mixed().nullable(),
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
    const filters: CardsFilter = { ...data, purity: purityStates };

    if (!filters.attackValues) {
      filters.attackValues = [];
    }
    if (!filters.healthValues) {
      filters.healthValues = [];
    }
    if (!filters.moraleValues) {
      filters.moraleValues = [];
    }
    if (!filters.costValues) {
      filters.costValues = [];
    }
    if (!filters.rarities) {
      filters.rarities = [];
    }
    if (!filters.sets) {
      filters.sets = [];
    }
    if (!filters.types) {
      filters.types = [];
    }

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
                  {...register("costValues")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={1}
                  {...register("costValues")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("costValues")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("costValues")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("costValues")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("costValues")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("costValues")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("costValues")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("costValues")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("costValues")}
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
                  {...register("attackValues")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={1}
                  {...register("attackValues")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("attackValues")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("attackValues")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("attackValues")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("attackValues")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("attackValues")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("attackValues")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("attackValues")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("attackValues")}
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
                  {...register("healthValues")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("healthValues")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("healthValues")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("healthValues")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("healthValues")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("healthValues")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("healthValues")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("healthValues")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("healthValues")}
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
                  {...register("moraleValues")}
                  className="checkbox-value0 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={1}
                  {...register("moraleValues")}
                  className="checkbox-value1 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={2}
                  {...register("moraleValues")}
                  className="checkbox-value2 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={3}
                  {...register("moraleValues")}
                  className="checkbox-value3 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={4}
                  {...register("moraleValues")}
                  className="checkbox-value4 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={5}
                  {...register("moraleValues")}
                  className="checkbox-value5 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={6}
                  {...register("moraleValues")}
                  className="checkbox-value6 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={7}
                  {...register("moraleValues")}
                  className="checkbox-value7 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={8}
                  {...register("moraleValues")}
                  className="checkbox-value8 checkbox-resource-cost"
                />
                <input
                  type="checkbox"
                  value={9}
                  {...register("moraleValues")}
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

          {/* Rarities, Type, Set */}
          <div className="flex align-start">
            {/* rarities */}
            <div className="flex column category-filter">
              <p>rarities</p>
              <div className="flex column column-filter">
                <div className="flex">
                  <input
                    type="checkbox"
                    id="raritiesCommon"
                    value={"Common"}
                    {...register("rarities")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="raritiesCommon">Common</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="raritiesUncommon"
                    value={"Uncommon"}
                    {...register("rarities")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="raritiesUncommon">Uncommon</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="raritiesRare"
                    value={"Rare"}
                    {...register("rarities")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="raritiesRare">Rare</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="raritiesEpic"
                    value={"Epic"}
                    {...register("rarities")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="raritiesEpic">Epic</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="raritiesLegendary"
                    value={"Legendary"}
                    {...register("rarities")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="raritiesLegendary">Legendary</label>
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
                    {...register("types")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeCharacter">Character</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeAbility"
                    value={"Ability"}
                    {...register("types")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeAbility">Ability</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeLocation"
                    value={"Location"}
                    {...register("types")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeLocation">Location</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeArtifact"
                    value={"Artifact"}
                    {...register("types")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="typeArtifact">Artifact</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="typeMission"
                    value={"Mission"}
                    {...register("types")}
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
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setCore2013">Core 2013</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setRise"
                    value={"Rise"}
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setRise">Rise</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setInfestation"
                    value={"Infestation"}
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setInfestation">Infestation</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setAscension"
                    value={"Ascension"}
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setAscension">Ascension</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setOrder"
                    value={"Order"}
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setOrder">Order</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setOppression"
                    value={"Oppression"}
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setOppression">Oppression</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setRebellion"
                    value={"Rebellion"}
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setRebellion">Rebellion</label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    id="setIntrigue"
                    value={"Intrigue"}
                    {...register("sets")}
                    className="checkbox-resource-cost"
                  />
                  <label htmlFor="setIntrigue">Intrigue</label>
                </div>
              </div>
            </div>
          </div>

          {/* Search by card name */}
          <div className="flex column container-search">
            <p>Search card by name</p>
            <input
              type="text"
              className="input-text"
              {...register("cardName")}
            />
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
            Apply
          </button>
        </div>
      </div>
    </>
  );
};
