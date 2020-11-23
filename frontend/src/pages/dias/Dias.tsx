import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/src/styles/colors';

// import { Container } from './styles';

const Dias: React.FC = () => {
  return (
    <View style={{flex:1, backgroundColor:'#312e38'}}>
    <ScrollView>
      <View style={styles.list}>
        <View style={styles.container}>
          <Text style={styles.semana}>
            Segunda-feira
          </Text>
          <Text style={styles.dia}>
            23 de novembro
          </Text>
        </View>
      </View>
    </ScrollView>
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
    fontSize: 25,
    color: '#2eb82e'
  },
  dia: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 15

  }
})

export default Dias;