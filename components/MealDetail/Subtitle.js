import { View, Text, StyleSheet } from "react-native";
const Subtitle = ({ subTitle }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 4,
    padding: 6,
  },
});
