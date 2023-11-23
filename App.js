import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './context/ThemeContext';
import MyKeyboard from './components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  const changeTheme = () => {
    let newTheme = '';
    if (theme === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = 'light';
    }
    setTheme(newTheme);
  }
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ?
        styles.container
        : [styles.container,
        { backgroundColor: '#000000' }
        ]}>
        <StatusBar style="auto" />
        <Switch
          value={theme === 'light'}
          onValueChange={changeTheme}
          style={styles.switch}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switch: {
    marginTop: 30
  }
});
