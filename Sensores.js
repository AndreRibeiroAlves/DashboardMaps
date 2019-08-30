import Sensor from './Sensor';
class Sensores{
    get estado(){
        return {
            places: [
                new Sensor(1, 'Sensor 1', 'Detalhes', -27.2106710, -49.6362700),
                new Sensor(2, 'Sensor 2', 'Detalhes', -27.2008710, -49.6332700),
                new Sensor(3, 'Sensor 3', 'Detalhes', -27.2068710, -49.6285700),
                new Sensor(4, 'Sensor 4', 'Detalhes', -27.2062710, -49.6322700),
                new Sensor(5, 'Sensor 5', 'Detalhes', -27.2066710, -49.6364700),
            ]
        };
    }
}

export default Sensores;