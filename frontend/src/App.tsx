import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'
// import { Header, HeaderTitle } from './styles';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle='light-content' backgroundColor='#25222a' />
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Nvdar
                </Text>
            </View>
            <Routes />
        </View>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    header: {
        padding: 15,
        backgroundColor: '#25222a',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2eb82e'
    }
})

export default App;