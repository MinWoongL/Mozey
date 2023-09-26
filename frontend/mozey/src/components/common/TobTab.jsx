import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { BsCoin } from "react-icons/bs";
import * as utils from "utils";

const TobTab = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [showsub, setShowsub] = useState(true);

  useEffect(() => {
    switch(location.pathname) {
      case utils.URL.HOME.MAIN:
        setTitle("마이페이지");
        setSubtitle("mypage mypage mypage mypage mypage mypage mypage mypage mypage");
        setShowsub(false);
        break;
      case utils.URL.EXCHANGE.MAIN:
        setTitle("환전소");
        setSubtitle("coinonSale coinonSale coinonSale coinonSale coinonSale");
        setShowsub(true);
        break;
      case utils.URL.MESSAGE.MAIN:
        setTitle("메시지함");
        setSubtitle("whatYougot  whatYougot  whatYougot  whatYougot  whatYougot  whatYougot");
        setShowsub(true);
        break;
      case utils.URL.VOTE.MAIN:
        setTitle("투표");
        setSubtitle("voteforHim voteforHer voteforHim voteforHer voteforHim voteforHer");
        setShowsub(true);
        break;
      case utils.URL.NEWS.MAIN:
        setTitle("뉴스");
        setSubtitle("EconomicNewsToday EconomicNewsToday EconomicNewsToday");
        setShowsub(true);
        break;
      default:
        setTitle("");
        setSubtitle("");
    }
  }, [location.pathname]);

  return (
    <S.Wrap>
      <S.TopSection>
        <S.Title>{title}</S.Title>
        {showsub && (
          <S.CoinAmount>
            <S.StyledBsCoin />
            100
            <S.StyledBsCoin />
            100
            <S.StyledBsCoin />
            100
          </S.CoinAmount>
        )}
      </S.TopSection>
      <S.Subtitle>
        {subtitle}
      </S.Subtitle>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;
  `,
  TopSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.div`
    margin: 38px auto 10px 30px;
    font-size: ${({ theme }) => theme.fontsize.title1};
    font-weight: 1000;
  `,
  CoinAmount: styled.div`
    margin-top: 38px;
    margin-right: 30px;
    padding: 4px;
  `,
  StyledBsCoin: styled(BsCoin)`
    font-size: ${({ theme }) => theme.fontsize.title3};
    margin-left: 8px;
  `,
  Subtitle: styled.div`
    margin-top: 10px;
    padding: 6px;
    background-color: ${({ theme }) => theme.color.yellow};
    font-size: ${({ theme }) => theme.fontsize.content};
    word-spacing: 10px;
    font-weight: 500;
  `,
};

export default TobTab;