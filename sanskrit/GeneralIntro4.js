import * as React from 'react';
import { ScrollView,Text,View } from 'react-native';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
  <DataTable>
  <ScrollView>

  <View style={{justifyContent:'center',backgroundColor:'blue'}}>
    <Text style={{fontSize:25,justifyContent:'center',marginLeft:65,color:'#fff'}}>GENERAL INTRO-4</Text>
    </View>
    
    <DataTable.Header>
      <DataTable.Title>Words</DataTable.Title>
      <DataTable.Title numeric>Meaning</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>1.One</DataTable.Cell>
      <DataTable.Cell numeric>एकम्(ekam)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>2.Two</DataTable.Cell>
      <DataTable.Cell numeric>द्वे(dev)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>3.Three</DataTable.Cell>
      <DataTable.Cell numeric>त्रिणि(treeni)</DataTable.Cell>
    </DataTable.Row>

     <DataTable.Row>
      <DataTable.Cell>4.Four</DataTable.Cell>
      <DataTable.Cell numeric>चत्वारि(chatvaari)</DataTable.Cell>
    </DataTable.Row>

     <DataTable.Row>
      <DataTable.Cell>5.Five</DataTable.Cell>
      <DataTable.Cell numeric>पञ्च(pancha)</DataTable.Cell>
    </DataTable.Row>

     <DataTable.Row>
      <DataTable.Cell>6.Six</DataTable.Cell>
      <DataTable.Cell numeric>षट्(shat)</DataTable.Cell>
    </DataTable.Row>

     <DataTable.Row>
      <DataTable.Cell>7.Seven</DataTable.Cell>
      <DataTable.Cell numeric>सप्त(sapta)</DataTable.Cell>
    </DataTable.Row>

     <DataTable.Row>
      <DataTable.Cell>8.Eight</DataTable.Cell>
      <DataTable.Cell numeric>अष्ठ(ashta)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>9.Nine</DataTable.Cell>
      <DataTable.Cell numeric>नव(nava)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>10.Ten</DataTable.Cell>
      <DataTable.Cell numeric>दश(dasha)</DataTable.Cell>
    </DataTable.Row> 

    <DataTable.Row>
      <DataTable.Cell>11.Elelven</DataTable.Cell>
      <DataTable.Cell numeric>एकादश(ekaadasha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>12.Twelve</DataTable.Cell>
      <DataTable.Cell numeric>द्वादश(dvaadasha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>13.Thirteen</DataTable.Cell>
      <DataTable.Cell numeric>त्रयोदश(trayodasha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>14.Fourteen</DataTable.Cell>
      <DataTable.Cell numeric>चतुर्दश(chaturdasha)</DataTable.Cell>
    </DataTable.Row>

    
    <DataTable.Row>
      <DataTable.Cell>15.Fifteen</DataTable.Cell>
      <DataTable.Cell numeric>पञ्चदश(panchadasha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>16.Sixteen</DataTable.Cell>
      <DataTable.Cell numeric>षोडश(shodash)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>17.Seventeen</DataTable.Cell>
      <DataTable.Cell numeric>सप्तदश(saptadasha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>18.Eighteen</DataTable.Cell>
      <DataTable.Cell numeric>अष्टादश(ashtaadasha)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>19.Nineteen</DataTable.Cell>
      <DataTable.Cell numeric>नवदश(navadasha)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>20.Twenty</DataTable.Cell>
      <DataTable.Cell numeric>विंशतिः(vimshatihi)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>21.Twenty one</Text>
      <Text>       एकविंशतिः(ekavimshatihi)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>22.Twenty two</Text>
      <Text>        द्वाविंशतिः(dvaavimshathi)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>23.Twenty three</Text>
      <Text>   त्रयोविंशतिः(trayovimshatihi)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>24.Twenty four</Text>
      <Text>   चतुर्विंशतिः(chaturvimshatihi)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>25.Twenty five</Text>
      <Text>  पञ्चविंशतिः(panchavimshatihi)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>26.Twenty six</Text>
      <Text>        षड्विंशतिः(shadvimshatihi)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>27.Twenty seven</Text>
      <Text> सप्तविंशतिः(saptavimshatihi)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>28.Twenty eight</Text>
      <Text>अष्टाविंशतिः(ashtaavimshatihi)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>29.Twenty nine</Text>
      <DataTable.Cell numeric>नवविंशतिः(navavimshatihi)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>30.Thirty</DataTable.Cell>
      <DataTable.Cell numeric>त्रिंशत्(trimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>31.Thirty one</Text>
      <Text>             एकत्रिंशत्(ekatrimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>32.Thirty two</Text>
      <Text>          द्वावात्रिंशत् (dvaatrimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>33.Thirty three</Text>
      <Text>     त्रयस्त्रिंशत् (trayastrimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>34.Thirty four</Text>
      <DataTable.Cell numeric>चतुस्त्रिंशत् (chatustrimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>35.Thirty five</Text>
      <DataTable.Cell numeric>पञ्चत्रिंशत्(panchatrimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>36.Thirty six</Text>
      <DataTable.Cell numeric>षट्त्रिंशत्(shat-trimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>37.Thirty seven</Text>
      <DataTable.Cell numeric>सप्तत्रिंशत्(saptatrimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>38.Thirty eight</Text>
      <DataTable.Cell numeric>अष्टत्रिंशत्(ashtatrimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>39.Thirty nine</Text>
      <DataTable.Cell numeric>नवत्रिंशत्(navatrimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>40.Forty</Text>
      <DataTable.Cell numeric>त्रिचत्वारिंशत्(chatvaarimshat)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <Text>41.Forty one</Text>
      <Text>  एकचत्वारिंशत्(ekachatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>42.Forty two</Text>
      <Text>   द्विचत्वारिंशत्(dvichatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>43.Forty three</Text>
      <Text>   त्रिचत्वारिंशत्(trichatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>44.Forty four</Text>
      <Text>          चतुश्चत्वारिंशत्(chatushchatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>45.Forty five</Text>
      <Text>      पञ्चचत्वारिंशत्(panchachatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>46.Forty six</Text>
      <Text>  षट्चत्वारिंशत्(shatchatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>47.Forty seven       </Text>
      <Text>   सप्तचत्वारिंशत्(saptachatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>48.Forty eight</Text>
      <Text>         अष्टचत्वारिंशत्(ashtachatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>49.Forty nine</Text>
      <Text>  नवचत्वारिंशत्(navachatvaarimshat)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>50.Fifty</Text>
      <DataTable.Cell numeric>तपञ्चाशत्(panchaashat)</DataTable.Cell>
    </DataTable.Row>

</ScrollView>
  </DataTable>
);

export default MyComponent;