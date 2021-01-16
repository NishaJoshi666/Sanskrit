import * as React from 'react';
import { ScrollView,Text,View } from 'react-native';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
<DataTable>
<ScrollView>

  <View style={{justifyContent:'center',backgroundColor:'blue'}}>
    <Text style={{fontSize:25,justifyContent:'center',marginLeft:65,color:'#fff'}}>GENERAL INTRO-2</Text>
    </View>
    
    
    <DataTable.Header>
      <DataTable.Title>Words</DataTable.Title>
      <DataTable.Title numeric>Meaning</DataTable.Title>
    </DataTable.Header>


    <DataTable.Row>
      <DataTable.Cell>हरीः ऊँ</DataTable.Cell>
      <DataTable.Cell numeric>रामराम(Hello)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>नमस्कारः</DataTable.Cell>
      <DataTable.Cell numeric>नमस्कार(Hi,Hello)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>सुप्रभातंः</Text>
      <DataTable.Cell numeric>सुप्रभात(Good Morning)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>पुनर्मिलामः</DataTable.Cell>
      <DataTable.Cell numeric>फिर मिलेंगे(See You)</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>शुभरात्रिः</DataTable.Cell>
      <DataTable.Cell numeric>शुभरात्रि(Good Night)</DataTable.Cell>
    </DataTable.Row>

    
    <DataTable.Row>
      <DataTable.Cell>श्रीमान्</DataTable.Cell>
      <DataTable.Cell numeric>श्रीमान्(Mr)</DataTable.Cell>
    </DataTable.Row>

    
    <DataTable.Row>
      <DataTable.Cell>क्षम्यतां</DataTable.Cell>
      <DataTable.Cell numeric>क्षमा कीजिये(Pardon)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>चिन्ता मास्तु</DataTable.Cell>
      <DataTable.Cell numeric>चिंता नही(Don't Worry)</DataTable.Cell>
    </DataTable.Row>


     <DataTable.Row>
      <DataTable.Cell>धन्यवाद</DataTable.Cell>
      <DataTable.Cell numeric>आभार(Thanks)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>स्वागतं</DataTable.Cell>
      <DataTable.Cell numeric>स्वागत हो(Wellcome)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>उत्तमं</DataTable.Cell>
      <DataTable.Cell numeric>उत्तम(Nice/Great)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>आगच्छतु</DataTable.Cell>
      <DataTable.Cell numeric>आइये(Come)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>उपविशतु</DataTable.Cell>
      <DataTable.Cell numeric>बैठीये(Sit)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>अपि कुशलम्?</Text>
      <DataTable.Cell numeric>सब कुशल है?(Everyone fine?)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>सर्वं कुशलम्</Text>
      <DataTable.Cell numeric>सब कुशल है(Everyone fine)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>कः विशेषः?</Text>
      <DataTable.Cell numeric>क्या विशेष?(Something special)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>कथयतु</DataTable.Cell>
      <DataTable.Cell numeric>कहिये(Tell)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>चिरात् आगमनम्</Text>
      <Text>           बहोत दिनों बाद आये(Come after long time)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>पुनः आगच्छतु</Text>
      <Text>               फिर आना(Come again)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>अस्तु,नमस्कारः</Text>
      <Text>      ठीक है,नमस्कार(Ok,Namaskar)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>जानामि भोः!</DataTable.Cell>
      <DataTable.Cell numeric>पता है रे!(I know that!)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>मा विस्मरतु</Text>
      <Text>           भूलना मत(Don't forget)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>कथम् अस्ति?</DataTable.Cell>
      <DataTable.Cell numeric>कैसे हो?(How are you)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>सर्वथा मासतु</DataTable.Cell>
      <DataTable.Cell numeric>बिलकुल नहीं(Nowise)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>भवतु</DataTable.Cell>
      <DataTable.Cell numeric>ठीक है(Ok)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>तथापि</DataTable.Cell>
      <DataTable.Cell numeric>फिर भी(Still)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>स्मरति खलु?</Text>
      <Text>            ध्यान में है ना?(Better to be silent)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>यथेष्टम् अस्ति</Text>
      <Text>            भरफुर है(There is enough)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>भितिः मास्तु</Text>
      <Text>            घबराइए मत(Don't panic)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>अग्रे गचछतु</DataTable.Cell>
      <DataTable.Cell numeric>आगे जाइए(Go ahead)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>समाप्तम्</DataTable.Cell>
      <DataTable.Cell numeric>समाप्त(End)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>तदन्नतरं</DataTable.Cell>
      <DataTable.Cell numeric>बाद मेंं(After that/this)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>भवति कुतः आगच्छति?</Text>
      <Text>            आप कहा से आ रहे हो?(Where are you coming from?)</Text>
    </DataTable.Row>

    <DataTable.Row>
      <Text>अहं विद्यालयतः आगच्छमि</Text>
      <Text>           मैं विद्यालय से आ रहा हु(I am coming from school)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>भवान् कुत्र गचछति?</Text>
      <Text>           आप कहा जा रहे हो?(Where are you going?)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>अहं गृहं गच्छामि</Text>
      <Text>           मैं घर जा रहा हु(I am going home)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>अध्ययनं कथम् प्रचलति?</Text>
      <Text>           पढाई कैसे चल रही हैै?(How is study going?)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>सम्यक् प्रचलति</Text>
      <Text>           अच्छी चल रही है(Going well)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>कार्य कथम् प्रचलति?</Text>
      <Text>           काम कैसे चल रहा है?(How is work going?)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>यथापूर्वं</Text>
      <Text>           हमेशा की तरह(Same as always)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>मुखम् क्षालितम् किम्?</Text>
      <Text>           मुह धोया क्या?(Do you washed face?)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <Text>मुखम् क्षालितम्,दुग्धं ददातु</Text>
      <Text>           मुह धोलिया,दुध देना(Washed face,give me milk)</Text>
    </DataTable.Row>


    <DataTable.Row>
      <DataTable.Cell>अस्तु,स्विकरोतु</DataTable.Cell>
      <DataTable.Cell numeric>ठीक है, लो(Ok, take it)</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Row>
      <Text>दुग्धं पीत्वा पठामि</Text>
      <Text>          दुध पीकर पढाई करता हु(After taking milk,I will stydy)</Text>
    </DataTable.Row>


</ScrollView>
  </DataTable>
);

export default MyComponent;