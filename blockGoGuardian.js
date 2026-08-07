document.addEventListener('DOMContentLoaded', function() {
    // Block redirections
    const blockedUrls = [
        'https://blocked.goguardian.com/x3/block.html',
        'blocked.goguardian.com'
    ];

    window.addEventListener('beforeunload', function(event) {
        const currentUrl = window.location.href;
        if (blockedUrls.some(url => currentUrl.includes(url))) {
            event.preventDefault();
            event.returnValue = '';
            window.history.pushState({}, '', window.location.href);
        }
    });

    // Prevent GoGuardian from reading HTML content
    const obfuscatedContent = document.body.innerHTML;
    document.body.innerHTML = '';
    const obfuscatedDiv = document.createElement('div');
    obfuscatedDiv.style.display = 'none';
    obfuscatedDiv.innerHTML = obfuscatedContent;
    document.body.appendChild(obfuscatedDiv);

    // Obfuscate the content further
    function obfuscateString(str) {
        return str.split('').map(char => {
            const randomChar = String.fromCharCode(Math.floor(Math.random() * 256));
            return randomChar + char;
        }).join('');
    }

    const obfuscatedContent2 = obfuscateString(obfuscatedContent);
    const obfuscatedDiv2 = document.createElement('div');
    obfuscatedDiv2.style.display = 'none';
    obfuscatedDiv2.innerHTML = obfuscatedContent2;
    document.body.appendChild(obfuscatedDiv2);

    // Allow all necessary resources for the embedded website
    const iframe = document.getElementById('embeddedWebsite');
    iframe.allow = 'autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera; microphone; geolocation; payment; usb; vr; xr-spatial-tracking; accelerometer; ambient-light-sensor; battery; bluetooth; display-capture; gamepad; hid; idle-detection; magnetometer; midi; motion-sensors; nfc; serial; speaker-selection; usb-audio; webauthn; window-placement;';
});
