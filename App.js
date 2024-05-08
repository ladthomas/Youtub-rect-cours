import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Modal, SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import VideoCard from './components/VideoCard';
import NavigationBar from './components/NavigationBar';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import VideoList from './components/VideoList';  

const queryClient = new QueryClient();

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const videoData = [
    { title: 'Premier Titre', channel: 'Chaîne A', thumbnailUri: 'https://picsum.photos/200/300?random=1' },
    { title: 'Deuxième Titre', channel: 'Chaîne B', thumbnailUri: 'https://picsum.photos/200/300?random=2' },
    { title: 'Troisième Titre', channel: 'Chaîne C', thumbnailUri: 'https://picsum.photos/200/300?random=3' },
    { title: 'Quatrième Titre', channel: 'Chaîne D', thumbnailUri: 'https://picsum.photos/200/300?random=4' },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.content}>
          {videoData.map((video, index) => (
            <VideoCard key={index} title={video.title} channel={video.channel} thumbnailUri={video.thumbnailUri} />
          ))}
          {/* Nouveau composant pour afficher les vidéos via react-query */}
          <VideoList />
        </ScrollView>
        <NavigationBar onHomePress={() => setShowLogin(true)} onSignUpPress={() => setShowSignUp(true)} />
        <Modal visible={showLogin} animationType="slide" onRequestClose={() => setShowLogin(false)} transparent={true}>
          <View style={styles.modalView}>
            <LoginForm onLogin={() => setShowLogin(false)} />
          </View>
        </Modal>
        <Modal visible={showSignUp} animationType="slide" onRequestClose={() => setShowSignUp(false)} transparent={true}>
          <View style={styles.modalView}>
            <SignUpForm onSignUp={() => setShowSignUp(false)} />
          </View>
        </Modal>
      </SafeAreaView>
    </QueryClientProvider>
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
