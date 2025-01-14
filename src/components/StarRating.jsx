import { React, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";
import { colors } from "../utils/colors";

export const StarRating = ({
  rating = 0
}) => {
  
  const [wholeStars, setWholeStars] = useState(0);
  const [halfStar, setHalfStar] = useState(0);
  const [emptyStars, setEmptyStars] = useState(0);

  useEffect(() => {
    const generateStars = () => {
      setWholeStars(Math.floor(rating));
      const hasHalfStar = (rating - Math.floor(rating)) >= 0.5;
      setHalfStar(hasHalfStar ? 1 : 0);
      setEmptyStars(5 - Math.floor(rating) - (hasHalfStar ? 1 : 0));
    };
    generateStars();
  }, [rating]);

  return (<View style={styles.ratingContainer}>
    <Text>
      {
        [...Array(wholeStars)].map((_, index) => <Icon source="star" color={colors.gold} key={index} />)
      }
      {
        halfStar == 1 && <Icon source="star-half-full" color={colors.gold} />
      }
      {
        [...Array(emptyStars)].map((_, index) => <Icon source="star-outline" color={colors.gold} key={index} />)
      }
    </Text>
    <Text>
      ({rating})
    </Text>
  </View>);
};

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default StarRating;
