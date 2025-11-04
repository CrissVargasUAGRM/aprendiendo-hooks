import { useEffect, useState } from "react";

    
    
const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
};

export const UseTrafficLight = () => {

    const [light, setLight] = useState<LightColor>('red');

    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
      if(countdown === 0){
        return;
      }

      const intervalId = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }, [countdown]);

    useEffect(() => {
      if(countdown === 0) {
        setCountdown(5);

        if(light === 'red'){
            setLight('green');
            return;
        }

        if(light === 'yellow'){
            setLight('red');
            return;
        }

        if(light === 'green'){
            setLight('yellow');
            return;
        }
      };
    }, [countdown, light])
    
    type LightColor = keyof typeof colors;

    return {
      countdown,
      light,
      colors,
      percentaje: (countdown / 5) * 100,
      greenLight: light === 'green' ? colors[light] : 'bg-gray-500',
      redLight: light === 'red' ? colors[light] : 'bg-gray-500',
      yellowLight: light === 'yellow' ? colors[light] : 'bg-gray-500',
    };
};