import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {SearchBar, CheckBox, Divider} from 'react-native-elements'

// import { Container } from './styles';

const Exercicios: React.FC = () => {
    return (
        <View style={{flex:1, backgroundColor:'#312e38'}}>
            <SearchBar containerStyle={styles.input} placeholder='pesquisar exercicio...'/>
            <CheckBox containerStyle={styles.checkbox} textStyle={styles.checkboxText} checkedColor='#2eb82e' title='buscar por categoria' checked />
        <ScrollView>
          <View style={styles.list}>
            <View style={styles.container}>
              <Text style={styles.exercicio}>
                Abdominal completo
              </Text>
              <Text style={styles.categoria}>
                Categoria: Abdômen
              </Text>
            </View>
            <Divider style={{ backgroundColor: '#ff751a', margin:2}}/>
          </View>
        </ScrollView>
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
          color:'white'
      },
      input: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        
      }
    })

export default Exercicios;