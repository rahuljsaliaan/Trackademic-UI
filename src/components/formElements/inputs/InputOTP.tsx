import React, { useRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { LoginDTO } from 'trackademic-schema-toolkit';

interface InputOTPProps {
  label: string;
  register: UseFormRegister<LoginDTO>;
}

const InputOTP: React.FC<InputOTPProps> = ({ label, register }) => {
  const digitGroupRef = useRef<HTMLFormElement>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const parent = digitGroupRef.current;

    if (parent) {
      if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
        const prev = parent.querySelector(
          `#${target.dataset.previous}`
        ) as HTMLInputElement;
        if (prev) {
          prev.focus();
        }
      } else if (
        (e.key >= '0' && e.key <= '9') ||
        e.key === 'ArrowRight'
      ) {
        const next = parent.querySelector(
          `#${target.dataset.next}`
        ) as HTMLInputElement;
        if (next) {
          next.focus();
        } else if (parent.dataset.autosubmit === 'true') {
          parent.submit();
        }
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="input-with-label-otp">
      <label>{label}</label>
      <form
        ref={digitGroupRef}
        method="get"
        className="digit-group"
        data-group-name="digits"
        data-autosubmit="false"
        autoComplete="off"
      >
        <input
          type="text"
          id="digit-1"
          {...register('digit-1')}
          data-next="digit-2"
          onKeyUp={handleKeyUp}
          onKeyPress={handleKeyPress}
          maxLength={1}
        />
        <input
          type="text"
          id="digit-2"
          {...register('digit-2')}
          data-next="digit-3"
          data-previous="digit-1"
          onKeyUp={handleKeyUp}
          onKeyPress={handleKeyPress}
          maxLength={1}
        />
        <input
          type="text"
          id="digit-3"
          {...register('digit-3')}
          data-next="digit-4"
          data-previous="digit-2"
          onKeyUp={handleKeyUp}
          onKeyPress={handleKeyPress}
          maxLength={1}
        />
        <input
          type="text"
          id="digit-4"
          {...register('digit-4')}
          data-previous="digit-3"
          onKeyUp={handleKeyUp}
          onKeyPress={handleKeyPress}
          maxLength={1}
        />
      </form>
    </div>
  );
};

export default InputOTP;