class Persona
{
    constructor(data)
    {
        //debugger;
        this.guid = data.guid;
        this.identificacion = data.identificacion;
		this.primernombre = data.primernombre;
		this.primerapellido = data.primerapellido;
		this.email = data.email;
		this.fechanacimiento = data.fechanacimiento;
        this.foto = data.foto;
    }
    calculaEdad()
    {
        let fecha_actual = new Date();
        let parteFn = this.fechanacimiento.split("-");
        let fechaCompara = new Date(parteFn[0], parteFn[1], parteFn[2]); //año, mes día
        return Math.floor((fecha_actual - fechaCompara) / 1000 / 3600 / 24 / 365);
    }
    getPersona()
    {
        return [
                  this.guid,
                  `<img src = '${this.foto}' class = 'ftabla'>`,
                  this.identificacion,
                  `${this.primernombre} ${this.primerapellido}`,
                  this.email,
                  this.fechanacimiento,
                  this.calculaEdad()
        ];
    }
}
module.exports = {Persona};
