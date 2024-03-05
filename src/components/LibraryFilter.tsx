import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const LibraryFilter = () => {
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
  })

  const {
    register, handleSubmit
  } = useForm({ resolver: yupResolver(filterSchema) });

  /**
   * Handling form submit
   */
  const onCardsFilter = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex column container-filters">
      <form className="flex column">

        {/* Resource Cost & Purity */}
        <div className="flex">
          {/* Resource Cost */}
          <div className="flex column category-filter">
                    <p>Resource Cost</p>
                    <div className="flex box-filter">
                      <input type="checkbox" {...register('cardCost0')} className="checkbox-value0 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost1')} className="checkbox-value1 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost2')} className="checkbox-value2 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost3')} className="checkbox-value3 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost4')} className="checkbox-value4 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost5')} className="checkbox-value5 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost6')} className="checkbox-value6 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost7')} className="checkbox-value7 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost8')} className="checkbox-value8 checkbox-resource-cost"/>
                      <input type="checkbox" {...register('cardCost9')} className="checkbox-value9 checkbox-resource-cost"/>
                    </div>
                  </div>

                  {/* Purity */}
                  <div className="flex column category-filter">
                    <p>Purity</p>
                    <div className="flex box-filter">
                      
                    </div>
                  </div>
        </div>

        {/* Attack & Health */}
        <div className="flex">
          {/* Attack */}
          <div className="flex column category-filter">
            <p>Attack</p>
            <div className="flex box-filter">
              <input type="checkbox" {...register('cardAttack0')} className="checkbox-value0 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack1')} className="checkbox-value1 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack2')} className="checkbox-value2 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack3')} className="checkbox-value3 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack4')} className="checkbox-value4 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack5')} className="checkbox-value5 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack6')} className="checkbox-value6 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack7')} className="checkbox-value7 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack8')} className="checkbox-value8 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardAttack9')} className="checkbox-value9 checkbox-resource-cost"/>
            </div>
          </div>

          {/* Health */}
          <div className="flex column category-filter">
            <p>Health</p>
            <div className="flex box-filter">
              <input type="checkbox" {...register('cardHealth1')} className="checkbox-value1 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth2')} className="checkbox-value2 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth3')} className="checkbox-value3 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth4')} className="checkbox-value4 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth5')} className="checkbox-value5 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth6')} className="checkbox-value6 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth7')} className="checkbox-value7 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth8')} className="checkbox-value8 checkbox-resource-cost"/>
              <input type="checkbox" {...register('cardHealth9')} className="checkbox-value9 checkbox-resource-cost"/>
            </div>
          </div>
        </div>

        {/* SuperType & Morale Cost */}
        <div className="flex">
          {/* Morale Cost */}
          <div className="flex column category-filter">
            <p>Morale Cost</p>
            <div className="flex box-filter">
              <input type="checkbox" {...register('moraleCost0')} className="checkbox-value0 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost1')} className="checkbox-value1 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost2')} className="checkbox-value2 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost3')} className="checkbox-value3 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost4')} className="checkbox-value4 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost5')} className="checkbox-value5 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost6')} className="checkbox-value6 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost7')} className="checkbox-value7 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost8')} className="checkbox-value8 checkbox-resource-cost"/>
              <input type="checkbox" {...register('moraleCost9')} className="checkbox-value9 checkbox-resource-cost"/>
            </div>
          </div>

          {/* SuperType */}
          <div className="flex column category-filter">
            <p>SuperType</p>
            <div className="flex box-filter">
              
            </div>
          </div>
        </div>
      </form>

      <button className="button-main" onClick={handleSubmit(onCardsFilter)}>Apply Filter</button>
    </div>
  );
};
