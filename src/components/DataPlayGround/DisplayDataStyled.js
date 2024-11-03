import styled from "styled-components";


export const DataContainer = styled.div`
height: 100%;
padding: 20px;
display: flex;
flex-direction: column;
gap: 16px;
overflow: auto;
max-height: 90vh;
background-color: ${({ isDarkMode }) => (isDarkMode ? '#1C1C1C' : 'white')};

&::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: gray #f0f0f0;
`
export const DataTitle = styled.div`
font-size: 14px;
font-weight: 600;
line-height: 20px;
color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : 'black')};
`
export const SectionOneWrap = styled.div`
display: flex;
align-items: center;
gap:20px;
width: 100%;
@media (max-width: 429px) { 
  flex-direction: column;
}
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  color: #1C1C1C;
  font-weight: 400;
  background-color: ${({ type, isDarkMode }) => {
    if (isDarkMode && (type === 'orders' || type === 'revenue')) {
      return '#FFFFFF0D';
    }
    switch (type) {
      case 'customer':
        return '#E3F5FF';
      case 'orders':
        return '#F7F9FB';
      case 'revenue':
        return '#F7F9FB';
      case 'growth':
        return '#E5ECF6';
      default:
        return '#E3F5FF';
    }
  }};
`;


export const CardCount = styled.div`
font-size: 24px;
font-weight: 600;
`
export const CardSubCount = styled.div`
font-size: 12px;
font-weight: 400;
display: flex;
align-items: center;
gap: 5px;
`
export const CountWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const CardsWrap = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;
width: 100%;
`
export const ProgressIcon = styled.img`
width: 16px;
height: 16px;
`

export const ProjectionCard = styled.div`
  border-radius: 16px;
  color: #1C1C1C;
  font-weight: 400;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF0D' : '#F7F9FB')};
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`
export const RevenueGraphCard = styled.div`
padding: 24px;
border-radius: 16px;
background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF0D' : '#F7F9FB')};
width: 100%;
@media (max-width: 429px) {
width:87%;
  }
`

export const RevenueLocationCard = styled.div`
padding: 24px;
border-radius: 16px;
background-color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF0D' : '#F7F9FB')};
@media (max-width: 429px) { 
  width: 87%;
}
`
export const WorldMap = styled.img`
  margin: 10px;
`
export const WorldIconWrap = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
`

export const CountryPercentage = styled.div`
  display: flex;
  margin: 7px 0;
  flex-direction: column;
  gap: 8px;
`;
export const LabelWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`

export const PercentageLabel = styled.span`
font-size: 12px;
color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '')};

`;

export const ValueLabel = styled.span`
  font-size: 12px; 
  color: ${({ isDarkMode }) => (isDarkMode ? '#FFFFFF' : '#333')};

`;

export const PercentageBar = styled.div`
  height: 3px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#1C1C1C66' : '#e0e0e0')};
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;

export const Fill = styled.div`
  height: 100%;
  background-color: #A8C5DA; /* Percentage fill color */
  width: ${(props) => props.percentage}%;
`;