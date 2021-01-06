import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

const Inicio = () => {
    return (
        <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('../Image/marypaz.jpg')}
      />
        <Text>Bienvenidos </Text>
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    tinyLogo:{
      width:350,
      height:250
    }
});
  