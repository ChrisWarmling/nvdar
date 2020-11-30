import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SearchBar, CheckBox, Divider } from 'react-native-elements'
import { FAB } from 'react-native-paper';

const Exercicios: React.FC = () => {

    const { navigate } = useNavigation()

    const CriarExer = useCallback(() => {
        navigate('CriarExer')
    }, [navigate])

    const EditarExer = useCallback(() => {
        navigate('EditarExer')
    }, [navigate])

    return (
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <SearchBar containerStyle={styles.input} placeholder='pesquisar exercicio...' />
            <CheckBox containerStyle={styles.checkbox} textStyle={styles.checkboxText} checkedColor='#2eb82e' title='buscar por categoria' checked />
            <ScrollView>
                <View style={styles.list}>
                    <TouchableOpacity style={styles.container} onPress={EditarExer}>
                        <Text style={styles.exercicio}>
                            Abdominal completo
              </Text>
                        <Text style={styles.categoria}>
                            Categoria: Abdômen
              </Text>
                    </TouchableOpacity>
                    <Divider style={{ backgroundColor: '#ff751a', margin: 2 }} />
                </View>
            </ScrollView>
            <FAB style={styles.fab} small icon="plus" color='#2eb82e' onPress={CriarExer} />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        padding: 24,
        paddingTop: 0
    },
    container: {
        // backgroundColor: '#625c70',
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
    checkbox: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    checkboxText: {
        color: 'white'
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

export default Exercicios;