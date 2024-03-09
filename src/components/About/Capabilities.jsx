const capabilities = [
  "User Research",
  "Market Research",
  "Brand Strategy & Positioning",
  "Product & Service Strategy",
  "Technology Strategy",
  "ASCI Code Compliant Campaign Designing",
];

const Capabilities = () => {
  return (
    <div className="text-wrap">
      <h2 className="text-2xl lg:text-3xl py-4 font-georgia font-semibold">Capabilities</h2>
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
