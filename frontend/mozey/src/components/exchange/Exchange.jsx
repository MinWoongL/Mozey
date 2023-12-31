import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { Select, MenuItem } from "@mui/material";
import { BiSolidCoinStack } from "react-icons/bi";
import { TbStarFilled, TbDiamondFilled } from "react-icons/tb";
import { ExchangeCoin } from "components";
import "semantic-ui-css/semantic.min.css";
import useStore from "../../store/chartDataStore";
import Loading from "../loading/Loading";

const Exchange = () => {
  const chartDataStore = useStore((state) => state.chartData);
  const [options] = useState({
    colors: ["#0fbcf9"],
    chart: {
      width: "80%",
      height: "30%",
      type: "line",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    theme: {
      mode: "dark",
      palette: "palette1",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },

    // 보조선
    grid: {
      show: false,
    },
    // 선에 대한 옵션
    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",
      gradient: { gradientToColors: ["#f7dc6f"], stops: [0, 500] },
    },
    xaxis: {
      type: "datetime",
      labels: {
        formatter: function (val) {
          const date = new Date(val);
          const day = date.getDate();
          return `${date.getFullYear()}-${date.getMonth() + 1}-${day}`;
        },
      },
    },
  });

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
  // console.log(UseChartData);
  // 날짜를 원하는 형식으로 변환 (YYYYMMDD을 YYYY-MM-DD로 변환)
  const formatDate = (date) => {
    const date2 = date.toString();
    const year = date2.slice(0, 4);
    const month = date2.slice(5, 7);
    const day = date2.slice(8, 10);
    const newDate = `${year}-${month}-${day}`;
    return new Date(newDate);
  };

  // 코스피 차트 상태
  const [filteredSeries1, setFilteredSeries1] = useState([]);
  const [selectedPeriod1, setSelectedPeriod1] = useState("default");

  // S&P 차트 상태
  const [filteredSeries2, setFilteredSeries2] = useState([]);
  const [selectedPeriod2, setSelectedPeriod2] = useState("default");

  // 코스피 차트 구현
  useEffect(() => {
    let targetData = UseChartData.filter((item) => item.name === "KOSPI 50");

    if (selectedPeriod1 === "default") {
      setFilteredSeries1(
        UseChartData.filter((item) => item.name === "KOSPI 50")
      );
    } else if (selectedPeriod1 === "7days") {
      targetData = targetData.map((item) => {
        const filteredData1 = item.data.filter((dataItem) => {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
          return (
            formatDate(dataItem.x) >= sevenDaysAgo && item.name === "KOSPI 50"
          );
        });
        return { ...item, data: filteredData1 };
      });
      setFilteredSeries1(targetData);
    } else if (selectedPeriod1 === "30days") {
      setFilteredSeries1(
        UseChartData.filter((item) => item.name === "KOSPI 50")
      );
      targetData = targetData.map((item) => {
        const filteredData1 = item.data.filter((dataItem) => {
          const monthAgo = new Date();
          monthAgo.setDate(monthAgo.getDate() - 30);
          return formatDate(dataItem.x) >= monthAgo && item.name === "KOSPI 50";
        });
        return { ...item, data: filteredData1 };
      });
      setFilteredSeries1(targetData);
    }
  }, [selectedPeriod1]);

  // S&P 차트 구현
  useEffect(() => {
    let targetData = UseChartData.filter((item) => item.name === "S&P 500");

    if (selectedPeriod2 === "default") {
      setFilteredSeries2(
        UseChartData.filter((item) => item.name === "S&P 500")
      );
    } else if (selectedPeriod2 === "7days") {
      targetData = targetData.map((item) => {
        const filteredData2 = item.data.filter((dataItem) => {
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
          return (
            formatDate(dataItem.x) >= sevenDaysAgo && item.name === "S&P 500"
          );
        });
        return { ...item, data: filteredData2 };
      });
      setFilteredSeries2(targetData);
    } else if (selectedPeriod2 === "30days") {
      targetData = targetData.map((item) => {
        const filteredData2 = item.data.filter((dataItem) => {
          const monthAgo = new Date();
          monthAgo.setDate(monthAgo.getDate() - 30);
          return formatDate(dataItem.x) >= monthAgo && item.name === "S&P 500";
        });
        return { ...item, data: filteredData2 };
      });
      setFilteredSeries2(targetData);
    }
  }, [selectedPeriod2]);

  return (
    <S.Wrap>
      <S.ChartContainer>
        <S.CoinTitle color="yellow">
          <S.StyledTbStar />
          KOSPI 50
        </S.CoinTitle>
        <S.StyledSelect
          name="period"
          value={selectedPeriod1}
          onChange={(e) => setSelectedPeriod1(e.target.value)}
        >
          <S.StyledMenuItem value="default">전체</S.StyledMenuItem>
          <S.StyledMenuItem value="7days">7일</S.StyledMenuItem>
          <S.StyledMenuItem value="30days">30일</S.StyledMenuItem>
        </S.StyledSelect>
      </S.ChartContainer>
      <S.Centered>
        <Chart options={options} series={filteredSeries1} />
      </S.Centered>
      <S.ChartContainer>
        <S.CoinTitle color="red">
          <S.StyledTbDiamond />
          S&P 500
        </S.CoinTitle>
        <S.StyledSelect
          name="period"
          value={selectedPeriod2}
          onChange={(e) => setSelectedPeriod2(e.target.value)}
        >
          <S.StyledMenuItem value="default">전체</S.StyledMenuItem>
          <S.StyledMenuItem value="7days">7일</S.StyledMenuItem>
          <S.StyledMenuItem value="30days">30일</S.StyledMenuItem>
        </S.StyledSelect>
      </S.ChartContainer>
      <S.Centered>
        <Chart options={options} series={filteredSeries2} />
      </S.Centered>
      <ExchangeCoin></ExchangeCoin>
      <Loading />
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.div`
    width: 100%;
    background: ${({ theme }) => theme.color.background};
    flex-direction: column;
    align-items: center;
    padding: 20px;
    min-height: 100vh;
  `,

  ChartContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  Centered: styled.div`
    margin: 8px auto;
    padding: 16px 10px;
    opacity: 0.9;
  `,
  CoinTitle: styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    padding-right: 10px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: ${({ theme, color }) =>
        color === "yellow"
          ? theme.color.yellow
          : color === "red"
          ? theme.color.red
          : "transparent"};
    }
  `,
  StyledSelect: styled(Select)`
    .MuiSelect-select {
      padding: 8px;
    }
  `,

  StyledMenuItem: styled(MenuItem)`
    height: 30px;
  `,
  StyledBiSolidCoinStack: styled(BiSolidCoinStack)`
    font-size: ${({ theme }) => theme.fontsize.title3};
    margin-left: 8px;
    margin-right: 4px;
    color: ${({ theme }) => theme.color.blue};
  `,
  StyledTbStar: styled(TbStarFilled)`
    width: 30px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin: 8px;
    margin-right: 12px;
    color: ${({ theme }) => theme.color.yellow};
  `,
  StyledTbDiamond: styled(TbDiamondFilled)`
    width: 30px;
    height: 30px;
    font-size: ${({ theme }) => theme.fontsize.title2};
    margin: 8px;
    margin-right: 12px;
    color: ${({ theme }) => theme.color.red};
  `,
};

export default Exchange;
