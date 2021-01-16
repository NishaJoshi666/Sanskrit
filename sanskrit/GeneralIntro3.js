import * as React from 'react';
import { ScrollView,Text,View } from 'react-native';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
  <DataTable>
  <ScrollView>

  <View style={{justifyContent:'center',backgroundColor:'blue'}}>
    <Text style={{fontSize:25,justifyContent:'center',marginLeft:65,color:'#fff'}}>GENERAL INTRO-3</Text>
    </View>
    
    <DataTable.Header>
      <DataTable.Title>Words</DataTable.Title>
      <DataTable.Title numeric>Meaning</DataTable.Title>
    </DataTable.Header>


    <DataTable.Row>
      <DataTable.Cell>1. माता</DataTable.Cell>
      <DataTable.Cell numeric>Mother</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>2.  पिता</DataTable.Cell>
      <DataTable.Cell numeric>Father</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>3. भ्रता</DataTable.Cell>
      <DataTable.Cell numeric>Brother</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>4. भगिनी</DataTable.Cell>
      <DataTable.Cell numeric>Sister</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>5. पितामहः</DataTable.Cell>
      <DataTable.Cell numeric>Paternal GrandFather</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>6. पितामही</DataTable.Cell>
      <DataTable.Cell numeric>Paternal GrandMother</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>7. मातामहः</DataTable.Cell>
      <DataTable.Cell numeric>Maternal GrandFather</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>8. मातामही</DataTable.Cell>
      <DataTable.Cell numeric>Maternal GrandMother</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>9. पुत्रः</DataTable.Cell>
      <DataTable.Cell numeric>Son</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>10. पुत्री</DataTable.Cell>
      <DataTable.Cell numeric>Daughter</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>11. पौत्रः</DataTable.Cell>
      <DataTable.Cell numeric>GrandSon</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>12. पौत्री</DataTable.Cell>
      <DataTable.Cell numeric>GrandDaughter</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>13. दाहित्रः</DataTable.Cell>
      <DataTable.Cell numeric>GrandSon(Daughter's Son)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>14.  दाहित्री</Text>
      <Text>          GrandDaughter(Daughter's Daughter)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>15. पत्नी</DataTable.Cell>
      <DataTable.Cell numeric>Wife</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>16. पति</DataTable.Cell>
      <DataTable.Cell numeric>Husband</DataTable.Cell>
    </DataTable.Row>


</ScrollView>
  </DataTable>
);

export default MyComponent;