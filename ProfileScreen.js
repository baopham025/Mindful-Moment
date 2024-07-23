// Import necessary modules
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  ProgressViewIOS,
  ProgressBarAndroid,
  Platform,
  Share,
} from "react-native";
import { auth } from "./FirebaseConfig";
import { signOut } from "firebase/auth";

// Define the ProfileScreen component
const ProfileScreen = ({ navigation }) => {
  // State for user information
  const [user, setUser] = useState({
    name: "John Doe",
    level: "Advanced",
    profilePicture: require("./ImagesToDoList/userProfilePic.jpg"),
    achievements: [
      "Completed 100 tasks",
      "Reached level 10",
      "Joined for 1 year",
    ],
    rewards: [
      "Gold badge",
      "Exclusive meditation guide",
      "50% discount voucher",
    ],
  });

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  // Function to handle sharing
  const handleShare = () => {
    Share.share({
      message: "Check out my meditation progress on the Mindfulness app!",
    });
  };

  // This is a placeholder for any profile editing functionality you might add
  const editProfile = () => {
    console.log("Edit Profile clicked");
    // Implement navigation to profile editing screen or inline editing
  };

  // Mock data for progress
  const progress = 0.7; // 70% progress
  const summary = "You've completed 70% of your tasks this week."; // Summary text

  // Render the component
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("./ImagesToDoList/background.jpg")}
        style={styles.backgroundImage}
      />
      {/* Profile Picture */}
      <Image source={user.profilePicture} style={styles.profilePicture} />
      {/* User Name */}
      <Text style={styles.userName}>{user.name}</Text>
      {/* User Level */}
      <Text style={styles.userLevel}>{user.level}</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={editProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Share Button */}
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share</Text>
      </TouchableOpacity>

      {/* Progress Section */}
      <View style={styles.progressSection}>
        {/* Progress Title */}
        <Text style={styles.progressTitle}>Progress</Text>
        {/* Progress Bar */}
        {Platform.OS === "ios" ? (
          <ProgressViewIOS
            style={styles.progressBar}
            progress={progress}
            progressTintColor="#19A190"
          />
        ) : (
          <ProgressBarAndroid
            style={styles.progressBar}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={progress}
            color="#19A190"
          />
        )}
        {/* Progress Summary */}
        <Text style={styles.progressSummary}>{summary}</Text>
      </View>

      {/* Achievements Section */}
      <View style={styles.achievementsSection}>
        {/* Achievements Title */}
        <Text style={styles.sectionTitle}>Achievements</Text>
        {/* Achievements List */}
        {user.achievements.map((achievement, index) => (
          <Text key={index} style={styles.achievement}>
            {achievement}
          </Text>
        ))}
      </View>

      {/* Rewards Section */}
      <View style={styles.rewardsSection}>
        {/* Rewards Title */}
        <Text style={styles.sectionTitle}>Rewards</Text>
        {/* Rewards List */}
        {user.rewards.map((reward, index) => (
          <Text key={index} style={styles.reward}>
            {reward}
          </Text>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Menu Section */}
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

// Styles for the ProfileScreen component
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
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes image circular
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#dd8383",
    marginBottom: 5,
  },
  userLevel: {
    fontSize: 18,
    color: "#19A190",
    marginBottom: 20,
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#19A190",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  shareButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
  },
  shareButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  progressSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#dd8383",
    marginBottom: 10,
  },
  progressBar: {
    width: 200,
    marginBottom: 10,
  },
  progressSummary: {
    fontSize: 16,
    color: "#888",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#dd8383",
    marginBottom: 10,
  },
  achievementsSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  achievement: {
    fontSize: 16,
    color: "#19A190",
    marginLeft: 10,
  },
  rewardsSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  reward: {
    fontSize: 16,
    color: "#19A190",
    marginLeft: 10,
  },
  logoutButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#cc4949",
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
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

// Export the ProfileScreen component
export default ProfileScreen;
