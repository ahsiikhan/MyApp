import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CheckBox = ({ isChecked, onChange, label }) => {
    return (
        <TouchableOpacity onPress={() => { onChange(!isChecked) }} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }}>
            <View
                style={{
                    width: 24,
                    height: 24,
                    backgroundColor: isChecked ? '#0AB6AB' : '#fff',
                    borderColor: '#0AB6AB',
                    borderWidth: 1,
                    borderRadius: 2,
                    marginRight: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {isChecked ? (<Text style={{ fontSize: 15, color: 'white', marginBottom: 4, }}>✔</Text>) : null}

            </View>
            <Text style={{ fontFamily: 'Poppins Regular', fontSize: 14, }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CheckBox