import React, { useContext } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ThemeContext } from '../context/ThemeContext'
import { Styles } from './styles/GlobalStyles'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Buttons = ({ title, onPress, isBlue, isGray }) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity style={isBlue ? Styles.btnBlue : isGray ? Styles.btnGray : theme === 'light' ? Styles.btnLight : Styles.btnDark} onPress={onPress} >
      {
        title === 'backspace' ?
          <MaterialCommunityIcons name="backspace-outline" size={35} /> :
          <Text style={isBlue || isGray ? Styles.smallTextLight : theme === 'dark' ? Styles.smallTextLight : Styles.smallTextDark}>
            {title}
          </Text>
      }
    </TouchableOpacity>
  )
}

export default Buttons