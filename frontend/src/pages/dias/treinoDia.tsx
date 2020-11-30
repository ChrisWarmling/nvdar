import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import { Container } from './styles';

const TreinoDia: React.FC = () => {

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
                <View>
                    <Text style={styles.title}>Segunda-Feira
            </Text>
                </View>
                <View style={{ right: 10, top: 10 }}>
                    <FontAwesome5 name="pen" color={'#fff'} size={25} onPress={habilitarEditar}/>
                </View>
            </View>

            <View style={styles.list}>
                <View style={styles.container}>
                    <View >
                        <Text style={styles.series}>3 Séries</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={styles.categoria}>
                            Abdôminal
                        </Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={styles.categoria}>10 rep.</Text>
                            <TouchableOpacity disabled={!editar}>
                            <FontAwesome5 name="trash-alt" color={editar ? '#EA2027' : '#8c8c8c'} size={22} style={{ marginLeft: 15 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 70,
                            paddingRight: 70,
                            marginTop: 25
                        }}>
                        <TouchableOpacity disabled={!editar}>
                        <FontAwesome5 name="plus" color={editar ? '#2eb82e' : '#8c8c8c'} size={22} style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                        <TouchableOpacity disabled={!editar}>
                        <FontAwesome5 name="trash-alt" color={editar ? '#EA2027' : '#8c8c8c'} size={22} style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                        </View>
                </View>
                <Divider style={{ backgroundColor: 'rgba(255,255,255,0.3)', margin: 2 }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        marginTop: 5
    },
    list: {
        padding: 24,
        paddingTop: 0,
        marginTop: 5
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
        // marginLeft: 15,
    },
    series: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
    }
})

export default TreinoDia;