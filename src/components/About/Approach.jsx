import TextMask from "../ui/TextMask";

const Approach = () => {
  return (
    <div className="text-wrap">
      <h2 className="text-3xl sm:text-4xl py-4 font-cinzel font-semibold">
        <TextMask>{["Approach"]}</TextMask>
      </h2>
      <p className="pb-2">
        Marketing and Advertising are based on one thing and one thing only:
        happiness.
      </p>
      <p className="pb-2 sm:max-w-xl">
        We believe it is our responsibility to be bring joy to you and your end
        consumers to ensure their first and/or ongoing experience continues to
        be happy in order to ensure their conversion our advocates.{" "}
      </p>
    </div>
  );
};

export default Approach;
