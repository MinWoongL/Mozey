import { useEffect, useState } from "react";
import React from "react";
import coinPriceAPI from "api/coinPriceAPI";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { FaCoins, FaCommentDollar } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import useStore from "../../store/chartDataStore";
import useStore1 from "../../store/userInfoStore";
import { BiSolidCoinStack } from "react-icons/bi";
import { TbStarFilled, TbDiamondFilled } from "react-icons/tb";
//  코인 교환 파트

const ExchangeCoin = () => {
  const chartDataStore = useStore((state) => state.chartData);
  const userInfo = useStore1((state) => state.User);
  const distributeData = (rawData) => {
    const transformedData = {};
    rawData.forEach((item) => {
      const { coinName, coinPrice, date } = item;
      const seriesName = coinName === "Coin1" ? "KOSPI 50" : "S&P 500";
      if (!transformedData[coinName]) {
        transformedData[coinName] = {
          name: seriesName,
          data: [],
        };
      }
      transformedData[coinName].data.push({
        x: new Date(
          `${date.toString().slice(0, 4)}-${date.toString().slice(4, 6)}-${date
            .toString()
            .slice(6, 8)}`
        ).toISOString(),
        y: coinPrice,
      });
    });
    return Object.values(transformedData);
  };

  const UseChartData = distributeData(chartDataStore);

  const series_KOSPI = UseChartData.filter((item) => item.name === "KOSPI 50");

  const [series1, setSeries1] = useState(series_KOSPI);

  const series_SandP = UseChartData.filter((item) => item.name === "S&P 500");
  const [series2, setSeries2] = useState(series_SandP);

  const [fromCoin, setFromCoin] = useState("");
  const [toCoin, setToCoin] = useState("");
  const [selectFromOption, setSelectFromOption] = useState("Point");
  const [selectToOption, setSelectToOption] = useState("KOSPI 50");
  const [error, setError] = useState(false);
  // 테스트
  const myCoin = 1000;
  const calculateExchange = (value, selectFromOption, selectToOption) => {
    const todayKospi =
      Math.round(series1[0].data[series1[0].data.length - 1].y / 1000) / 10;
    const todaySandP =
      Math.round(series2[0].data[series2[0].data.length - 1].y / 1000) / 10;
    let exchangeRate = 0.85;
    console.log("오늘의 스타 지수 ", todayKospi);
    console.log("오늘의 다이아 지수 ", todaySandP);

    const KToS = (todayKospi / todaySandP) * 0.9;
    const PToS = todaySandP / 1000;
    const PToK = todayKospi / 1000;
    const SToK = (todaySandP / todayKospi) * 0.9;
    if (selectFromOption === "Point") {
      if (selectToOption === "KOSPI 50") {
        exchangeRate = PToK;
      } else if (selectToOption === "S&P 500") {
        exchangeRate = PToS;
      }
    } else if (selectFromOption === "KOSPI 50") {
      if (selectToOption === "S&P 500") {
        exchangeRate = KToS;
      }
    } else if (selectFromOption === "S&P 500") {
      if (selectToOption === "KOSPI 50") {
        exchangeRate = SToK;
      }
    }
    const result = value * exchangeRate;
    setToCoin(result);
  };
  const handleFromCoinChange = (e) => {
    const inputAmount = e;
    console.log(inputAmount);
    let tmp = "";
    if (selectFromOption === "Point") {
      tmp = userInfo.Point;
    } else if (selectFromOption === "KOSPI 50") {
      tmp = userInfo.Coin1;
    } else if (selectFromOption === "S&P 500") {
      tmp = userInfo.Coin2;
    }

    if (inputAmount > tmp) {
      setError(true);
    } else {
      setError(false);
      setFromCoin(inputAmount);
    }
  };
  const handleSelectFromOpitonChange = (e) => {
    setSelectFromOption(e);
  };
  const handleSelectToOpitonChange = (e) => {
    setSelectToOption(e);
  };

  const handleExchangeClick = async (
    selectFromOption,
    selectToOption,
    fromCoin,
    toCoin
  ) => {
    try {
      const coinModify = {
        "S&P 500": "Coin2",
        "KOSPI 50": "Coin1",
        Point: "Point",
      };
      selectFromOption = coinModify[selectFromOption];
      selectToOption = coinModify[selectToOption];

      const postData = {
        fromCoinName: selectFromOption,
        toCoinName: selectToOption,
        minusCoinAmount: parseInt(fromCoin),
        plusCoinAmount: toCoin,
      };
      const response = await coinPriceAPI.exchangeCoin(postData);
      console.log(response, "asd");
    } catch (error) {
      console.log("에러", error);
    }
  };

  useEffect(() => {
    calculateExchange(fromCoin, selectFromOption, selectToOption);
  }, [fromCoin, selectFromOption, selectToOption]);
  return (
    <S.ExContainer>
      <S.CoinCentered>
        <div>
          {selectFromOption === "Point" && (
            <S.StyledBiSolidCoinStack size="25%" padding="10%" />
          )}
          {selectFromOption === "KOSPI 50" && (
            <S.StyledTbDiamond size="25%" padding="10%" />
          )}
          {selectFromOption === "S&P 500" && (
            <S.StyledTbStar size="25%" padding="10%" />
          )}
          <br />
          <Select
            name="fromOption"
            className="select"
            value={selectFromOption}
            onChange={(e) => handleSelectFromOpitonChange(e.target.value)}
          >
            <MenuItem value="Point">Point</MenuItem>
            <MenuItem value="KOSPI 50">KOSPI 50</MenuItem>
            <MenuItem value="S&P 500">S&P 500</MenuItem>
          </Select>
          <br />
          <TextField
            value={fromCoin}
            onChange={(e) => handleFromCoinChange(e.target.value)}
            error={error} // Add the error prop to display error styling
            label={error ? "보유 금액을 초과했습니다." : ""}
          />
        </div>
        <div>
          <AiOutlineArrowRight size="30%" padding="10%" />
        </div>
        <div>
          {selectToOption === "KOSPI 50" && (
            <S.StyledTbDiamond size="25%" padding="10%" />
          )}
          {selectToOption === "S&P 500" && (
            <S.StyledTbStar size="25%" padding="10%" />
          )}
          <br />
          <Select
            name="toOption"
            className="select"
            value={selectToOption}
            onChange={(e) => handleSelectToOpitonChange(e.target.value)}
          >
            <MenuItem value="KOSPI 50">KOSPI 50</MenuItem>
            <MenuItem value="S&P 500">S&P 500</MenuItem>
          </Select>
          <br />
          <TextField
            type="number"
            value={toCoin}
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </S.CoinCentered>
      <S.YellowButton
        disabled={error}
        onClick={() =>
          handleExchangeClick(
            selectFromOption,
            selectToOption,
            fromCoin,
            toCoin
          )
        }
      >
        환전
      </S.YellowButton>
    </S.ExContainer>
  );
};
const S = {
  CoinCentered: styled.form`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  `,
  ExContainer: styled.div`
    height: 300px;
    margin: 0% auto;
    margin-top: 30px;
    padding: 15px;
    width: 90%;
    background-color: white;
  `,
  Logo: styled.img`
    height: 15px;
  `,
  YellowButton: styled.button`
    background-color: #ffd94a;
    padding: 10px 30px;
    margin: auto;
    display: block;
    border-radius: 10px;
    margin-top: 20px;
  `,
  StyledBiSolidCoinStack: styled(BiSolidCoinStack)`
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin-left: 8px;
    margin-right: 4px;
    color: ${({ theme }) => theme.color.blue};
  `,
  StyledTbStar: styled(TbStarFilled)`
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin-left: 8px;
    margin-right: 4px;
    color: ${({ theme }) => theme.color.yellow};
  `,
  StyledTbDiamond: styled(TbDiamondFilled)`
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin-left: 8px;
    margin-right: 4px;
    color: ${({ theme }) => theme.color.red};
  `,
};
export default ExchangeCoin;
