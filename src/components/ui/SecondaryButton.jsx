const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 rounded-md border border-white bg-slate-900 text-neutral-100 text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,215,0)] transition duration-300"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
