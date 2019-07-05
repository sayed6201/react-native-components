/**
 * @format
 */

//import library to help create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'

//importing my header component
import Header from './src/components/header'

//importing my AlbumList component
import AlbumList from './src/components/AlbumList'


//create a component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Russel IPM'} />
		<AlbumList/>
	</View>
	
);


//render it to the device
AppRegistry.registerComponent('myproject', () => App);
