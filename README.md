# Zhihu Dark Theme Enforcer

Automatically ensures Zhihu pages use the dark theme by appending `?theme=dark`.

How it works:
- Uses Chrome Manifest V3 `declarativeNetRequest` to add or replace the `theme=dark` query param before the request is sent (no flicker).
- Includes a tiny content script fallback that runs at `document_start` to redirect with `?theme=dark` if the param is missing.

## Install (Load Unpacked)
1. Open Google Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" (top right).
3. Click "Load unpacked" and select this folder: `zhihu-dark-theme`.
4. Visit `https://www.zhihu.com/` (and other `*.zhihu.com` pages). The URL will include `?theme=dark`.

## Notes
- If a `theme` query parameter already exists, it is not overridden by the content script. The DNR rule will set `theme=dark` but respects other params. If you prefer to always force `dark`, let me know and I can tweak the behavior.
- This extension targets `main_frame` and `sub_frame` requests for `zhihu.com` and subdomains.

## Uninstall
Remove it from `chrome://extensions/`.