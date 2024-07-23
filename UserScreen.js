import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const UserScreen = ({ navigation }) => {
  const [favoriteMusic, setFavoriteMusic] = useState([]);
  const [favoriteMeditation, setFavoriteMeditation] = useState([]);
  const [meditationChallengesData, setMeditationChallengesData] = useState([]);

  useEffect(() => {
    // Load user's favorite music, meditation sessions, and meditation challenges when the component mounts
    fetchFavoriteMusic();
    fetchFavoriteMeditation();
    fetchMeditationChallenges();
  }, []);

  const fetchFavoriteMusic = () => {
    // Simulated fetching of favorite music
    const fetchedMusic = [
      {
        id: "1",
        title: "Weightless",
        duration: "8:00",
        image: require("./ImagesToDoList/weightless.jpg"),
        benefit: "Relaxation and Stress Relief",
      },
      {
        id: "2",
        title: "Dawn",
        duration: "5:00",
        image: require("./ImagesToDoList/dawn.jpg"),
        benefit: "Soothing and Calming",
      },
      {
        id: "3",
        title: "Watermark",
        duration: "2:26",
        image: require("./ImagesToDoList/watermark.jpg"),
        benefit: "Tranquility and Serenity",
      },
    ];
    setFavoriteMusic(fetchedMusic);
  };

  const fetchFavoriteMeditation = () => {
    // Simulated fetching of favorite meditation sessions
    const fetchedMeditation = [
      {
        id: "1",
        title: "Morning Meditation",
        duration: "10:00",
        image: require("./ImagesToDoList/morning_meditation.jpg"),
        benefit: "Mindfulness and Focus",
      },
      {
        id: "2",
        title: "Evening Relaxation",
        duration: "15:00",
        image: require("./ImagesToDoList/evening_relaxation.jpg"),
        benefit: "Stress Relief and Calmness",
      },
      {
        id: "3",
        title: "Mindfulness Practice",
        duration: "12:30",
        image: require("./ImagesToDoList/mindfulness_practice.jpg"),
        benefit: "Clarity and Inner Peace",
      },
    ];
    setFavoriteMeditation(fetchedMeditation);
  };

  const fetchMeditationChallenges = () => {
    // Simulated fetching of meditation challenges
    const fetchedChallenges = [
      {
        id: "1",
        title: "30-Day Mindfulness Challenge",
        days: 30,
        benefit: "Improved Focus and Awareness",
        image: require("./ImagesToDoList/30_days.jpg"),
      },
      {
        id: "2",
        title: "21-Day Stress Relief Challenge",
        days: 21,
        benefit: "Reduced Stress and Anxiety",
        image: require("./ImagesToDoList/21_days.jpg"),
      },
      {
        id: "3",
        title: "14-Day Gratitude Meditation Challenge",
        days: 14,
        benefit: "Increased Happiness and Contentment",
        image: require("./ImagesToDoList/14_days.jpg"),
      },
    ];
    setMeditationChallengesData(fetchedChallenges);
  };

  const MusicItem = ({ music }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleMusicSelection(music)}
      >
        <Image source={music.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{music.title}</Text>
          <Text style={styles.itemSubtitle}>{music.duration}</Text>
          <Text style={styles.itemSubtitle}>{music.benefit}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const MeditationItem = ({ meditation }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleMeditationSelection(meditation)}
      >
        <Image source={meditation.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{meditation.title}</Text>
          <Text style={styles.itemSubtitle}>{meditation.duration}</Text>
          <Text style={styles.itemSubtitle}>{meditation.benefit}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const MeditationChallengeItem = ({ challenge }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleMeditationChallengeSelection(challenge)}
      >
        <Image source={challenge.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{challenge.title}</Text>
          <Text style={styles.itemSubtitle}>{challenge.days} Days</Text>
          <Text style={styles.itemSubtitle}>{challenge.benefit}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleMusicSelection = (music) => {
    console.log("Selected favorite music:", music.title);
  };

  const handleMeditationSelection = (meditation) => {
    console.log("Selected favorite meditation:", meditation.title);
  };

  const handleMeditationChallengeSelection = (challenge) => {
    console.log("Selected meditation challenge:", challenge.title);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./ImagesToDoList/background.jpg")}
        style={styles.backgroundImage}
      />
      <Text style={styles.heading}>Favorite Music</Text>
      <FlatList
        horizontal
        data={favoriteMusic}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MusicItem music={item} />}
      />

      <Text style={styles.heading}>Favorite Meditation Sessions</Text>
      <FlatList
        horizontal
        data={favoriteMeditation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeditationItem meditation={item} />}
      />

      <Text style={styles.heading}>Meditation Challenges</Text>
      <FlatList
        horizontal
        data={meditationChallengesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeditationChallengeItem challenge={item} />}
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
  heading: {
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

export default UserScreen;
