
interface ISelectOptionProps {
  className: string;
  label: string;
  isChecked: boolean;
}

/** checkbox option */
const SelectOption = ({ className, label, isChecked }: ISelectOptionProps) => {

  return (
    <div className={className}>
      {isChecked ? <div>■</div> : <div>□</div>}
      <p>{label}</p>
    </div>
  );
};

export default SelectOption;