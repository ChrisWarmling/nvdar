import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SearchBar, CheckBox, Divider } from 'react-native-elements'
import { FAB } from 'react-native-paper';

const ListCategorias: React.FC = () => {

    const { navigate } = useNavigation()

    const CriarCategoria = useCallback(() => {
        navigate('CriarCategoria')
    }, [navigate])

    return (
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <SearchBar containerStyle={styles.input} placeholder='pesquisar categoria...' />
            <ScrollView>
                <View style={styles.list}>
                    <View style={styles.container}>
                        <Text style={styles.categoria}>
                            Abdôminal
          </Text>
                    </View>
                    <Divider style={{ backgroundColor: 'rgba(46,184,46,0.3)', margin: 2 }} />
                </View>
            </ScrollView>
            <FAB style={styles.fab} small icon="plus" color='#2eb82e' onPress={CriarCategoria} />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 24,
        paddingTop: 0
    },
    container: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    exercicio: {
        fontSize: 25,
        color: '#2eb82e'
    },
    categoria: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 15,
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',

    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff'
    },
})
export default ListCategorias;