import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';

const ListTreinos: React.FC = () => {

  const {navigate} = useNavigation()
  
  const irAoTreino = useCallback(() => {
    navigate('TreinoDia')
  }, [navigate])

  const CriarTreino = useCallback(() => {
    navigate('CriarTreino')
  }, [navigate])

  return (
    <View style={{flex:1, backgroundColor:'#312e38'}}>
    <ScrollView>
      <View style={styles.list}>
        <TouchableOpacity style={styles.container} onPress={irAoTreino}>
          <Text style={styles.semana}>
            Segunda-feira
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <FAB style={styles.fab} small icon="plus" color='#2eb82e' onPress={CriarTreino}/>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 24,
  },
  container: {
    backgroundColor: '#625c70',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  semana: {
    fontSize: 30,
    color: '#2eb82e'
  },
  dia: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 15

  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff'
  },
})

export default ListTreinos;