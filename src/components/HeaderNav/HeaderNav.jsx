import { Header, LinkWrapper, StyledLink } from './HeaderNav.styled';
import { TbTruckDelivery } from 'react-icons/tb';
import { GrMapLocation } from 'react-icons/gr';

export const HeaderNav = () => {
  return (
    <>
      <Header>Nova Poshta</Header>
      <LinkWrapper>
        <StyledLink to="/">
          Перевірити ТТН <TbTruckDelivery size={24} />
        </StyledLink>
        <StyledLink to="/address">
          Список відділень <GrMapLocation size={24} />
        </StyledLink>
      </LinkWrapper>
    </>
  );
};
