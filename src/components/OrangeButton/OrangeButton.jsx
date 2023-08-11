import { StyledBtn } from "./OrangeButton.styled";

export const OrangeButton = ({ children, onClick }) => {
  return <StyledBtn onClick={onClick}>{children}</StyledBtn>;
};
