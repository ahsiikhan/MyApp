import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

const Header = ({ searchMode, setSearchMode }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FB716E', elevation: 1, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, height: 75, marginBottom: 5, paddingHorizontal: 25, flexDirection: 'row' }}>
            <Image style={{ alignSelf: 'center', width: 130, resizeMode: 'contain' }} source={require('../assets/logo_white.png')} />
            <Pressable onPress={() => { setSearchMode(!searchMode) }} style={{ position: 'absolute', right: 30 }}>
                <Image style={{ width: 27, height: 27 }} source={require('../assets/search_icon.png')} />
            </Pressable>
        </View>
    );
};

export default Header;
