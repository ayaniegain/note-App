function Button({ btnName, btnfunc, btnBgClr }) {
  return (
    <button
      className={`${btnBgClr} text-white  px-2 rounded-md`}
      onClick={btnfunc}
    >
      {btnName}
    </button>
  );
}

export default Button;
