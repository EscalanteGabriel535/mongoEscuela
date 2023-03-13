import Alumnos from "../models/Alumnos";
import Asignaturas from "../models/Asignaturas";
import Profesores from "../models/Profesores";

export const renderAlumnos = async (req, res) => {
    const alumnos = await Alumnos.find().lean();
    const profesores = await Profesores.find().lean();
    const asignaturas = await Asignaturas.find().lean();
    res.render("index", { alumnos : alumnos, profesores : profesores, asignaturas : asignaturas });
  };


  export const createAlumnos = async (req, res) => {
    const alumnos = Alumnos(req.body);
    await alumnos.save();
    res.redirect("/");
  };


  export const editAlumnos = async (req, res) => {
    try {
      const alumnos = await Alumnos.findById(req.params.id).lean();
      res.render("editarAlumno", { alumnos });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const updateAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);
  
    res.redirect("/");
  };


  export const deleteAlumnos = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndDelete(id, req.body);
  
    res.redirect("/");
  };


export const statusAlumnos = async(req,res) =>{
    const {id} = req.params;
    const alumnos = await Alumnos.findById(id);
    alumnos.opcion = !alumnos.opcion;
    await alumnos.save();
    res.redirect("/");
  };