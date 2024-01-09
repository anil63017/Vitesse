function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function getExpiry(userAccessToken) {
    try {
        const { exp } = parseJwt(userAccessToken);
        return Math.abs(Date.now() - (exp * 1000));
    } catch {
        return 0
    }
}

export { parseJwt, getExpiry };