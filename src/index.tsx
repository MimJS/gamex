import React from 'react';
import ReactDOM from 'react-dom/client';
import { VKUIProvider } from './lib/components';
import bride from '@vkontakte/vk-bridge';
import { UseVKBridge } from './lib/configs/config.main';
import { Provider } from 'react-redux';
import { store } from './lib/redux';
import { App } from './App';

if (UseVKBridge) {
    // init vk-bridge
    bride.send('VKWebAppInit');
}

// render app
const rootElement = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
    <Provider store={store}>
        <VKUIProvider>
            <App />
        </VKUIProvider>
    </Provider>,
);
