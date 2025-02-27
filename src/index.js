import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // This imports global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Constants for OAuth
const CLIENT_ID = 'KNYBQ_ULuLQh9915gpM4QxHGEerBKzdKVH8wViXvAeo';
const REDIRECT_URI = 'http://localhost:5000/auth/callback';
const CALENDLY_TOKEN_URL = 'https://auth.calendly.com/oauth/token';

async function getUserInfo(accessToken) {
    try {
        const response = await axios.get('https://api.calendly.com/users/me', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user info:', error);
        throw error;
    }
}

async function exchangeCodeForToken(code) {
    try {
        const response = await axios.post(CALENDLY_TOKEN_URL, {
            client_id: CLIENT_ID,
            client_secret: 'deovYuNoR8Izd2xTJZaLpzi7FRMDOcakYVxVwzyEUR8',
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URI
        });
        return response.data; // This contains the access token
    } catch (error) {
        console.error('Failed to exchange code for token:', error);
        throw error;
    }
} 