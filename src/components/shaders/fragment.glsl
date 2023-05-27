uniform sampler2D uTexture;

uniform vec2 uMouse;
uniform float uProgress;
uniform float uHover;

varying vec2 vUv;
varying vec3 vPosition;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main () {
    vec2 displaceUv = vUv;

    vec2 direction = normalize(vPosition.xy - uMouse.xy);
    float dist = length(vPosition.xy - uMouse.xy);
    float prox = (dist * 0.01) * 0.1;
    vec2 zoomed = mix(vUv, uMouse.xy + vec2(0.5), prox);



    vec3 color = texture2D(uTexture, vUv).rgb;
;

    color.r = texture2D(uTexture, zoomed + vec2(0.01, 0.1) * prox ).r;
    color.g = texture2D(uTexture, zoomed + vec2(0.02, 0.2) * prox ).g;
    color.b = texture2D(uTexture, zoomed + vec2(0.09, 0.3) * prox ).b;



  

    gl_FragColor = vec4(color, 1.0);
}
