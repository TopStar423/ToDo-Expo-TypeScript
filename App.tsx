import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoScreen from './src/screens/TodoScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
