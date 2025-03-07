import React from 'react';
import styled from 'styled-components';

const MainBanner = styled.section`
  background-image: url('/assets/images/main-banner.png');
  background-size: cover;
  background-position: center;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;

const MainBannerTitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

function HomePage() {
  return (
    <div>
      <MainBanner>
        <div>
          <MainBannerTitle>Nova X Joy</MainBannerTitle>
          <p>We make the best casual games</p>
        </div>
      </MainBanner>
      {/* 추가적인 섹션 */}
    </div>
  );
}

export default HomePage;