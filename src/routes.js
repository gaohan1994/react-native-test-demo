import React from 'react'
import { StackNavigator } from 'react-navigation';
import Home from './App'
import Day1 from './containers/Day1'
import Day2 from './containers/Day2'
import Day3 from './containers/Day3'
import Day4 from './containers/Day4'
import Day5 from './containers/Day5'
import Day6 from './containers/Day6'
import Day7 from './containers/Day7'
import Day8 from './containers/Day8'
import Day9 from './containers/Day9'
import Day10 from './containers/Day10'
import Day11 from './containers/Day11'
import Day13 from './containers/Day13'
import Day14 from './containers/Day14'
import Hmusic from './containers/Hmusic'

const Routes = StackNavigator({
    Home: { screen: Home},
    Day1: { screen: Day1 },
    Day2: { screen: Day2 },
    Day3: { screen: Day3 },
    Day4: { screen: Day4 },
    Day5: { screen: Day5 },
    Day6: { screen: Hmusic },
    Day7: { screen: Day7 },
    Day8: { screen: Day8 },
    Day9: { screen: Day9 },
    Day10: { screen: Day10 },
    Day11: { screen: Day11 },
    Day13: { screen: Day13 },
    Day14: { screen: Day14 },
})

export default Routes;