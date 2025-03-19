const UA = window.navigator.userAgent;

/**
 * @description Check if the client is the mobile terminal
 */
export function isMobile() {
    return /Android|iPhone|webOS|BlackBerry|SymbianOS|Windows Phone|iPad|iPod/i.test(
        UA,
    );
}

/**
 * @description Check whether the client is iOS
 */
export function isIOS() {
    return !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
 * @description Check if the client is Safari browser
 */
export function isSafari() {
    return /^(?:(?!chrome|android).)*safari/i.test(UA);
}

/**
 * @description Check whether the client is Android
 */
export function isAndroid() {
    return UA.includes('Android') || UA.includes('Adr');
}

/**
 * @description Check whether it is the WeChat WebView environment
 */
export function isWeiXin() {
    return /MicroMessenger/i.test(UA);
}

/**
 * @description Check whether it is a webkit kernel browser
 */
export function isWebkitBrowser(): boolean {
    return /webkit/i.test(UA);
}

/**
 * Determine whether it is Windows system
 */
export function isWindows() {
    return /windows|win32|win64/i.test(UA);
}
