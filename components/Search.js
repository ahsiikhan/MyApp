import React from 'react';
import { View, TextInput, StyleSheet, Pressable, Image } from 'react-native';

const Search = (props) => {
    return (
        <View style={styles.searchBar}>
            <TextInput
                value={props.searchText}
                onChangeText={(text) => props.setSearchText(text)}
                style={styles.searchInput}
                placeholder="Search"
            />
            <Pressable disabled={!props.searchText} onPress={() => props.setSearchText('')} style={{ position: 'absolute', right: 15, }}>
                <Image style={{ height: 22, width: 22, tintColor: props.searchText ? '#FB716E' : '#fff' }} source={require('../assets/multiply.png')} />
            </Pressable>


        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center',
    },
    searchInput: {
        borderColor: '#e1e1e1',
        borderRadius: 30,
        borderWidth: 1,
        paddingLeft: 25,
        paddingRight: 50,
        flex: 1,
        fontFamily: 'Poppins Regular',
        fontSize: 14,
    },
})

export default Search;
