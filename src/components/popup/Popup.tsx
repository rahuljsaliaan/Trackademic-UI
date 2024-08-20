import styled from 'styled-components';
import Button from '@/components/formElements/buttons/Button';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(238, 245, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const PopupBox = styled.div`
  background-color: #282828;
  color: #fff;
  max-width: 90%;
  padding: 32px;
  border-radius: 10px;
  text-align: center;
`;

const Heading = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

const Message = styled.p`
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
`;

const TextBox = styled.textarea<{ isTextBoxEnabled: boolean }>`
  width: 100%;
  height: 50px;
  margin-bottom: 32px;
  background-color: #282828;
  color: #fff;
  border: 1px solid #d8dee7;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  resize: none;
  outline: none;
  display: ${(props) => (props.isTextBoxEnabled ? 'block' : 'none')};
  &:focus {
    border: 1px solid #4535ea;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
`;

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onTextChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isTextBoxEnabled: boolean;
}

const Popup: React.FC<PopupProps> = ({
  isVisible,
  onClose,
  onConfirm,
  onTextChange,
  isTextBoxEnabled = false
}) => {
  if (!isVisible) return null;

  return (
    <Overlay>
      <PopupBox>
        <Heading>Are You Sure? 🤔</Heading>
        <Message>
          By confirming this submission, the parents of the absentees will be
          notified via text message about their ward's absence. Please note that
          this submission will be permanent and cannot be undone.
        </Message>
        <TextBox
          onChange={onTextChange}
          isTextBoxEnabled={isTextBoxEnabled}
          placeholder="Optional notes here..."
        />
        <ButtonContainer>
          <Button text="Cancel" color="#EF4444" onClick={onClose} />
          <Button text="Continue" onClick={onConfirm} />
        </ButtonContainer>
      </PopupBox>
    </Overlay>
  );
};

export default Popup;
