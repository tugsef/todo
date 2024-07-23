import React, { PropsWithChildren } from 'react'
import { View } from 'react-native'

function Marker({color}:{color:string}) {
  return (
    <View style={{backgroundColor:`${color}`,width:15,height:15,borderRadius:17/2}}/>


  )
}

export default Marker