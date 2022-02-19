export const authEP = "https://accounts.spotify.com/authorize";
const redirecturi = "http://localhost:3000";
const clientId = "50194953f7b449ea90b89d9a09cf9c11";

var scopes = [
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-top-read',
    'user-read-email'
];

export const getUrlToken = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    },{})
}

export const loginUrl = `${authEP}?client_id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;