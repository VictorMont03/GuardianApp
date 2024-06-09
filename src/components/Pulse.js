import React, { useEffect } from 'react';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
	useSharedValue,
	useAnimatedProps,
	withRepeat,
	withTiming,
	Easing,
} from 'react-native-reanimated';

const AnimatedSVGCircle = Animated.createAnimatedComponent(Circle);

export function AnimatedPulseCircle({ pulseColor = '#1fadff' }) {
	const pulse = useSharedValue(0);

	const style = useAnimatedProps(() => {
		return {
			r: 50 + pulse.value * 100, // Aumenta o tamanho do pulso inicial e máximo
			opacity: 1 - pulse.value,
		};
	});

	useEffect(() => {
		pulse.value = withRepeat(
			withTiming(1, { duration: 2000, easing: Easing.linear }), // Diminui a velocidade do pulso
			-1,
			false,
		);
	}, [pulse]);

	return (
		<Svg width={400} height={400}>
			<AnimatedSVGCircle
				cx={200}
				cy={200}
				r={50} // Raio inicial do círculo maior
				stroke={pulseColor} // Usar a cor do pulso passada como prop
				strokeWidth=".5"
				fill={pulseColor} // Usar a cor do pulso passada como prop
				animatedProps={style}
			/>
		</Svg>
	);
}
