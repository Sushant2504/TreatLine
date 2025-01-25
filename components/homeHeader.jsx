import { View, Text, TextInput } from 'react'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


const Header = () => {
    const { isLoaded, isSignIn, user } = useUser();
    if (!isLoaded || !isSignIn) {
        return null
    }
    <View>
        <View>
            
                <Image source={{ uri: user.imageUrl }} style={styles.img} />
             <View>
             <Text>Hello, 👋</Text>
            <Text> {user.fullName} </Text>
            </View>
        </View>
    </View>
}

const styles = Stylesheet({
    img: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },

    text: {
         fontSize: 18,
         fontWeight: bold,

    },

    container: {
         display: 'flex',
         flexDirection: 'row',
         gap: 7,
         alignItems: 'center',
    }
})

export default Header;