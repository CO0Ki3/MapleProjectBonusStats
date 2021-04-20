import styled from 'styled-components';

const Description = styled.div`
    padding: 1.5%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`

const DescriptionTitle = styled.h1`
  font-size: 1.5625rem;
  font-family: Roboto,'Noto Sans KR',sans-serif;
  font-weight: 400;
  line-height: 1.235;
`

const HrefStyle = styled.a`
  color: #E1831D;
  text-decoration: none;
`

const UlListStyle = styled.ul`
  margin-left: 1rem;
`
const LiListStyle = styled.li`
  margin-top: 4px;
`

function InfoMain() {
    return(
      <Description>
        <DescriptionTitle>메이플스토리 (KMS) 환생의 불꽃 확률 계산기</DescriptionTitle>
        <HrefStyle href="https://maplestory.nexon.com/News/Notice/Notice/133316" target="_blank" rel="noreferrer">2021.03.05에 공개한 로직</HrefStyle>을 바탕으로 원하는 추가 옵션을 뽑을 확률과 들어갈 환생의 불꽃 개수(기대값)를 알려줍니다.
          <UlListStyle>
            <li>결과는 <HrefStyle href="https://ko.wikipedia.org/wiki/%EC%9D%B4%ED%95%AD_%EB%B6%84%ED%8F%AC" target="_blank" rel="noneferrer">이항 분포</HrefStyle>를 이용하여 상위 50%의 값을 출력합니다.</li>
            <LiListStyle>출력 결과는 어디 까지나 이론적 인 값이며, 실제 결과를 보장하는 것은 아닙니다.</LiListStyle>
            <LiListStyle>모두 문의 사항은 <HrefStyle href="mailto:ehrrhgus0324@gmail.com">ehrrhgus0324@gmail.com</HrefStyle>로 이메일 부탁드립니다.</LiListStyle>
            <LiListStyle>그리고 이득 많이 보세요 :3</LiListStyle>
          </UlListStyle>
      </Description>
    )
}

export default InfoMain;