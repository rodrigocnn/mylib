import { ChangeEvent, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  return (
    <input
      {...props}
      type="text"
      onChange={() => {}}
      name="title"
      className="w-full mb-2 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium
            outline-none transition focus:border-primary active:border-primary disabled:cursor-default
            disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    ></input>
  );
};

export default Input;
