/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import FlatCards from './component/FlatCards';
import ElevatedCard from './component/ElevatedCard';
import FancyCard from './component/FancyCard';
import ActionCard from './component/ActionCard';
import ContactList from './component/ContactList';



function App(): React.JSX.Element {



  return (
    <SafeAreaView >
         <ScrollView>
<FlatCards />
<ElevatedCard />
<FancyCard/>
<ContactList/>
<ActionCard/>



      </ScrollView>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({

});

export default App;
