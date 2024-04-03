import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Modal, SafeAreaView, Button } from 'react-native';
import Header from './components/Header';
import VideoCard from './components/VideoCard';
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm'; 

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Les données de vos vidéos
  const videoData = [
    {
      title: 'Premier Titre',
      channel: 'Chaîne A',
      thumbnailUri: 'url_pour_première_image',
    },
    {
      title: 'Deuxième Titre',
      channel: 'Chaîne B',
      thumbnailUri: 'url_pour_deuxième_image',
    },
    {
      title: 'Troisième Titre',
      channel: 'Chaîne C',
      thumbnailUri: 'url_pour_troisième_image',
    },
    {
      title: 'Quatrième Titre',
      channel: 'Chaîne D',
      thumbnailUri: 'url_pour_quatrième_image',
    },
  ];

  const handleLogin = (username, password) => {
   
    setShowLogin(false);
  };

  const handleSignUp = (username, email, password) => {
 
    setShowSignUp(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        {videoData.map((video, index) => (
          <VideoCard
            key={index}
            title={video.title}
            channel={video.channel}
            thumbnailUri={video.thumbnailUri}
          />
        ))}
      </ScrollView>
      <NavigationBar onHomePress={() => setShowLogin(true)} onSignUpPress={() => setShowSignUp(true)} />
      <Modal visible={showLogin} animationType="slide" onRequestClose={() => setShowLogin(false)} transparent={true}>
        <View style={styles.modalView}>
          <LoginForm onLogin={handleLogin} />
        </View>
      </Modal>
      <Modal visible={showSignUp} animationType="slide" onRequestClose={() => setShowSignUp(false)} transparent={true}>
        <View style={styles.modalView}>
          <SignUpForm onSignUp={handleSignUp} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

});
