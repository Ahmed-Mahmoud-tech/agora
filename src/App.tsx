import React, { useState } from 'react'
import AgoraUIKit, { PropsInterface } from 'agora-react-uikit'

const App: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true)
  const props: PropsInterface = {
    rtcProps: {
      appId: '497ed68ff5174b968bd13b211ac7295a',
      channel: 'test',
      token: null, // pass in channel token if the app is in secure mode
    },
    callbacks: {
      EndCall: () => setVideocall(false)
    }
  }

   return (
    <div style={styles.container}>
      {videocall ? (
        <AgoraUIKit
          rtcProps={props.rtcProps}
          callbacks={props.callbacks} />
      ) : (
        null
      )}
    </div>
  )
}

const styles = {
  container: { width: '100vw', height: '100vh', display: 'flex', flex: 1},
}

export default App