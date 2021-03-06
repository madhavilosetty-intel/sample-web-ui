/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react';
import { NetworkEditor , RpsProvider } from 'ui-toolkit'
import Config from 'app.config'

export class NetworkConfigs extends React.Component {
    render() {
        const data = {
            rpsKey: Config.rpsApiKey
        }
        return(<RpsProvider data={data}>
               <NetworkEditor rpsServer={Config.serviceUrls.rps} />
               </RpsProvider>
        )
    }
}