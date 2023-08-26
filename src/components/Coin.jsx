import React, { useState } from "react";
import CoinCard from "./CoinCard";
import axios from "axios";
import { useEffect } from "react";
import { server } from "../index";
import {
  Container,
  HStack,
  Heading,
  Image,
  VStack,
  Text,
  Button,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";

const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoding(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoding(false);
      } catch (error) {
        setError(true);
        setLoding(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <Error message={"Error while fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {" "}
      {loding ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>₹ (INR)</Radio>
              <Radio value={"usd"}>$ (USD)</Radio>
              <Radio value={"eur"}>€ (EUR)</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                symbol={i.symbol}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coin;
