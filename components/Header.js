import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title }) => {

    return (
        <View style={{ alignItems: 'center', backgroundColor: '#FB716E', elevation: 1, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, height: 75, marginBottom: 5, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontFamily: 'Poppins SemiBold', fontSize: 19.5, letterSpacing: .4, color: '#fff' }}>{title}</Text>
        </View >
    );
};

export default Header;
