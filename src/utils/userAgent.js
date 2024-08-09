export function isMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Mobile User Agents
    const mobileRegex = /android|ipad|iphone|ipod|iemobile|windows phone|blackberry|opera mini|mobile/i;

    // Check if the user agent matches any mobile device pattern
    if (mobileRegex.test(userAgent)) {
        return true;
    } else {
        return false;
    }
}