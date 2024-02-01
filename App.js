import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const app = () => {
  return(
    <View style={styles.container}> 
      <Text style={styles.titulo} >Hola mundo</Text>
      <Text style={styles.parrafo}>Soy Jorge Jasiel Salmeron Vega</Text>
      <Text style={styles.parrafo2}>!Esta es mi primera APP¡</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#FFFFFF",
    fontFamilY: 'Arial',
  },  
  parrafo: {
    fontSize: 30,
    fontWeight: '200',
    color: "green",
  },
  parrafo2: {
    fontSize: 30,
    fontWeight: '200',
    color: "red",
  },
});

export default app;