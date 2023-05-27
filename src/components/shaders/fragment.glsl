uniform sampler2D uTexture;

uniform vec2 uMouse;
uniform float uProgress;
uniform float uHover;

varying vec2 vUv;
varying vec3 vPosition;


void main () {
    vec2 direction = normalize(vPosition.xy - uMouse.xy);
    float dist = length(vPosition.xy - uMouse.xy);
    float prox = (dist * 0.01) * 0.1;
    vec2 zoomed = mix(vUv, uMouse.xy + vec2(0.5), prox);



    vec3 color = texture2D(uTexture, vUv).rgb;
;

    color.r = texture2D(uTexture, zoomed + vec2(0.01, 0.5) * prox ).r * 1.0;
    color.g = texture2D(uTexture, zoomed + vec2(0.02, 1.0) * prox ).g * 1.0;
    color.b = texture2D(uTexture, zoomed + vec2(0.09, 2.0) * prox ).b * 1.0;



  

    gl_FragColor = vec4(color, 1.0);
}
