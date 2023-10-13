import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <View>
        <StyledText aling="center" fontWeight="bold">
          Starts
        </StyledText>
        <StyledText aling="center">
          {parseThousands(props.stargazersCount)}
        </StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Forks
        </StyledText>
        <StyledText aling="center">
          {parseThousands(props.forksCount)}
        </StyledText>
      </View>
      <View>
        <StyledText aling="center" fontWeight="bold">
          Review
        </StyledText>
        <StyledText aling="center">
          {parseThousands(props.reviewCount)}
        </StyledText>
      </View>

      <View>
        <StyledText aling="center" fontWeight="bold">
          Rating
        </StyledText>
        <StyledText aling="center">
          {parseThousands(props.ratingAverage)}
        </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
