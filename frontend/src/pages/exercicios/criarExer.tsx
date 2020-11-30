import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CriarExer: React.FC = () => {

    const [escolherCategoria, setCategoria] = useState([] as any)

    const { goBack } = useNavigation()
    const navigateBack = useCallback(() => {
        goBack()
    }, [goBack])

    return (
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <View style={styles.container}>
                <Picker
                    selectedValue={escolherCategoria}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}>
                    <Picker.Item label="Selecione a categoria" value="" />
                </Picker>
                {console.log(escolherCategoria)}
                <TextInput style={styles.input} placeholder='Insira um nome para o exrecicio' placeholderTextColor='#fff' />
                <TextInput style={styles.input} placeholder='Insira a primeira regressão' placeholderTextColor='#fff' />
                <TextInput style={styles.input} placeholder='Insira a segunda regressão' placeholderTextColor='#fff' />
                <TextInput style={styles.input} placeholder='Insira a primeira progressão' placeholderTextColor='#fff' />
                <TextInput style={styles.input} placeholder='Insira a segunda progressão' placeholderTextColor='#fff' />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Criar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBack} onPress={navigateBack}>
                    <FontAwesome5 name="arrow-left" color={'#fff'} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312e38',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: '85%',
        padding: 5,
        paddingLeft: 10,
        fontSize: 18,
        color: 'white',
        margin: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        textAlign: 'center',
        marginBottom: 15
    },
    button: {
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#2eb82e',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
    },
    buttonBack: {
        width: '20%',
        alignItems: 'center',
        backgroundColor: '#ff751a',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 20,
    },
})

export default CriarExer;