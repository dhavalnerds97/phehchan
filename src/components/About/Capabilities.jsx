import { capabilities } from "../../utils/constants";
import TextMask from "../ui/TextMask";

const Capabilities = () => {
  return (
    <div className="text-wrap">
      <h2 className="text-3xl sm:text-4xl py-4 font-cinzel font-semibold">
        <TextMask>{["Capabilities"]}</TextMask>
      </h2>
      <ul>
        {capabilities.map((item, index) => (
          <li key={index} className="pb-1 sm:ms-6 sm:list-disc ">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Capabilities;
