export default function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div>
      <div className="form-group mb-2">
        <label htmlFor={name} className="fw-bold mb-1">
          {label}
        </label>
        <input
          onChange={handleChange}
          className="form-control name"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          required
        />
      </div>
    </div>
  );
}
