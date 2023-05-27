#define PI 3.1415926535897932384626433832795

uniform float uTime;
uniform float uProgress;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vPosition;

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}


void main () {
    vec3 pos = position;
    float velocity = 0.2;
    vec2 wave = vec2(sin(uv.y * PI + uTime) * velocity, cos(uv.x * PI + uTime) * velocity);
   
    pos = mix(pos, pos + vec3(wave, 0.0), uProgress) ;


    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

    vUv = uv;
    vPosition = position;

}