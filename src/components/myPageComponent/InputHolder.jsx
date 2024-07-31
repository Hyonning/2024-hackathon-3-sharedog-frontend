import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15vh;
  font-size: 20px;
  font-family: SUIT, sans-serif;
  font-weight: 800;
  flex-direction: column;
  margin: 3px;
`;

export const InPutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const InPutText = styled.div`
  color: var(--Graysclae-Gray700, #191f28);
  font-family: SUIT, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.28px;
`;

export const Holder = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--Grayscale-Gray200, #eff1f3);
  background: var(--Grayscale-White, #fff);
  font-family: SUIT, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 19.2px */
  letter-spacing: -0.24px;

  color: var(--Gray-Gray01, #9c9ca1); /* 기본 텍스트 색상 */

  &::placeholder {
    color: var(--Gray-Gray01, #9c9ca1); /* 플레이스홀더 색상 */
  }

  &:focus {
    color: #000; /* 포커스 시 텍스트 색상 */
    border-color: black; /* 포커스 시 보더 색상 */
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: #000 !important; /* 자동완성 텍스트 색상 */
  }
`;

const InputHolder = ({ title, inputtext, value, onChange }) => {
  return (
    <Wrapper>
      <InPutSection>
        <InPutText>{title}</InPutText>
        <Holder
          type="text"
          placeholder={inputtext}
          value={value}
          onChange={onChange}
        />
      </InPutSection>
    </Wrapper>
  );
};

export default InputHolder;