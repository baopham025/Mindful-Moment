import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SearchScreen = ({ navigation }) => {
  const [recommendMusic, setRecommendMusic] = useState([]);
  const [recommendMeditation, setRecommendMeditation] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Load recommended music and meditation sessions when the component mounts
    fetchRecommendedMusic();
    fetchRecommendedMeditation();
  }, []);

  const fetchRecommendedMusic = () => {
    // Simulated fetching of recommended music
    const fetchedMusic = [
      {
        id: "1",
        title: "Chill Vibes",
        artist: "Various Artists",
        duration: "1:00:00",
      },
      {
        id: "2",
        title: "Relaxing Piano",
        artist: "Instrumental",
        duration: "45:00",
      },
      { id: "3", title: "Calm Guitar", artist: "Acoustic", duration: "30:00" },
    ];
    setRecommendMusic(fetchedMusic);
  };

  const fetchRecommendedMeditation = () => {
    // Simulated fetching of recommended meditation sessions
    const fetchedMeditation = [
      {
        id: "1",
        title: "Morning Serenity",
        duration: "20:00",
        description: "Start your day with peace and clarity.",
        skillLevel: "Beginner",
      },
      {
        id: "2",
        title: "Evening Calm",
        duration: "25:00",
        description: "Relax and unwind before bed.",
        skillLevel: "Intermediate",
      },
      {
        id: "3",
        title: "Midday Zen",
        duration: "15:00",
        description: "Refresh your mind during the day.",
        skillLevel: "Advanced",
      },
    ];
    setRecommendMeditation(fetchedMeditation);
  };

  const filterSessions = () => {
    // Logic to filter sessions based on the search query
    // For simplicity, let's assume we are not implementing search functionality in this example
    console.log("Filtering sessions for:", searchQuery);
  };

  const MusicItem = ({ music }) => {
    return (
      <TouchableOpacity style={styles.sessionItem}>
        <Text style={styles.sessionTitle}>{music.title}</Text>
        <Text style={styles.sessionArtist}>{music.artist}</Text>
        <Text style={styles.sessionDuration}>{music.duration}</Text>
      </TouchableOpacity>
    );
  };

  const MeditationItem = ({ meditation }) => {
    return (
      <TouchableOpacity style={styles.sessionItem}>
        <Text style={styles.sessionTitle}>{meditation.title}</Text>
        <Text style={styles.sessionDuration}>{meditation.duration}</Text>
        <Text style={styles.sessionDescription}>{meditation.description}</Text>
        <Text style={styles.skillLevel}>{meditation.skillLevel}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("./ImagesToDoList/background.jpg")}
        style={styles.backgroundImage}
      />
      <Text style={styles.heading}>Search</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search sessions..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={filterSessions}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recommended Music</Text>
      <FlatList
        style={styles.sessionList}
        data={recommendMusic}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MusicItem music={item} />}
      />

      <Text style={styles.sectionTitle}>Recommended Meditation Sessions</Text>
      <FlatList
        style={styles.sessionList}
        data={recommendMeditation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeditationItem meditation={item} />}
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
    marginBottom: 20,
    color: "#dd8383",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "#4287f5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  sectionTitle: {
    fontSize: 2,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#dd8383",
  },
  sessionList: {
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  sessionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#19A190",
  },
  sessionArtist: {
    fontSize: 16,
    color: "#888",
  },
  sessionDuration: {
    fontSize: 14,
    color: "#666",
  },
  sessionDescription: {
    fontSize: 16,
    color: "#666",
  },
  skillLevel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
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

export default SearchScreen;
