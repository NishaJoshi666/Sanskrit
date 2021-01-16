import * as React from 'react';
import { ScrollView,Text,View,StyleSheet} from 'react-native';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
<DataTable>
<ScrollView>

    <View style={{justifyContent:'center',backgroundColor:'blue'}}>
    <Text style={{fontSize:25,justifyContent:'center',marginLeft:65,color:'#fff'}}>GENERAL INTRO-5</Text>
    </View>
    
    <Text style={styles.text}>1 o'clock : Ekavaadanm - एकवादनम्।</Text>
    
    <Text style={styles.text}>2 o'clock : Divivaadanm - द्ववादनम्।</Text>
    
    <Text style={styles.text}>3 o'clock : Trivaadanm - त्रिवादनम्।</Text>
    
    <Text style={styles.text}>4 o'clock : Chaturvaadanm - चतुर्वादनम्।</Text>
    
    <Text style={styles.text}>5 o'clock : Panchavaadanm - पञ्चवादनम्।</Text>
    
    <Text style={styles.text}>6 o'clock : Shadvaadanm - षड्वादनम्।</Text>
    
    <Text style={styles.text}>7 o'clock : Saptavaadanm - सप्तवादनम्।</Text>
    
    <Text style={styles.text}>8 o'clock : Ashtavaadanm - अष्टवादनम्।</Text>
    
    <Text style={styles.text}>9 o'clock : Navavaadanm -  नववादनम्।</Text>
    
    <Text style={styles.text}>10 o'clock : Dashavaadanm -  दशवादनम्।</Text>
    
    <Text style={styles.text}>11 o'clock : Ekaadashavaadanm - एकादशवादनम्।</Text>
    
    <Text style={styles.text}>12 o'clock : Dvadashavaadanm - द्वादशवादनम्।</Text>

    <Text> </Text>
    
    <Text style={styles.text}>For quarter past five - sapaada Pancha vaadanm.सपाद पञ्चवादनम्।</Text>

    <Text> </Text>
    
    <Text style={styles.text}>Half past eleventhat - saardha Ekaadasha vaadanm.सार्ध एकादशवादनम्।</Text>
    
    <Text> </Text>

    <Text style={styles.text}>Quarter to twelve - paada oona(or paadona) dvaadanm. पदोन द्वादशवादनम्।</Text>

    <Text> </Text>
    
    <Text style={styles.text}>Five minutes past two o'clock - pancha adhika dvivaadanm.पञ्चाधिक दिवादनम्।</Text>

    <Text> </Text>
    
    <Text style={styles.text}>Five minutes to Six - Pancha oona Shadvaadanm.पञ्च ऊन षड्वादनम्।</Text>

    <Text> </Text>

    <Text style={styles.text}>oona means missing,adhika is in addition,paada is a quarter and saardha means a half. </Text>


</ScrollView>
  </DataTable>
);

const styles = StyleSheet.create({
 text:{
   fontSize:15,
 },
  
});
 

export default MyComponent;