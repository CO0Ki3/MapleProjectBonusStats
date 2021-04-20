import styled from 'styled-components';
import InfoHeader from '../Infomation/InfoHeader';
import InfoMain from '../Infomation/InfoMain';

const InfoStyle = styled.header`
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`

function LayoutInfo(){
    return(
        <InfoStyle>
            <InfoHeader />
            <InfoMain />
        </InfoStyle>
    )
}

export default LayoutInfo;