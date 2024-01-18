import { ChangeEvent, InputHTMLAttributes } from 'react';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ onChange, ...props }) => {
  return (
    <select
      {...props}
      onChange={() => {}}
      name="title"
      className="w-full mb-2 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium
            outline-none transition focus:border-primary active:border-primary disabled:cursor-default
            disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    >
      {props.children}
    </select>
  );
};

export default Select;
