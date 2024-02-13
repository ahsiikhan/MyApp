import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(!isChecked)}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: isChecked ? '#0AB6AB' : null,
          borderColor: '#0AB6AB',
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isChecked && (
          <Text
            style={{
              fontSize: 15,
              marginBottom: 4,
              color: isChecked ? 'white' : 'gray',
            }}
          >
            ✓
          </Text>
        )}
      </View>
    </TouchableOpacity >
  );
};


export default Checkbox;

