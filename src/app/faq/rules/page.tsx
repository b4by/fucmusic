import RulesAccordion from "@/components/rules-accordion/rules-accordion";
import { Rules } from "@/components/rules/rules";

const RulesPage = () => {
  return (
    <div className="text-white">
      <div className="max-w-[650px]">
        <h2 className="upeprcase mb-4 text-2xl font-semibold">Условия:</h2>
        <p>
          За несоблюдение условий предусмотрены штрафы. Список штрафов
          представлен ниже в разделе «Штрафы/Меры за нарушение условий»
        </p>
      </div>
      <RulesAccordion />
      <Rules />
    </div>
  );
};

export default RulesPage;
