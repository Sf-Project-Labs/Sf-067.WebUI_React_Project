import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';

export const StyledCarousel = styled(Carousel)`
  .navigationButton {
    border: '1px solid #979797';
    &:hover {
      color: '#C63638';
      border: '1px solid #C63638';
      svg {
        fill: white;
      }
    }
  }
`;
