class Sensor{

    constructor(id,title,description,latitude,longitude,parametros){
        this.id = id;
        this.title = title;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
        this.setParametros(parametros);
    }

    setParametros(parametros){
        if(parametros == null){
            this.latitudeDelta = 0.0142;
            this.longitudeDelta = 0.0231;
        }else if(parametros.length == 2){
            this.latitudeDelta = parametros[0];
            this.longitudeDelta = parametros[1];
        }
    }
    
}
export default Sensor;