import { rules } from "@/constants/rules";

export const Rules = () => {
  return (
    <div className="mx-auto mt-16 text-black">
      <div className="w-full overflow-x-auto text-left">
        <h3 className="upeprcase mb-8 text-2xl font-semibold text-white">
          Штрафы/Меры за нарушение условий:
        </h3>
        <div className="overflow-x-scroll md:overflow-x-hidden">
          <table className="min-w-full rounded-lg bg-white shadow-md">
            <thead>
              <tr>
                <th className="bg-blue-100 px-4 py-3 text-left text-xs font-semibold uppercase md:text-sm">
                  Причина
                </th>
                <th className="bg-green-100 px-4 py-3 text-left text-xs font-semibold uppercase md:text-sm">
                  Пояснение
                </th>
                <th className="bg-yellow-100 px-4 py-3 text-left text-xs font-semibold uppercase md:text-sm">
                  Меры
                </th>
              </tr>
            </thead>
            <tbody>
              {rules.map((rule, index) => (
                <tr key={index} className="border-b">
                  <td className="bg-blue-50 px-4 py-3 text-xs md:text-sm">
                    {rule.reason}
                  </td>
                  <td className="bg-green-50 px-4 py-3 text-xs md:text-sm">
                    {rule.explanation}
                  </td>
                  <td className="bg-yellow-50 px-4 py-3 text-xs md:text-sm">
                    {rule.measures}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
