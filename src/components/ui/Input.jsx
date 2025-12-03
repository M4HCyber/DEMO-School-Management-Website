function Input({ type, placeholder, label }) {
  if (type === "message-area")
    return (
      <div className="flex flex-col gap-2">
        <label className="font-semibold" htmlFor={label.split(" ").join(" ")}>
          {label}
        </label>
        <textarea
          className="h-40 w-full resize-none rounded-lg border border-gray-200 px-4 py-2 placeholder:text-sm"
          placeholder={placeholder}
          required
        ></textarea>
      </div>
    );
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={label.split(" ").join(" ")}>
        {label}
      </label>
      <input
        className="rounded-lg border-1 border-gray-200 px-4 py-2 placeholder:text-sm"
        type={type}
        required
        placeholder={placeholder}
        id={label.split(" ").join(" ")}
      />
    </div>
  );
}

export default Input;
