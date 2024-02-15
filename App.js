import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CheckBox from './components/CheckBox'

const App = () => {

  const [colorsChecked, setColorsChecked] = useState({
    Red: false,
    Green: false,
    Blue: false,
    Yellow: false,
  })

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favourite Colors</Text>
      {Object.entries(colorsChecked).map(([color, value]) => {
        return (
          <CheckBox label={color} key={color} isChecked={value} onChange={() => {

            setColorsChecked({ ...colorsChecked, [color]: !colorsChecked[color] })

          }} />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  heading: {
    fontFamily: 'Poppins Medium',
    fontSize: 16,
  }
})

export default App