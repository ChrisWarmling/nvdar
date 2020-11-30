import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const EditarExer: React.FC = () => {

    const [escolherCategoria, setCategoria] = useState([] as any)
    const [editar, setEditar] = useState(false)

    const { goBack } = useNavigation()
    const navigateBack = useCallback(() => {
        goBack()
    }, [goBack])

    const habilitarEditar = () => {
        setEditar(true)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#312e38' }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View style={{ left: 10, top: 10 }}>
                    <FontAwesome5 name="arrow-left" color={'#fff'} size={25} onPress={navigateBack} />
                </View>
                <View style={{ right: 10, top: 10 }}>
                    <FontAwesome5 name="pen" color={'#fff'} size={25} onPress={habilitarEditar}/>
                </View>
            </View>
            <ScrollView>
            <View style={styles.container}>
                <Picker
                    enabled={editar}
                    selectedValue={escolherCategoria}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}>
                    <Picker.Item label="Selecione a categoria" value="" />
                </Picker>
                <TextInput style={styles.input} placeholder='Insira um nome para o exrecicio' placeholderTextColor='#fff' editable={editar}/>
                <Text style={{color: '#fff', fontSize: 18}}>Primeira regressão:</Text>
                <TextInput style={styles.input} placeholder='Insira a primeira regressão' placeholderTextColor='#fff' editable={editar}/>
                <Text style={{color: '#fff', fontSize: 18}}>Segunda regressão:</Text>
                <TextInput style={styles.input} placeholder='Insira a segunda regressão' placeholderTextColor='#fff' editable={editar}/>
                <Text style={{color: '#fff', fontSize: 18}}>Primeira progressão:</Text>
                <TextInput style={styles.input} placeholder='Insira a primeira progressão' placeholderTextColor='#fff' editable={editar}/>
                <Text style={{color: '#fff', fontSize: 18}}>Segunda progressão:</Text>
                <TextInput style={styles.input} placeholder='Insira a segunda progressão' placeholderTextColor='#fff' editable={editar}/>
                <TouchableOpacity style={[styles.button, {backgroundColor: editar ? '#2eb82e' : '#a6a6a6'}]} disabled={!editar}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312e38',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
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
        width: '40%',
        alignItems: 'center',
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
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

export default EditarExer;