import { View, Text, TextInput } from 'react'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Searchbar() {
    const [searchInput, setSearchInput] = useState();
    return (
        <View style={styles.container1}>
            <View style={styles.container}>
                <Ionicons name="search-outline" size={24} color={Colors.Primary} />
                <TextInput placeholder='Search' onChangeText={(value) => setSearchInput(value)} onSubmitEditing={() => setSearchText(value)} />
            </View>
        </View>
    );
}

const styles = Stylesheet.create({
    container1: {
        marginTop: 15,
    },
    container: {
        color: Colors.back,
        backgroundColor: Colors.white,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 8,
        bordercolor: Colors.grey,
    },
})