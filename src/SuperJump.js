import React from "react";

import { Unity, useUnityContext } from "react-unity-webgl";

function SuperJump() {
  const { unityProvider } = useUnityContext({
    // loaderUrl: "./final/Build/Final.loader.js",
    loaderUrl: "./superjumpBuild/Build/Platformer build file.loader.js",
    // dataUrl: "./final/Build/webgl.data",
    dataUrl: "./superjumpBuild/Build/Platformer build file.data",
    // frameworkUrl: "./final/Build/build.framework.js",
    frameworkUrl: "./superjumpBuild/Build/Platformer build file.framework.js",
    // codeUrl: "./final/Build/build.wasm",
    codeUrl: "./superjumpBuild/Build/Platformer build file.wasm",
  });

  return (
    <div>
      <div className="">
        <Unity
          style={{ height: "100%", width: "100%" }}
          unityProvider={unityProvider}
        />
      </div>
    </div>
  );
}

export default SuperJump;
