import styled from "styled-components";

export const PaginateWrapper = styled.div`
  ${({ theme }) => theme.flexBox()};
  gap: 20px;
`;

export const Button: any = styled.button`
  padding: 8px;
  margin: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.PAGINATE_NUM_TEXT};
  font-size: 1rem;
  transition: 0.5s;

  &:hover {
    color: #52a8ec;
    cursor: pointer;
    transform: translateY(-3px);
    text-decoration: underline;
  }

  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }

  &[aria-current] {
    color: #52a8ec;
    text-decoration: underline;
    font-weight: bold;
  }
`;
