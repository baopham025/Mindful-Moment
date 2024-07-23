import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const ExploreScreen = ({ navigation }) => {
  // Dummy data for Explore screen
  const culturalMeditation = [
    {
      id: "1",
      title: "Japanese Cultural Meditations",
      description:
        "Discover different types of yoga and meditation practices in Japanese culture.",
      img: require("./ImagesToDoList/japanese.jpg"),
    },
    {
      id: "2",
      title: "Korean Cultural Meditations",
      description:
        "Discover different types of yoga and meditation practices in Korean culture.",
      img: require("./ImagesToDoList/korean.jpg"),
    },
    {
      id: "3",
      title: "Vietnamese Cultural Meditations",
      description:
        "Discover different types of yoga and meditation practices in Vietnamese culture.",
      img: require("./ImagesToDoList/vietnamese.jpg"),
    },
  ];

  const meditationArticles = [
    {
      id: "1",
      title: "Benefits of Daily Meditation",
      description:
        "Discover how daily meditation can improve your mental and physical well-being.",
      img: require("./ImagesToDoList/article_1.jpg"),
    },
    {
      id: "2",
      title: "Exploring Different Meditation Techniques",
      description:
        "Learn about various meditation techniques and find the one that suits you best.",
      img: require("./ImagesToDoList/article_2.jpg"),
    },
    {
      id: "3",
      title: "Meditation Techniques for Stress Management",
      description:
        "Discover different types of meditation techniques for stress management.",
      img: require("./ImagesToDoList/article_3.jpg"),
    },
  ];

  const meditationVideos = [
    {
      id: "1",
      title: "Guided Meditation for Stress Relief",
      duration: "30:00",
      img: require("./ImagesToDoList/video_1.jpg"),
    },
    {
      id: "2",
      title: "Deep Breathing Exercise",
      duration: "15:00",
      img: require("./ImagesToDoList/video_2.jpg"),
    },
    {
      id: "3",
      title: "Meditation for Stress and Anxiety",
      duration: "45:00",
      img: require("./ImagesToDoList/video_3.jpg"),
    },
  ];

  const CulturalMeditationItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.img} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const MeditationArticleItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.img} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const MeditationVideoItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.img} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("./ImagesToDoList/background.jpg")}
        style={styles.backgroundImage}
      />

      <Text style={styles.sectionHeading}>Cultural Meditation</Text>
      <FlatList
        horizontal
        data={culturalMeditation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CulturalMeditationItem item={item} />}
      />

      <Text style={styles.sectionHeading}>Meditation Articles</Text>
      <FlatList
        horizontal
        data={meditationArticles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeditationArticleItem item={item} />}
      />

      <Text style={styles.sectionHeading}>Meditation Videos</Text>
      <FlatList
        horizontal
        data={meditationVideos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeditationVideoItem item={item} />}
      />

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("User")}
        >
          <Text style={styles.menuButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.menuButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.menuButtonText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.menuButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  sectionHeading: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#dd8383",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#19A190",
  },
  itemSubtitle: {
    fontSize: 16,
    color: "#888",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  menuButton: {
    backgroundColor: "#4287f5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default ExploreScreen;
