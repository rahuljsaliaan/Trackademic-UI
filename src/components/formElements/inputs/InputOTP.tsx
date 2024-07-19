import React, { useRef } from 'react';

interface InputOTPProps {
  label: string;
}

const InputOTP: React.FC<InputOTPProps> = ({ label }) => {
  const digitGroupRef = useRef<HTMLFormElement>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const parent = digitGroupRef.current;

    if (parent) {
      if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
        const prev = parent.querySelector(`#${target.dataset.previous}`) as HTMLInputElement;
        if (prev) {
          prev.focus();
        }
      } else if (
        (e.key >= '0' && e.key <= '9') ||
        (e.key >= 'A' && e.key <= 'Z') ||
        (e.key >= 'a' && e.key <= 'z') ||
        e.key === 'ArrowRight'
      ) {
        const next = parent.querySelector(`#${target.dataset.next}`) as HTMLInputElement;
        if (next) {
          next.focus();
        } else if (parent.dataset.autosubmit === 'true') {
          parent.submit();
        }
      }
    }
  };

  return (
    <div className="input-with-label-otp">
      <label>{label}</label>
      <form ref={digitGroupRef} method="get" className="digit-group" data-group-name="digits" data-autosubmit="false" autoComplete="off">
        <input type="text" id="digit-1" name="digit-1" data-next="digit-2" onKeyUp={handleKeyUp} maxLength={1} />
        <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" onKeyUp={handleKeyUp} maxLength={1} />
        <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" onKeyUp={handleKeyUp} maxLength={1} />
        <input type="text" id="digit-4" name="digit-4" data-previous="digit-3" onKeyUp={handleKeyUp} maxLength={1} />
      </form>
    </div>
  );
};

export default InputOTP;